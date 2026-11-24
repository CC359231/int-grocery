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

  test("producto recien creado", () =>{
    expect(aProduct.getDiscount()).toBe(0);
  });

  test("acepta los dos limites del descuento", () =>{
    aProduct.setDiscount(100);
    expect(aProduct.getDiscount()).toBe(100);

    aProduct.setDiscount(0);
    expect(aProduct.getDiscount()).toBe(0);
  })

  test ("descuentos invalidos menor que 0", () =>{
    expect(() => aProduct.setDiscount(-1)).toThrow();
  })

  test ("descuento mayor que 100", () =>{
    expect(() => aProduct.setDiscount(101)).toThrow();
  })

  test("descuento decimal", () =>{
    expect(() => aProduct.setDiscount(2.5)).toThrow();
  })

  test("muestra solo nombre si el descuento es 0", () =>{
    expect(aProduct.toString()).toBe("Manzana");
  })

  test("muestra el nombre + descuento", () =>{
    aProduct.setDiscount(15);
    expect(aProduct.toString()).toBe("Manzana (15% de descuento)")
  })
});
