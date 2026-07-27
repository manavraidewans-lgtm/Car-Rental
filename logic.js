// Hamburger //

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".navbar-links");
  const navItems = document.querySelectorAll(".navbar-links ul li a");

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




// Rental //

const cars = [
  {
    id: 0,
    name: "Shelby",
    brand: "Mustang",
    year: 2023,
    doors: "2",
    transmission: "Manual",
    fuel: "Petrol",
    price: 100000,
    image: "images/audi.png"
  },

  {
    id: 1,
    name: "VW Golf GTI",
    brand: "Volkswagen",
    year: 2020,
    doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    price: 3500,
    image: "images/golf.png"
  },

  {
    id: 2,
    name: "XUV",
    brand: "Mahindra",
    year: 2020,
    doors: "6/7",
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 6000,
    image: "images/camry.png"
  },

  {
    id: 3,
    name: "Maserati",
    brand: "Stellantis",
    year: 2026,
    doors: "2",
    transmission: "Automatic",
    fuel: "Electronic",
    price: 70000,
    image: "images/camry.png"
  },

  {
    id: 4,
    name: "Swift",
    brand: "Maruti",
    year: 2025,
    doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    price: 3000,
    image: "images/camry.png"
  },

  {
    id: 5,
    name: "Baleno",
    brand: "Maruti",
    year: 2022,
    doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    price: 5000,
    image: "images/camry.png"
  }

];