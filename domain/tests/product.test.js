import { describe, expect, test, beforeEach } from "@jest/globals";
import { Categories, Product } from "../product.js";

describe("Product class", () => {
  let aProduct;

  beforeEach(() => {
    aProduct = new Product("Manzana", 140, Categories.Fruits);
  });

  test("store name", () => {
    expect(aProduct.getName()).toBe("Manzana");
  });

  test("store price", () => {
    expect(aProduct.getPrice()).toBe(140);
  });

  test("store category", () => {
    expect(aProduct.getCategory()).toBe(Categories.Fruits);
  });

  test("check name not null", () => {
    expect(() => new Product(null)).toThrow();
  });

  test("check price is a number", () => {
    expect(() => new Product("Manzana", NaN)).toThrow();
  });
});
