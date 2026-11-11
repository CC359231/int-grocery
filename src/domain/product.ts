enum Categories {
  Fruits = "Frutas",
  Vegetables = "Verduras",
}

export default Categories;
export type Category = Categories;

export class Product {
  #name!: string;
  #price!: number;
  #category!: Category;
  constructor(
    name: string,
    price: number,
    category: Category,
  ) {
    this.setName(name);
    this.setPrice(price);
    this.setCategory(category);
  }

  getName(): string {
    return this.#name;
  }

  getPrice(): number {
    return this.#price;
  }

  getCategory(): Category {
    return this.#category;
  }

  toString(): string {
    return `${this.#name}`;
  }

  setName(name: string): void {
    if (typeof name !== "string" || name.trim().length === 0) {
      throw new Error("El producto debe tener nombre");
    }
    this.#name = name.trim();
  }

  setPrice(price: number): void {
    if (!Number.isFinite(price) || price < 1) {
      throw new Error("El precio del producto debe ser mayor a cero");
    }
    this.#price = Math.trunc(price);
  }

  setCategory(category: Category): void {
    if (!Object.values(Categories).includes(category)) {
      throw new Error("La categoría del producto no es válida");
    }
    this.#category = category;
  }
}
