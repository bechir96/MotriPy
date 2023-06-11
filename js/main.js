/**
* Template Name: Yummy
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});
/*Cargar en carrito */
const stockProductos = [
  {
    id: 1,
    nombre: "Encastre",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/1/encastre.jpg",
  },
  {
    id: 2,
    nombre: "Encastre",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/1/encastre (2).jpg",
  },
  {
    id: 3,
    nombre: "Encastre",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/1/encastre (1).jpg",
  },
  {
    id: 4,
    nombre: "Encastre",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/1/encastre (3).jpg",
  },
  {
    id: 5,
    nombre: "Encastre",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/1/encastre (4).jpg",
  },
  {
    id: 6,
    nombre: "Encastre",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/1/encastre (5).jpg",
  },
  {
    id: 7,
    nombre: "Fichas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/2/fichas (4).jpg",
  },
  {
    id: 8,
    nombre: "Fichas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/2/fichas (5).jpg",
  },
  {
    id: 9,
    nombre: "Fichas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/2/Fichas (6).jpg",
  },
  {
    id: 11,
    nombre: "Fichas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/2/fichas (1).jpg",
  },
  {
    id: 10,
    nombre: "Fichas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/2/fichas (2).jpg",
  },
  {
    id: 12,
    nombre: "Fichas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 35000,
    img: "assets/img/productos/2/fichas (3).jpg",
  },
  {
    id: 13,
    nombre: "Rompezabezas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 40000,
    img: "assets/img/productos/3/rompecabezas (1).jpg",
  },
  {
    id: 14,
    nombre: "Rompezabezas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 40000,
    img: "assets/img/productos/3/rompecabezas (2).jpg",
  },
  {
    id: 15,
    nombre: "Rompezabezas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 40000,
    img: "assets/img/productos/3/rompecabezas (3).jpg",
  },
  {
    id: 16,
    nombre: "Rompezabezas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 40000,
    img: "assets/img/productos/3/rompecabezas (4).jpg",
  },
  {
    id: 17,
    nombre: "Rompezabezas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 40000,
    img: "assets/img/productos/3/rompecabezas (5).jpg",
  },
  {
    id: 18,
    nombre: "Rompezabezas",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 40000,
    img: "assets/img/productos/3/rompecabezas (6).jpg",
  },
  {
    id: 19,
    nombre: "Varios",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 25000,
    img: "assets/img/productos/4/Varios (1).jpg",
  },
  {
    id: 20,
    nombre: "Varios",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 25000,
    img: "assets/img/productos/4/Varios (2).jpg",
  },
  {
    id: 21,
    nombre: "Varios",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 25000,
    img: "assets/img/productos/4/Varios (3).jpg",
  },
  {
    id: 22,
    nombre: "Varios",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 25000,
    img: "assets/img/productos/4/Varios (4).jpg",
  },
  {
    id: 23,
    nombre: "Varios",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 25000,
    img: "assets/img/productos/4/Varios (5).jpg",
  },
  {
    id: 24,
    nombre: "Varios",
    cantidad: 1,
    desc: "Descripcion del producto descripcion del producto descripcion del producto descripcion del producto",
    precio: 25000,
    img: "assets/img/productos/4/Varios (6).jpg",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciar");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago');
const cartCant = document.querySelector(".cartCant");

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciar) {
  vaciar.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Agrega algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="container articulo" style="width: 18rem;">
    <div class="row card-body">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
      <h5 class="card-title pt-2 text-center text-success">${nombre}</h5>
      <hr>
      <p class="card-text text-primary">Precio: ${precio}</p>
      <hr>
      <p class="card-text text-black-50 descripcion">Descripcion: ${desc}</p>
      <hr>
      <p class="card-text text-primary">Cantidad: ${cantidad}</p>
      <button class="btn btn-success" onclick="agregarProducto(${id})"><i class="bi bi-cart-plus"></i> Agregar Producto</button> 
      </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".CartCarga .CartChar");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor  border-top">
        <div>
          <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div clas="cartCant">
          <p>Producto: ${nombre}</p>
          <p>Precio: ${precio}</p>
          <p><i class="bi bi-dash"></i> ${cantidad} <i class="bi bi-plus"></i></p>
          <button class=" btnCarrito btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      `;
    });
    guardarStorage()
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-success parrafo">¡Aun no agregaste nada!</p>
    `;
    if (precioTotal) {
      precioTotal.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
      );
    }
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }
  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegueteId = id;
  carrito = carrito.filter((juego) => juego.id !== juegueteId);
  mostrarCarrito();
}
const modificarCantidad = (id) =>{
  const existe = carrito.some(prod => prod.id === id)
  cartCant.addEventListener("click", (prod)=>{
    if(prod.target.classList.cartCant("bi bi-plus")) {
      if(existe){
        const prod = carrito.map(prod => {
          if(prod.id === id){
            prod.cantidad++
          }
        })
      }
    }
    if(prod.target.classList.cartCant("bi bi-dash")) {
      if(existe){
        const prod = carrito.map(prod => {
          if(prod.id === id){
            prod.cantidad--
          }
        })
      }
    }
  })
  mostrarCarrito()
}

function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }
 
 document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".articulo").forEach(fruta =>{

          fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
      })

  }


})

