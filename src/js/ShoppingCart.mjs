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
  }
  renderCartContents(){
    const cartItems = getLocalStorage(this.key);
    if (cartItems) {
      const htmlItems = cartItems.map((item) => cardItemTemplate(item));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    } else {
      document.querySelector(this.parentSelector).innerHTML = "<p>Cart is empty!</p>"
    }
  }
}
