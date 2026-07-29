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
    type:"Sports",
    image: "Assets/Shelby.png"
  },

  {
    id: 1,
    name: "VW Golf GTI",
    brand: "Volkswagen",
    year: 2020,
    doors: "2",
    transmission: "Automatic",
    fuel: "Diesel",
    price: 3500,
    type:"Sports Car",
    image: "Assets/GTI.png"
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
    type:"SUV",
    image: "Assets/XUV 700.PNG"
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
    type:"Sports",
    image: "Assets/Maserati.png"
  },

  {
    id: 4,
    name: "Swift",
    brand: "Maruti",
    year: 2025,
    doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    price: 3000,
    type:"Sedan",
    image: "Assets/Swift.png"
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
    type:"Sedan",
    image: "Assets/Baleno.png"
  },

  {
    id: 6,
    name: "AUDI",
    brand: "Audi",
    year: 2021,
    doors: "4/5",
    transmission: "Automatic",
    fuel: "Petrol",
    price: 5000,
    type:"Luxury",
    image: "Assets/audi Q7.PNG"
  },

];

function showCar(id) {
    const car = cars[id] ;
      document.getElementById("car-image").src = car.image;
      document.getElementById("Year").innerText = car.year;
      document.getElementById("Brand").innerText = car.brand;
      document.getElementById("transmission").innerText = car.transmission;
      document.getElementById("Fuel").innerText = car.fuel;
      document.getElementById("type").innerText = car.type;
      document.getElementById("price").innerText = car.price;
} 

showCar(6);




// Sign-in Button 

const signIn = document.getElementById("signin-but");








// Log-In Button

const LoginIn = document.getElementById("register-but");