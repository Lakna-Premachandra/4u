const hamburger = document.querySelector(".hamburger");
          
const list = document.querySelector(".header-2");

hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {
  list.classList.toggle("active");
}
