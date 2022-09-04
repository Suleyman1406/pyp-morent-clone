const selectedOne = document.querySelector(".selected-first");
const optionsContainerOne = document.querySelector(".options-container-first");
const optionsListOne = document.querySelectorAll(".option-first");

const selectedTwo = document.querySelector(".selected-second");
const optionsContainerTwo = document.querySelector(".options-container-second");
const optionsListTwo = document.querySelectorAll(".option-second");

selectedOne.addEventListener("click", () => {
  optionsContainerOne.classList.toggle("active");
});

optionsListOne.forEach(o => {
  o.addEventListener("click", () => {
    selectedOne.innerHTML = o.querySelector("label").innerHTML;
    optionsContainerOne.classList.remove("active");
  });
});

selectedTwo.addEventListener("click", () => {
  optionsContainerTwo.classList.toggle("active");
});

optionsListTwo.forEach(o => {
  o.addEventListener("click", () => {
    selectedTwo.innerHTML = o.querySelector("label").innerHTML;
    optionsContainerTwo.classList.remove("active");
  });
});

const sumbitBtn = document.querySelector('.confirmation-btn');
const nameInput = document.querySelector(".name-input");
const addressInput = document.querySelector('.address-input');
const cityInput = document.querySelector('.city-input');
const numberInput = document.querySelector('.phone-input');
const pickUpLocation = document.querySelector('.pick-up-location');
const datePickUp = document.querySelector(".date-pick-up");
const timePickUp = document.querySelector(".time-pick-up");
const dropOffLocation = document.querySelector('.drop-off-location');
const datedropOff = document.querySelector(".drop-off-date");
const timedropOff = document.querySelector(".drop-off-time");
const cardRadio = document.querySelector('.card-radio');
const cardNumber = document.querySelector('.card-number')
const cardDate = document.querySelector('.card-date')
const cardCVC = document.querySelector('.card-cvc')
const cardHolder = document.querySelector('.card-holder');
const terms = document.querySelector('.terms');
const marketing = document.querySelector('.marketing');

const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
const regex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
const cvcRegex = /^[0-9]{3, 4}$/;
const dateRegex =
  /^([0-2][0-9]|(3)[0-1])( )(((0)[0-9])|((1)[0-2]))( )\d{4}$/i;
const onlyLetters = /^[A-Za-z]+$/;

sumbitBtn.addEventListener('click', () => {
  if (!nameInput.value) {
    handleError(nameInput)
  }
  if (!addressInput.value) {
    handleError(addressInput)
  }
  if (!cityInput.value) {
    handleError(cityInput)
  }
  if (!regex.test(numberInput.value) || !numberInput.value) {
    handleError(numberInput)
  }
  if (pickUpLocation.textContent.trim() === "Select your city") {
    handleError(pickUpLocation)
  }
  if (!datePickUp.value) {
    handleError(datePickUp)
  }
  if (!timePickUp.value) {
    handleError(timePickUp)
  }
  if (dropOffLocation.textContent.trim() === "Select your city") {
    handleError(dropOffLocation)
  }
  if (!datedropOff.value) {
    handleError(datedropOff)
  }
  if (!timedropOff.value) {
    handleError(timedropOff)
  }
  if (cardRadio.checked) {
    if (!visaRegex.test(cardNumber.value)) {
      handleError(cardNumber);
    }
    if (!dateRegex.test(cardDate.value)) {
      handleError(cardDate);
    }
    if (!cvcRegex.test(cardCVC.value)) {
      handleError(cardCVC);
    }
    if (!onlyLetters.test(cardHolder.value)) {
      handleError(cardHolder)
    }
  }
  if (!terms.checked) {
    handleError(terms.parentElement);
  }
  if (!marketing.checked) {
    handleError(marketing.parentElement)
  }
});

function handleError(input) {
  input.classList.add('payment-error');
  setTimeout(() => { input.classList.remove('payment-error') }, 4000)
}