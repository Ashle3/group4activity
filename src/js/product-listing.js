import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter } from './utils.mjs';

//the code for loadHeaderFooter
loadHeaderFooter();

const dataSource = new ProductData();//Find out what to pass here
const element = document.querySelector(".product-list");
const list = new ProductList("tents", dataSource, element); // change params later

list.init();