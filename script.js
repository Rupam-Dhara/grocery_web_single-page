
    let searchFrom = document.querySelector('.search-from');
document.querySelector('#search-btn').onclick = () =>{
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    searchFrom.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let loginForm = document.querySelector('.login-from');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
window.onscroll = () =>{
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    centerSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    centerSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });



















