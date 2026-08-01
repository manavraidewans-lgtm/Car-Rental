
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

  if (signInBtn) {
    signInBtn.addEventListener("click", () => {
      alert("Sign In is coming soon!");
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("Log In is coming soon!");
    });
  }
});



