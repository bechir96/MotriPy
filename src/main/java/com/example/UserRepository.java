
package com.example;
import java.sql.*;

public class UserRepository {
    private static final String DB_URL = "jdbc:sqlserver://localhost:1433;databaseName=MotriPy;TrustServerCertificate=True";
    private static final String USER = "sa";
    private static final String PASS = "94057027";

    public int addUser(User user) {
        int userId = 0;
    
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
            String query = "INSERT INTO Users (FirstName, LastName, Email, PasswordHash, PasswordSalt, IsConfirmed, IsDeleted) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
            PreparedStatement stmt = conn.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
    
            stmt.setString(1, user.getFirstName());
            stmt.setString(2, user.getLastName());
            stmt.setString(3, user.getEmail());
            stmt.setBytes(4, user.getPasswordHash());
            stmt.setBytes(5, user.getPasswordSalt());
            stmt.setBoolean(6, user.isConfirmed());
            stmt.setBoolean(7, user.isDeleted());
    
            int affectedRows = stmt.executeUpdate();
    
            if (affectedRows == 0) {
                throw new SQLException("Creating user failed, no rows affected.");
            }
    
            try (ResultSet generatedKeys = stmt.getGeneratedKeys()) {
                if (generatedKeys.next()) {
                    userId = generatedKeys.getInt(1);
                } else {
                    throw new SQLException("Creating user failed, no ID obtained.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    
        return userId;
    }

    public User getUserByEmail(String email) {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
            String query = "SELECT FirstName, LastName, Email, Address FROM Users WHERE Email = ?";
            PreparedStatement stmt = conn.prepareStatement(query);
            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                User user = new User();
                user.setFirstName(rs.getString("FirstName"));
                user.setLastName(rs.getString("LastName"));
                user.setEmail(rs.getString("Email"));
                user.setaddress(rs.getString("Address"));
                return user;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public void updateUser(User user) {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
            String query = "UPDATE Users SET FirstName = ?, LastName = ?, Email = ?, PasswordHash = ?, PasswordSalt = ?, IsConfirmed = ?, IsDeleted = ?, Address = ?, City = ?, ShippingAddress = ? WHERE UserId = ?";
PreparedStatement stmt = conn.prepareStatement(query);
stmt.setString(1, user.getFirstName());
stmt.setString(2, user.getLastName());
stmt.setString(3, user.getEmail());
stmt.setBytes(4, user.getPasswordHash());
stmt.setBytes(5, user.getPasswordSalt());
stmt.setBoolean(6, user.isConfirmed());
stmt.setBoolean(7, user.isDeleted());
stmt.setString(8, user.getaddress());
stmt.setString(9, user.getCity());
stmt.setString(10, user.getShippingAddress());
stmt.setInt(11, user.getUserId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteUser(User user) {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
            String query = "DELETE FROM Users WHERE UserId = ?";
            PreparedStatement stmt = conn.prepareStatement(query);
            stmt.setInt(1, user.getUserId());
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public User getUserById(int id) {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS)) {
            String query = "SELECT * FROM Users WHERE UserId = ?";
            PreparedStatement stmt = conn.prepareStatement(query);
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                User user = new User();
                user.setUserId(rs.getInt("UserId"));
                user.setFirstName(rs.getString("FirstName"));
                user.setLastName(rs.getString("LastName"));
                user.setEmail(rs.getString("Email"));
                user.setPasswordHash(rs.getBytes("PasswordHash"));
                user.setPasswordSalt(rs.getBytes("PasswordSalt"));
                user.setConfirmed(rs.getBoolean("IsConfirmed"));
                user.setDeleted(rs.getBoolean("IsDeleted"));
                user.setaddress(rs.getString("Address"));
                user.setCity(rs.getString("City"));
                user.setShippingAddress(rs.getString("ShippingAddress"));
                return user;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}