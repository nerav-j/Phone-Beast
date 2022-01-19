const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
msg = " Phone Beast - ";
msg = "The Ideal Place For Smartphones -  " + msg;position = 0;
function scrolltitle() {
document.title = msg.substring(position, msg.length) + msg.substring(0, position); position++;
if (position > msg.length) position = 0
window.setTimeout("scrolltitle()",170);
}
scrolltitle();

const eye = document.querySelector('.iris');
window.addEventListener('mousemove', (event) => {
const x = -(window.innerWidth / 2 - event.pageX) / 45;
const y = -(window.innerHeight / 2 - event.pageY) / 45;
eye.style.transform = `rotate(-45deg) translateY(${y}px)  translateX(${x}px)`;         
        }); 
