const hamburger = document.querySelector("#add-to-cart");
          
const list = document.querySelector(".sidebar-cart");

hamburger.addEventListener("click", CartMenu);


function CartMenu() {
  list.classList.toggle("active");
}
