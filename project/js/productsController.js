import Products from "./products.js";
import ProductsView from "./productsViews.js";

export default class ProductsController {
  constructor(parent) {   // parent = .productsGrid
    this.parent = parent;
    this.products = new Products();
    this.views = new ProductsView();
  }
  init() {
    this.parentElement = document.querySelector(this.parent); //.productsGrid
    this.getProducts();
  }
  async getProducts(parent) {
    this.parentElement.innerHTML = "";
    const products = await this.products.getAllProducts();
    this.views.renderProducts(products, this.parentElement); ///.prodcutsGrid
  }

}