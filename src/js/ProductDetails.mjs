import ProductData from './ProductData.js';
import { setLocalStorage } from './utils.mjs';
const dataSource = new ProductData('tents');


export default class productDetail{
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init(){
        //this.product = await this.datasource.findProductByID(this.productID);
        
    }
    addtoCart(){
        setLocalStorage("so-cart", product);
    }
    renderProductDetails(){}

}

