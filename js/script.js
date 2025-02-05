const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header
        .classList
        .toggle("sticky", window.scrollY > 200)
});

var typed = new Typed(".auto_input", {
    strings: [
        "Web Designer", "Web Developer", "SEO Mearketer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})