const popCarCardTemplate = document.getElementById("pop-car-card-template");
const popCarsContainer = document.getElementsByClassName("pop-cars-container");
const recomendationCarCardTemplate = document.getElementById(
  "recomendation-car-car-template"
);
const recomendationCarsContainer = document.getElementsByClassName(
  "recomendation-cars-container"
);
const showMoreCarBtn = document.getElementById("show-more-car-btn");
const filterSwapBtn = document.getElementById("filter-swap-btn");

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
  newCard.children[6].children[1].addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = `payment.html?carId=${car.id}?type=pop`;
  });
  newCard.addEventListener(
    "click",
    () => (window.location.href = `details.html?carId=${car.id}?type=pop`)
  );
  newCard.children[2].addEventListener("click", function (e) {
    let svgStyle = e.target.style;
    e.target.style.fill =
      svgStyle.fill == "rgb(237, 63, 63)" ? "#fff" : "rgb(237, 63, 63)";
  });
  popCarsContainer[0].appendChild(newCard);
});

recomendation_cars.slice(0, shownCardCount).forEach((car) => {
  let newCard = recomendationCarCardTemplate.cloneNode(true);
  newCard.addEventListener(
    "click",
    () => (window.location.href = `details.html?carId=${car.id}?type=rec`)
  );
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
  newCard.children[4].children[1].addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = `payment.html?carId=${car.id}?type=rec`;
  });
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
      newCard.addEventListener(
        "click",
        () => (window.location.href = `details.html?carId=${car.id}?type=rec`)
      );
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
      newCard.children[4].children[1].addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.href = `payment.html?carId=${car.id}?type=rec`;
      });
      recomendationCarsContainer[0].appendChild(newCard);
    });
  shownCardCount += 4;
  if (shownCardCount == 32) {
    showMoreCarBtn.disabled = true;
    showMoreCarBtn.textContent = "There is no more car.";
  }
};

showMoreCarBtn.addEventListener("click", showMoreCar);

const swapFilters = () => {
  const pickLocationSelect = document.getElementById("pick-location-select");
  const pickDateSelect = document.getElementById("pick-date-select");
  const pickTimeSelect = document.getElementById("pick-time-select");
  const dropLocationSelect = document.getElementById("drop-location-select");
  const dropDateSelect = document.getElementById("drop-date-select");
  const dropTimeSelect = document.getElementById("drop-time-select");

  let temp = pickLocationSelect.value;
  let temp1 = dropLocationSelect.value;
  pickLocationSelect.value = temp1;
  dropLocationSelect.value = temp;

  temp = pickDateSelect.value;
  temp1 = dropDateSelect.value;
  pickDateSelect.value = temp1;
  dropDateSelect.value = temp;

  temp = pickTimeSelect.value;
  temp1 = dropTimeSelect.value;
  pickTimeSelect.value = temp1;
  dropTimeSelect.value = temp;

  if (!filterSwapBtn.children[0].style.transform) {
    filterSwapBtn.children[0].style.transform = "rotate(180deg)";
  } else {
    let deg = +filterSwapBtn.children[0].style.transform.slice(7, -4);
    filterSwapBtn.children[0].style.transform = `rotate(${deg + 180}deg)`;
  }
};

filterSwapBtn.addEventListener("click", swapFilters);
