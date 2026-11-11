import { Grocery } from "./domain/grocery";
import Categories, { type Category } from "./domain/product";

const grocery = new Grocery("Almacén de Frutas y Verduras");
const byId = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`No se encontró el elemento #${id}`);
  }
  return element as T;
};

const nameInput = byId<HTMLInputElement>("inp-name");
const priceInput = byId<HTMLInputElement>("inp-price");
const categoryInput = byId<HTMLSelectElement>("sel-category");
const errorContainer = byId<HTMLDivElement>("add-error-container");
const errorMessage = byId<HTMLParagraphElement>("add-error-msg");

byId<HTMLHeadingElement>("grocery-name").textContent = grocery.getName();

function updateTotals(): void {
  byId<HTMLInputElement>("inp-total-products").value =
    grocery.totalProducts().toString();
}

function updateCatalog(): void {
  const fruitsList = byId<HTMLDivElement>("fruits-list");
  const vegetablesList = byId<HTMLDivElement>("vegetables-list");
  fruitsList.replaceChildren();
  vegetablesList.replaceChildren();

  grocery.getProducts().forEach((product) => {
    const productText = document.createElement("p");
    productText.textContent = `${product.getName()  } - $${  product.getPrice()  }`;
    const target = product.getCategory() === Categories.Fruits
      ? fruitsList
      : vegetablesList;
    target.appendChild(productText);
  });

  byId("empty-fruits-list").classList.toggle(
    "d-none",
    grocery.getProducts().some((product) => product.getCategory() === Categories.Fruits),
  );
  byId("empty-vegetables-list").classList.toggle(
    "d-none",
    grocery.getProducts().some(
      (product) => product.getCategory() === Categories.Vegetables,
    ),
  );
}

function clearInputs(): void {
  nameInput.value = "";
  priceInput.value = "";
}

byId<HTMLButtonElement>("btn-add").addEventListener("click", () => {
  try {
    grocery.addProduct(
      nameInput.value,
      Number(priceInput.value),
      categoryInput.value as Category,
    );
    errorContainer.classList.add("d-none");
    clearInputs();
    updateCatalog();
    updateTotals();
  } catch (error) {
    errorContainer.classList.remove("d-none");
    errorMessage.textContent =
      error instanceof Error ? error.message : "No se pudo agregar el producto";
  }
});

updateCatalog();
updateTotals();
