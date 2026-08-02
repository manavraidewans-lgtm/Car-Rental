// Hamburger //

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navbar-links");
  const navItems = document.querySelectorAll(".navbar-links ul li a");
  const signInBtn = document.getElementById("signin-but");
  const loginBtn = document.getElementById("register-but");

  if (!hamburger || !navLinks) return;

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleMenu);

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
});






// Login  button // 

const openBtn = document.getElementById("signin-but");
const closeBtn= document.getElementById("cut-close");
const outerDiv = document.getElementById("sigin-popup");

openBtn.addEventListener("click" , () => {
      outerDiv.classList.add("open");
});

closeBtn.addEventListener("click", () => {
      outerDiv.classList.remove("open");
});




// register //
const regopen = document.getElementById("register-but");
const regouter = document.getElementById("register-popup");
const regClose = document.getElementById("close-reg");

regopen.addEventListener("click" , () => {
  regouter.classList.add("open");
});

regClose.addEventListener("click", () => {
  regouter.classList.remove("open");
})