import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

//the code for loadHeaderFooter
loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();//Find out what to pass here
const element = document.querySelector(".product-list");
const list = new ProductList(category, dataSource, element); // change params later

list.init();