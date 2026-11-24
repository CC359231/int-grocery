export class Coupon {
  #code: string;

  constructor(code: string) {
    // 1. Guardá el parámetro code en el atributo #code.
    this.#code = code;
  }

  getCode(): string {
    // 2. Devolvé el atributo #code.
    return this.#code;
  }
}