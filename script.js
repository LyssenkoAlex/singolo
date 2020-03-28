const hamburger = document.getElementById("idHamburger");
const header = document.querySelector("header");
const nav = header.querySelector("nav");
let mobileMenuOpened = false;

const drawMobileMenu = () => {
    if(mobileMenuOpened) {
        nav.classList.remove("to-right");
        mobileMenuOpened = false;
    }
    else {
        nav.classList.add("to-right");
        mobileMenuOpened = true;
    }
};

hamburger.addEventListener("click", drawMobileMenu);
