// Hamburger //

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-links");
const navItems = document.querySelectorAll(".navbar-links ul li a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});




