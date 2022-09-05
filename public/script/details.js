const main_img = document.querySelector( ".main img ");
const images = document.querySelectorAll(".left .image-box img");
let icon =document.getElementById("navbar-open-close-button")
let main = document.querySelector("main");
let navbar = document.querySelector(".container nav");
let cancel_button = document.querySelector(".fa-remove");
let asidediv = document.querySelector(".asidediv");
icon.addEventListener('click', shownavbar)
cancel_button.addEventListener('click', removenavbar)

function shownavbar() {
  main.style.zIndex = -2;
  navbar.style.zIndex = 2;
  navbar.style.display = "block";
  navbar.style.position = "absolute";
  navbar.style.top=0
  navbar.style.height= `2770px`
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
      main_img.src=item.src
      Remove();
      item.classList.add("select-img");
    });
  });
  function Remove() {
    images.forEach((item) => {
      item.classList.remove("selecedSlide");
    });
  }