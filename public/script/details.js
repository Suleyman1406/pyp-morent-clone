const main_img = document.querySelector(".main img ");
const images = document.querySelectorAll(".left .image-box img");
let icon = document.getElementById("navbar-open-close-button");
let main = document.querySelector("main");
let navbar = document.querySelector(".container nav");
let cancel_button = document.querySelector(".fa-remove");
let asidediv = document.querySelector(".asidediv");
icon.addEventListener("click", shownavbar);
cancel_button.addEventListener("click", removenavbar);

function shownavbar() {
  main.style.zIndex = -2;
  navbar.style.zIndex = 2;
  navbar.style.display = "block";
  navbar.style.position = "absolute";
  navbar.style.top = 0;
  navbar.style.height = `2770px`;
  asidediv.style.display = "block";
  cancel_button.style.display = "block";
}
function removenavbar() {
  asidediv.style.display = "none";
  navbar.style.display = "none";
  main.style.zIndex = 0;
  navbar.style.zIndex = 0;
}

images.forEach((item) => {
  item.addEventListener("click", function () {
    main_img.src = item.src;
    Remove();
    item.classList.add("select-img");
  });
});
function Remove() {
  images.forEach((item) => {
    item.classList.remove("selecedSlide");
  });
}

const popCarsContainer = document.getElementsByClassName("pop-cars-container");
const popCarCardTemplate = document.getElementById("pop-car-card-template");
const recomendationCarCardTemplate = document.getElementById(
  "recomendation-car-card-template"
);

popular_cars.forEach((car) => {
  let newCard = popCarCardTemplate.cloneNode(true);
  newCard.className = "car-card";
  newCard.id = `pop-car-card-${car.id}`;
  newCard.children[0].textContent = car.name;
  newCard.children[1].textContent = car.type;
  newCard.children[3].children[0].src = car.img;
  newCard.children[5].children[0].children[1].textContent = car.fuel;
  newCard.children[5].children[1].children[1].textContent = car.transmission;
  newCard.children[5].children[2].children[1].textContent = `${car.peopleCount} People`;
  newCard.children[6].children[0].children[0].children[0].textContent = `$${car.price}/`;
  newCard.children[6].children[0].children[1].textContent = car.oldPrice
    ? `$${car.oldPrice}`
    : "";
  newCard.children[6].children[1].addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = `payment.html?carId=${car.id}?type=pop`;
  });
  newCard.addEventListener(
    "click",
    () => (window.location.href = `details.html?carId=${car.id}&type=pop`)
  );
  newCard.children[2].addEventListener("click", function (e) {
    e.stopPropagation();
    let svgStyle = e.target.style;
    e.target.style.fill =
      svgStyle.fill == "rgb(237, 63, 63)" ? "#fff" : "rgb(237, 63, 63)";
  });
  popCarsContainer[0].appendChild(newCard);
});

recomendation_cars.forEach((car) => {
  let newCard = recomendationCarCardTemplate.cloneNode(true);
  newCard.className = "car-card";
  newCard.id = `recomendation-car-card-${car.id}`;
  newCard.children[0].textContent = car.name;
  newCard.children[1].textContent = car.type;
  newCard.children[3].children[0].src = car.img;
  newCard.children[4].style.top = "186px";
  newCard.children[5].children[0].children[1].textContent = car.fuel;
  newCard.children[5].children[1].children[1].textContent = car.transmission;
  newCard.children[5].children[2].children[1].textContent = `${car.peopleCount} People`;
  newCard.children[6].children[0].children[0].children[0].textContent = `$${car.price}/`;
  newCard.children[6].children[0].children[1].textContent = car.oldPrice
    ? `$${car.oldPrice}`
    : "";
  newCard.children[6].children[1].addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = `payment.html?carId=${car.id}?type=pop`;
  });
  newCard.addEventListener(
    "click",
    () => (window.location.href = `details.html?carId=${car.id}&type=pop`)
  );
  newCard.children[2].addEventListener("click", function (e) {
    e.stopPropagation();
    let svgStyle = e.target.style;
    e.target.style.fill =
      svgStyle.fill == "rgb(237, 63, 63)" ? "#fff" : "rgb(237, 63, 63)";
  });
  popCarsContainer[1].appendChild(newCard);
});
popCarsContainer[0].removeChild(popCarCardTemplate);
popCarsContainer[1].removeChild(recomendationCarCardTemplate);

const carNameHeader = document.getElementById("main-card-car-name");
const tableCarType = document.getElementById("table-car-type");
const tableCarCapacity = document.getElementById("table-car-capacity");
const tableCarSteering = document.getElementById("table-car-steering");
const tableCarFuel = document.getElementById("table-car-fuel");
const carPrice = document.getElementById("main-card-car-price");
const carOldPrice = document.getElementById("main-card-car-old-price");
const rentNowBtn = document.getElementById("rent-now-btn");
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

if (params.carId && params.type) {
  let car = null;
  if (params.type == "rec") {
    car = recomendation_cars.find((item) => item.id == params.carId);
  } else if (params.type == "pop") {
    car = popular_cars.find((item) => item.id == params.carId);
  }
  console.log(car);
  if (car) {
    console.log(car);
    carNameHeader.textContent = car.name;
    tableCarType.textContent = car.type;
    tableCarCapacity.textContent = car.peopleCount;
    tableCarSteering.textContent = car.transmission;
    carPrice.textContent = `$${car.price}/`;
    if (car.oldPrice) {
      carOldPrice.textContent = `$${car.oldPrice}`;
    } else carOldPrice.parentElement.removeChild(carOldPrice);
    tableCarFuel.textContent = car.fuel;
    rentNowBtn.addEventListener("click", () => {
      console.log("geldi");
      window.location.href = `payment.html?carId=${car.id}?type=rec`;
    });
  }
}
