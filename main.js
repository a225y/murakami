
// 捲軸移動時toggle CSS
 
// function scrollHeader() {
//     const header = document.querySelector("#header");
//     if (window.scrollY >= 60 ){
//         header.classList.add('scroll-header')   
//     }else{
//         header.classList.remove('scroll-header')
//     }
//     window.addEventListener('scroll', scrollHeader);
// }

window.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    header.classList.toggle("scroll-header", window.scrollY >= 50);
});

window.addEventListener("scroll", () => {
    const navItem = document.querySelectorAll('.nav-item a')
    for(let i=0;i<navItem.length;i++){
        navItem[i].classList.toggle("scroll-color", window.scrollY >= 50);
        
    }
});
window.addEventListener("scroll", () => {
    const navBtns = document.querySelectorAll('.nav__btns i')
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].classList.toggle("scroll-color", window.scrollY >= 50);

    }
});
window.addEventListener("scroll", () => {
    const navLogo = document.querySelector(".nav__logo");
    navLogo.classList.toggle("show-logo", window.scrollY >= 50);
});

// 主頁swiper
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

// 新品swiper
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 15,
    centeredSlides: true,
    loop: "true",
    slidesPerView: 'auto',
    
});
//縮小時menu
const navMenu = document.querySelector('#nav-menu');
const navLink = navMenu.querySelectorAll('.nav__link');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');


//open
if (navToggle) {
    
    // for(let i=0;navLink.length;i++){
    //     navLink[i].className('second__color');
    // }
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
};
//close
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
//購物車
const cart = document.querySelector('#cart');
const cartShop = document.querySelector('#cart-shop');
const cartClose = document.querySelector('#cart-close');
//open
if(cartShop){
    cartShop.addEventListener('click',()=>{
        cart.classList.add('show-car');
    })    
};
//close
if(cartClose){
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-car');
    })    
}

//登入框
const login = document.querySelector('#login');
const loginToggle = document.querySelector('#login-toggle');
const loginClose = document.querySelector('#login-close');
//open
if (loginToggle) {
    loginToggle.addEventListener('click', () => {
        login.classList.add('show-login');
    })
};
//close
if (loginClose) {
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login');
    })
}
function goTop(){
    const scrollUP = document.querySelector('#scroll-up');
    if (window.scrollY >= 350) scrollUP.classList.add('show-scrollup');
    else scrollUP.classList.remove('show-scrollup');
}
 window.addEventListener('scroll',goTop);