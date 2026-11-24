import { expect, test } from "vitest";
import { Coupon } from "../coupon";

test("devuelve el código con el que se creó el cupón", () => {
  const coupon = new Coupon("FIS10");
  expect(coupon.getCode()).toBe("FIS10");
});