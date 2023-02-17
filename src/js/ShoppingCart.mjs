import { getLocalStorage } from "./utils.mjs";

function cardItemTemplate(product) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${product.Images.PrimarySmall}"
      alt="${product.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${product.Name}</h2>
  </a>
  <p class="cart-card__color">${product.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${product.FinalPrice}</p>
  </li>`;
  return newItem;
}     

export default class ShoppingCart {
  constructor(key, parentSelector){
      this.key = key;
      this.parentSelector = parentSelector;
      this.total = 0;      
  }
  async init() {
    const list = getLocalStorage(this.key);
    if (list) {
      this.calculateListTotal(list);
    }
    this.renderCartContents(list);
  }
  calculateListTotal(list) {
    const amounts = list.map((item) => item.FinalPrice);
    this.total = amounts.reduce((sum, item) => sum + item);
  }
  renderCartContents(){
    const cartItems = getLocalStorage(this.key);
    if (cartItems) {
      const htmlItems = cartItems.map((item) => cardItemTemplate(item));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
      document.querySelector(".list-total").innerText += ` $${this.total}`;
    } else {
      document.querySelector(this.parentSelector).innerHTML = "<p>Cart is empty!</p>"
    }
  }
}
