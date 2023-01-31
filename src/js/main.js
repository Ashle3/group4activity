import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter } from './utils.mjs';

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const list = new ProductList("tents", dataSource, element); // change params later

//the code for loadHeaderFooter
loadHeaderFooter("./src/index.html");
//loadHeaderFooter("./product_pages/index.html")
// loadHeaderFooter("./cart/index.html");
// loadHeaderFooter("./src/index.html");
// loadHeaderFooter("./src/checkout.html"); //may need a checkout js file for this.

list.init();