package com.example;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;

public class RegistrationController extends AbstractVerticle {

    private UserService userService;
    private EmailService emailService;
    private PasswordService passwordService;
    private ObjectMapper objectMapper;

    public RegistrationController(UserService userService, EmailService emailService, Vertx vertx) {
        this.userService = userService;
        this.emailService = emailService;
        this.vertx = vertx;
        this.passwordService = new PasswordService();
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public void start() {
        Router router = Router.router(vertx);

        // Route for user registration
        router.post("/register").handler(this::handleRegistration);
        
        // Route for validating user account
        router.get("/validate/:token").handler(this::handleValidation);

        // Route for getting user by user ID
        router.get("/user/:userId").handler(this::handleGetUser);

        vertx.createHttpServer().requestHandler(router).listen(8080, result -> {
            if (result.succeeded()) {
                System.out.println("HTTP server started on port 8080");
            } else {
                System.err.println("Failed to start HTTP server");
                result.cause().printStackTrace();
            }
        });
    }

    public void handleGetUser(RoutingContext context) {
        String userId = context.request().getParam("userId");
        User user = userService.findUserById(userId);
    
        if (user != null) {
            context.response().setStatusCode(200).end(Json.encodePrettily(user));
        } else {
            context.response().setStatusCode(404).end();
        }
    }
    public void handleValidation(RoutingContext context) {
        System.out.println("Handling validation");
        String token = context.request().getParam("token");
        System.out.println("Token: " + token);
    
        // Retrieve the user by the token
        User user = userService.findUserByToken(token);
    
        if (user == null) {
            // The token is invalid
            context.response().setStatusCode(400).end("Invalid token");
            return;
        }
    
        // Validate the user
        boolean success = userService.validateUser(user);
    
        if (success) {
            context.response().setStatusCode(200).end("User validated successfully");
        } else {
            context.response().setStatusCode(500).end("Could not validate user");
        }
    }
    public void handleRegistration(RoutingContext routingContext) {

        HttpServerResponse response = routingContext.response();
        response.putHeader("content-type", "application/json");
    
        try {
            // Convert the JSON string to a JSON object
            JsonObject jsonData = new JsonObject(routingContext.getBodyAsString());
    
            // Extract the data from the JSON object
            String firstName = jsonData.getString("firstName");
            String lastName = jsonData.getString("lastName");
            String email = jsonData.getString("email");
            String password = jsonData.getString("password");
    
            // Create a new User object with the form data
            User user = new User();
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setEmail(email);
            // Hash the password and set the hash and salt
            PasswordResult passwordResult = passwordService.hashPassword(password);
            user.setPasswordHash(passwordResult.getHash());
            user.setPasswordSalt(passwordResult.getSalt());
    
            try {
                // Register the user and get the userId
                int userId = userService.registerUser(user);
                
    
                // Create a response JSON object containing the user ID
                JsonObject responseData = new JsonObject();
                responseData.put("userId", userId);
    
                // Set the response status code and send the response
                response.setStatusCode(201)
                .putHeader("Content-Type", "application/json")
                .end(responseData.encode());
    
            }catch (IllegalArgumentException e) {
                String errorMessage = "Error: " + e.getMessage();
                response.setStatusCode(400)
                        .putHeader("Content-Type", "text/plain")
                        .end(errorMessage);
            } catch (Exception e) {
                e.printStackTrace();
                response.setStatusCode(500).end("Internal Server Error");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.setStatusCode(400).end("Invalid JSON format");
        }
    }
}