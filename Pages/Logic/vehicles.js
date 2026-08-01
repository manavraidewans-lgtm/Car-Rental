const Cardcars = [
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
    image: "../Assets/Shelby.png"
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
    image: "../Assets/GTI.png"
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
    image: "../Assets/XUV 700.PNG"
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
    image: "../Assets/Maserati.png"
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
    image: "../Assets/Swift.png"
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
    image:"../Assets/Baleno.png"
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
    image: "../Assets/audi Q7.PNG"
  },

  {
    id: 7,
    name: "Polo",
    brand: "Volkswagen",
    year: 2016,
    doors: "4/5",
    transmission: "Manual",
    fuel: "Hybrid",
    price: 1000,
    type:"Seadn",
    image: "../Assets/polo.png"
  },

  {
    id: 8,
    name: "Breeza",
    brand: "Maruti",
    year: 2021,
    doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    price: 3000,
    type:"Seadn",
    image: "../Assets/Breeza.png"
  },

  {
    id: 9,
    name: "Mada",
    brand: "Mazda",
    year: 2026,
    doors: "4/5",
    transmission: "Manual",
    fuel: "Hybrid",
    price: 8000,
    type:"SUV",
    image: "../Assets/Mazda.png"
  },

  {
    id: 10,
    name: "Korando",
    brand: "KK",
    year: 2018,
    doors: "6/7",
    transmission: "Automatic",
    fuel: "Petrol",
    price: 2000,
    type:"SUV",
    image: "../Assets/korando.png"
  },

  {
    id: 11,
    name: "Mustang GT",
    brand: "Mustang",
    year: 2020,
    doors: "2",
    transmission: "Manual",
    fuel: "Petrol",
    price: 9000,
    type:"Sports",
    image: "../Assets/Mustang.png"
  },
  

  {
    id: 12,
    name: "Rolls Royals",
    brand: "Rolls Royals",
    year: 2026,
    doors: "4",
    transmission: "Automatic",
    fuel: "Diesel",
    price: 10000,
    type:"Luxury",
    image: "../Assets/RR.png"
  },

  {
    id: 13,
    name: "Mayback",
    brand: "Mercedes",
    year: 2036,
    doors: "4",
    transmission: "Automatic",
    fuel: "Petrol",
    price: 12000,
    type:"Luxury",
    image: "../Assets/Mayback"
  },

  {
    id: 14,
    name: "Hector",
    brand: "Moris Garage ",
    year: 2018,
    doors: "4",
    transmission: "Manual",
    fuel: "Diesel",
    price: 4000,
    type:"Sedan",
    image: "../Assets/Hector.png"
  },

  {
    id: 15,
    name: "BYD",
    brand: "Build Your Dream",
    year: 2021,
    doors: "4",
    transmission: "Automatic",
    fuel: "Petrol",
    price: 5000,
    type:"Sedan",
    image: "../Assets/BYD"
  },

];


const container = document.querySelector(".main-right");

function carsCC (Carss ) {
  Cardcars.forEach( (cars) => {

  const card = document.createElement("div");

  card.classList.add = "card";


  container.appendChild(card);
})

console.log(Carss);
}













