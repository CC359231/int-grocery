import { describe, expect, test, beforeEach } from "@jest/globals";
import { Grocery } from "../grocery.js";
import { Categories, Product } from "../product.js";

describe('Grocery class', () => {
  let aGrocery;
  beforeEach(() => {
    aGrocery = new Grocery("Verduleria");
  });
  test('store name', () => {
    expect(aGrocery.getName()).toBe('Verduleria');
  });
  test('check name not null', () => {
    expect(() => new Grocery(null)).toThrow();
  });
  test('check name not empty', () => {
    // TODO
  });
  test('add a product', () => {
    aGrocery.addProduct("Manzana", 140, Categories.Fruits);
    expect(aGrocery.getProducts().length).toBe(1);
    expect(aGrocery.getProducts()[0]).toBeInstanceOf(Product);
  });
});
