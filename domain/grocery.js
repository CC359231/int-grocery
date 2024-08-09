import { Product } from "./product.js";

export class Grocery {

  #name;
  #products = [];

  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  addProduct(name, price, category) {
    this.#products.push(new Product(name, price, category));
  }

  getProducts() {
    return this.#products;
  }

  totalProducts() {
    return this.#products.length;
  }

  totalAvailableProducts() {
    // TODO
  }
  
};

