export default class ProductsView {
  renderProducts(products, parent) { //parent=.productsGrid
    const div1 = document.createElement("div");
    div1.classList.add("col1")
    const div2 = document.createElement("div");
    div2.classList.add("col2")
    parent.appendChild(div1);
    parent.appendChild(div2);
    var col = 1;
    products.forEach(product => {
      if (col == 1) {
        div1.appendChild(this.renderEachProduct(product));
        col++;
      } else {
        div2.appendChild(this.renderEachProduct(product));
        col--;
      }
    });

  }
  renderEachProduct(product) {
    const div = document.createElement("div");
    div.classList.add("singleProduct");
    // setting this to make getting the details for a specific hike easier later.
    div.setAttribute("data-sku", product.SKU);
    var OriginalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(product.OriginalPrice);
    var NetPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', }).format(product.NetPrice);

    // conditionally create and display the promotion div based on the json 
    if (parseFloat(product.Discount) > 0) {
      div.innerHTML = `
      <div class="productImg">
                <figure>
                  <picture>
                    <source media="(max-width:650px)" srcset="images/optimized250.jpg">
                    <img src="images/Cadena_de_Oro_10k_Italiana_Guchi_diamantada.webp"
                      alt="Cadena_de_Oro_10k_Italiana_Guchi diamantada.webp"
                      title="Cadena_de_Oro_10k_Italiana_Guchi diamantada.webp">
                  </picture>
                  <figcaption class="description sr-only">${product.Description}</figcaption>
                </figure>
              </div>
    
              <div class="productInfo">
                <div class="metal">Gold 10k</div>
                <h2 class="description">${product.Description}</h2>
                <div class="sku">${product.SKU}</div>
                <div class="promotion"><span class="original-price">${OriginalPrice} </span><span class="discount">${product.Discount}</span></div>
                <div class="net-price">${NetPrice}</div>
                <div class="free-shipping">Free shipping</div>
              </div>
        `}
    else {
      div.innerHTML = `
      <div class="productImg">
                <figure>
                  <picture>
                    <source media="(max-width:650px)" srcset="images/optimized250.jpg">
                    <img src="images/Cadena_de_Oro_10k_Italiana_Guchi_diamantada.webp"
                      alt="Cadena_de_Oro_10k_Italiana_Guchi diamantada.webp"
                      title="Cadena_de_Oro_10k_Italiana_Guchi diamantada.webp">
                  </picture>
                  <figcaption class="description sr-only">${product.Description}</figcaption>
                </figure>
              </div>
    
              <div class="productInfo">
                <div class="metal">Gold 10k</div>
                <h2 class="description">${product.Description}</h2>
                <div class="sku">${product.SKU}</div>
                <div class="net-price">${NetPrice}</div>
                <div class="free-shipping">Free shipping</div>
              </div>
              `
    }
    return div;
  }
}