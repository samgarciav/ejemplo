window.onload = toggleNav;

function toggleNav() {
  var hamburguer = document.getElementById("hamburger");
  const menuList = document.querySelector('.menu-list');
  hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("open");
    menuList.classList.toggle("open");
  });
}

const thisfunction = function () {
  console.log("hello");
}


const singleproduct = document.querySelectorAll(".singleProduct");
console.log(singleproduct);
singleproduct.forEach(product => { product.addEventListener("click", thisfunction) })