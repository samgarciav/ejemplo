export default class Products {
  constructor(prodcutsGrid) {
    this.parentElement = document.querySelector(prodcutsGrid);
    // what if I would to load a new page? In class we did overwrite the content of the page to show details...
    // this.backButton = this.buildBackButton();
  }

  // Get the data from the JSON file
  async getAllProducts() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  }

  //show the products in the respective parentElement (prodcutscol1 or productscol2)
  async showProducts() {
    this.parentElement.innerHTML = "";
    // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
    const data = await this.getAllProducts();
    renderProducts(this.parentElement, data);
    /* this.addHikeListener();
    // make sure the back button is hidden
    this.backButton.classList.add("hidden");
    this.comments.showComments(); */
  }

  // show one hike with full details in the parentElement
  /* showOneHike(hikeName) {
    const hike = this.getHikeByName(hikeName);
    this.parentElement.innerHTML = "";
    this.parentElement.appendChild(renderOneHikeFull(hike));
    // show the back button
    this.backButton.classList.remove("hidden");
    this.comments.renderAddComments();
    this.comments.showComments(hikeName);
    this.comments.makeButtonWork(hikeName);
  }

  getHikeByName(hikeName) {
    return this.getAllHikes().find((hike) => hike.name === hikeName);
  }

  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach((child) => {
      child.addEventListener("click", (e) => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
  buildBackButton() {
    const backButton = document.createElement("button");
    backButton.innerHTML = "&lt;- All Hikes";
    backButton.addEventListener("click", () => {
      this.showHikeList();
    });
    backButton.classList.add("hidden");
    this.parentElement.before(backButton);
    return backButton;
  }*/
}
// End of Products class

// methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
function renderProducts(parent, products) {
  console.log(products);
  products.forEach((product) => {
    parent.appendChild(renderProductOnGrid(product));
  });
}

