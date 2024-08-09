export const Categories = {
  Fruits: "Frutas",
  Vegetables: "Verduras"
}

export class Product {

  #name;
  #price;
  #category;

  constructor(name, price, category) {
    this.setName(name);
    this.setPrice(price);
    this.setCategory(category);
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  getCategory() {
    return this.#category;
  }

  toString() {
    return `${this.#name} $ ${this.#price}`;
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

  setPrice(price) {
    if (typeof (price) !== 'number' || isNaN(price)) {
      throw new Error();
    }
    if (price < 1) {
      throw new Error();
    }
    price = Math.trunc(price);
    this.#price = price;
  }

  setCategory(category) {
    this.#category = category;
  }
  
}