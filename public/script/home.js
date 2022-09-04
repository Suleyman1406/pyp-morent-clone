const popCarCardTemplate = document.getElementById("pop-car-card-template");
const popCarsContainer = document.getElementsByClassName("pop-cars-container");
const recomendationCarCardTemplate = document.getElementById(
  "recomendation-car-car-template"
);
const recomendationCarsContainer = document.getElementsByClassName(
  "recomendation-cars-container"
);
const showMoreCarBtn = document.getElementById("show-more-car-btn");

let shownCardCount = 8;

popular_cars.forEach((car) => {
  let newCard = popCarCardTemplate.cloneNode(true);
  newCard.className = "car-card";
  newCard.id = `pop-car-card-${car.id}`;
  newCard.children[0].textContent = car.name;
  newCard.children[1].textContent = car.type;
  newCard.children[3].children[0].src = car.img;
  newCard.children[5].children[0].textContent = car.fuel;
  newCard.children[5].children[1].textContent = car.transmission;
  newCard.children[5].children[2].textContent = `${car.peopleCount} People`;
  newCard.children[6].children[0].children[0].children[0].textContent = `$${car.price}/`;
  newCard.children[6].children[0].children[1].textContent = car.oldPrice
    ? `$${car.oldPrice}`
    : "";
  newCard.children[2].addEventListener("click", function (e) {
    let svgStyle = e.target.style;
    e.target.style.fill =
      svgStyle.fill == "rgb(237, 63, 63)" ? "#fff" : "rgb(237, 63, 63)";
  });
  popCarsContainer[0].appendChild(newCard);
});

recomendation_cars.slice(0, shownCardCount).forEach((car) => {
  let newCard = recomendationCarCardTemplate.cloneNode(true);

  newCard.id = `recomendation-car-card-${car.id}`;
  newCard.children[0].textContent = car.name;
  newCard.children[1].textContent = car.type;
  newCard.children[3].children[0].children[0].src = car.img;

  newCard.children[3].children[2].children[0].textContent = car.fuel;
  newCard.children[3].children[2].children[1].textContent = car.transmission;
  newCard.children[3].children[2].children[2].textContent = `${car.peopleCount} People`;

  newCard.children[4].children[0].children[0].children[0].textContent = `$${car.price}/`;
  newCard.children[4].children[0].children[1].textContent = car.oldPrice
    ? `$${car.oldPrice}`
    : "";

  newCard.children[2].addEventListener("click", function (e) {
    let svgStyle = e.target.style;
    e.target.style.fill =
      svgStyle.fill == "rgb(237, 63, 63)" ? "#fff" : "rgb(237, 63, 63)";
  });
  recomendationCarsContainer[0].appendChild(newCard);
});

popCarsContainer[0].removeChild(popCarCardTemplate);
recomendationCarsContainer[0].removeChild(recomendationCarCardTemplate);

const showMoreCar = () => {
  recomendation_cars
    .slice(shownCardCount, shownCardCount + 4)
    .forEach((car) => {
      let newCard = recomendationCarsContainer[0].children[0].cloneNode(true);
      newCard.id = `recomendation-car-card-${car.id}`;
      newCard.children[0].textContent = car.name;
      newCard.children[1].textContent = car.type;
      newCard.children[3].children[0].children[0].src = car.img;
      newCard.children[2].addEventListener("click", function (e) {
        let svgStyle = e.target.style;
        e.target.style.fill =
          svgStyle.fill == "rgb(237, 63, 63)" ? "#fff" : "rgb(237, 63, 63)";
      });

      newCard.children[3].children[2].children[0].textContent = car.fuel;
      newCard.children[3].children[2].children[1].textContent =
        car.transmission;
      newCard.children[3].children[2].children[2].textContent = `${car.peopleCount} People`;

      newCard.children[4].children[0].children[0].children[0].textContent = `$${car.price}/`;
      newCard.children[4].children[0].children[1].textContent = car.oldPrice
        ? `$${car.oldPrice}`
        : "";
      recomendationCarsContainer[0].appendChild(newCard);
    });
  shownCardCount += 4;
  if (shownCardCount == 32) {
    showMoreCarBtn.disabled = true;
    showMoreCarBtn.textContent = "There is no more car.";
  }
};

showMoreCarBtn.addEventListener("click", showMoreCar);

const addToFavoriteIcons = document.querySelectorAll(".add-to-favorite-svg");
