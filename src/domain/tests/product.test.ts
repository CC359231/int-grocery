import { beforeEach, describe, expect, test } from "vitest";
import Categories, { Product, type Category } from "../product";

describe("Product class", () => {
  let aProduct: Product;

  beforeEach(() => {
    aProduct = new Product("Manzana", 140, Categories.Fruits);
  });

  test("stores product data", () => {
    expect(aProduct.getName()).toBe("Manzana");
    expect(aProduct.getPrice()).toBe(140);
    expect(aProduct.getCategory()).toBe(Categories.Fruits);
  });

  test("rejects invalid name", () => {
    expect(() => new Product("", 140, Categories.Fruits)).toThrow();
  });

  test("rejects invalid price", () => {
    expect(() => new Product("Manzana", 0, Categories.Fruits)).toThrow();
  });

  test("rejects an invalid category", () => {
    expect(() => aProduct.setCategory("Otra" as Category)).toThrow();
  });
});
