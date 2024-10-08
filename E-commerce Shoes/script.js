'use strict'

const overlay = document.querySelector("[data-overlay]");
const navaOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElms = [overlay, navaOpenBtn, navCloseBtn];

for(let i = 0; i < navElms.length; i++){
    navElms[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}


// Header go to top

const header = document.querySelector("[]data-header");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 80){
        header.classList.add('active');
        goTopBtn.classList.add('active');
    }else{
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }
})