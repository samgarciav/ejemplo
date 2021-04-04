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



const changeView = document.querySelector(".changeView");
const productsGrid = document.querySelector(".productsGrid");
changeView.addEventListener("click", () => {
  console.log(changeView.innerHTML);
  if (changeView.innerText == "List") {
    changeView.innerHTML=`<img src="images/mosaic.svg" alt="View Icon">Mosaic`;
  }
  else if((changeView.innerText == "Mosaic")){
    changeView.innerHTML=`<img src="images/list.svg" alt="View Icon">List`;
  }
  productsGrid.classList.toggle('block')


});