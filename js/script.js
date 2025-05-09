const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header
        .classList
        .toggle("sticky", window.scrollY > 200)
});

var typed = new Typed(".auto_input", {
    strings: [
        "Web Designer", "Web Developer", "Graphic Designer", "Video editor"
    ],
    typeSpeed: 90,
    backSpeed: 110,
    loop: true
})