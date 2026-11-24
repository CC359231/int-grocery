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
  test("ningun producto tiene descuento", () => {
    expect(aGrocery.totalDiscountedProducts()).toBe(0);
  })

  test("cuenta solo los productos con descuento", () => {
    aGrocery.addProduct("Papas",60,Categories.Vegetables);
    aGrocery.addProduct("Boniatos",70,Categories.Vegetables);
    aGrocery.addProduct("Bananas",100,Categories.Fruits);
    aGrocery.addProduct("Naranjas",90,Categories.Fruits);

    const [Papas, Boniatos, Bananas, Naranjas] = aGrocery.getProducts();
    Papas.setDiscount(20);
    Boniatos.setDiscount(50);
    Bananas.setDiscount(0);
    Naranjas.setDiscount(0);

    expect(aGrocery.totalDiscountedProducts()).toBe(2);
  })
});
