import { beforeEach, describe, expect, test } from "vitest";
import { Grocery } from "../grocery";
import Categories from "../product";

describe("Grocery class", () => {
  let aGrocery: Grocery;

  beforeEach(() => {
    aGrocery = new Grocery("Verdulería");
  });

  test("stores a valid name", () => {
    expect(aGrocery.getName()).toBe("Verdulería");
  });

  test("rejects an empty name", () => {
    expect(() => new Grocery(" ")).toThrow();
  });

  test("adds products", () => {
    aGrocery.addProduct("Manzana", 140, Categories.Fruits);
    aGrocery.addProduct("Zanahoria", 80, Categories.Vegetables);

    expect(aGrocery.totalProducts()).toBe(2);
  });

  // TODO: Add a test for totalDiscountedProducts()
});
