import { renderListWithTemplate } from "./utils.mjs";


function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`
}     

export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;        
    };
    async init(){
      const list = await this.dataSource.getData();
      // render the list
      this.filterList(list);
      this.renderList(list);
      /*
      findElementById......
      insert template
      */
    };
      
    // this is definitely temporary, do not keep this.
    filterList(list){
      var temp = list[2];
      list[2] = list[3];
      list[3] = list[5];
      list.pop();
      list.pop();
      console.log(list);
    }

    renderList(list){
      /*const pain = list.map(productCardTemplate);
      this.listElement.insertAdjacentHTML('afterbegin', pain.join(''));*/
      console.log(this);
      renderListWithTemplate(productCardTemplate, this.listElement, list);
    }

}

