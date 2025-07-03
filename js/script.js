const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header
        .classList
        .toggle("sticky", window.scrollY > 200)
});

var typed = new Typed(".auto_input", {
    strings: [
        "A Web Designer", "A Web Developer", "A Graphic Designer", "A Video editor"
    ],
    typeSpeed: 90,
    backSpeed: 110,
    loop: true
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const menuIcon = document.querySelector('.menu-icon');
        const navMenu = document.querySelector('.nav_menu');

        console.log('DOMContentLoaded fired.');
        console.log('menuIcon:', menuIcon);
        console.log('navMenu:', navMenu);

        if (menuIcon && navMenu) {
            menuIcon.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                console.log('Menu toggled. navMenu active class:', navMenu.classList.contains('active'));
            });
        } else {
            console.log('Menu icon or nav menu not found.');
        }
    }, 100); // Add a small delay
});