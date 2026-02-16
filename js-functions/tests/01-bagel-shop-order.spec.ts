import { describe, expect, test } from "bun:test";
import { calculateBagelOrder } from "../src/01-bagel-shop-order.ts";

describe("01 - Manhattan Bagel Shop Order Calculator (7 pts)", () => {
  describe("Valid orders", () => {
    test("default quantity and toast settings apply", () => {
      expect(calculateBagelOrder("plain")).toEqual({
        type: "plain",
        quantity: 1,
        pricePerBagel: 3,
        total: 3,
      });
    });

    test("toasted surcharge is added per bagel", () => {
      expect(calculateBagelOrder("everything", 2, true)).toEqual({
        type: "everything",
        quantity: 2,
        pricePerBagel: 4.5,
        total: 9,
      });
    });

    test("supports decimal base prices", () => {
      expect(calculateBagelOrder("blueberry", 4, true)).toEqual({
        type: "blueberry",
        quantity: 4,
        pricePerBagel: 4.75,
        total: 19,
      });
    });
  });

  describe("Validation", () => {
    test("unknown bagel type returns null", () => {
      expect(calculateBagelOrder("pretzel")).toBeNull();
    });

    test("blank bagel type returns null", () => {
      expect(calculateBagelOrder("" as string)).toBeNull();
    });

    test("non-positive quantity returns null", () => {
      expect(calculateBagelOrder("sesame", 0, false)).toBeNull();
      expect(calculateBagelOrder("sesame", -3, false)).toBeNull();
    });

    test("non-integer quantity returns null", () => {
      expect(calculateBagelOrder("asiago", 2.5, false)).toBeNull();
    });

    test("non-number quantity returns null", () => {
      expect(calculateBagelOrder("plain", "3" as unknown as number, false)).toBeNull();
    });
  });
});
