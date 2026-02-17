import { describe, expect, test } from "bun:test";
import {
  getCoffeeOrderLength,
  getFirstAndLastChar,
  hasSpecialIngredient,
  shoutCoffeeOrder,
  whisperCoffeeOrder,
} from "../src/01-coffee-order.ts";

describe("01 - Coffee Shop Order System: String Basics (7 pts)", () => {
  describe("getCoffeeOrderLength", () => {
    test("returns length of trimmed order", () => {
      expect(getCoffeeOrderLength("latte")).toBe(5);
    });

    test("trims spaces before counting", () => {
      expect(getCoffeeOrderLength("  cold brew  ")).toBe(9);
    });

    test("returns 0 for whitespace-only string", () => {
      expect(getCoffeeOrderLength("   ")).toBe(0);
    });

    test("returns -1 for non-string input", () => {
      expect(getCoffeeOrderLength(123)).toBe(-1);
      expect(getCoffeeOrderLength(null as any)).toBe(-1);
      expect(getCoffeeOrderLength(undefined as any)).toBe(-1);
    });
  });

  describe("shoutCoffeeOrder", () => {
    test("converts order to uppercase", () => {
      expect(shoutCoffeeOrder("cappuccino")).toBe("CAPPUCCINO");
    });

    test("trims before converting", () => {
      expect(shoutCoffeeOrder("  iced mocha  ")).toBe("ICED MOCHA");
    });

    test('returns "" for non-string', () => {
      expect(shoutCoffeeOrder(42)).toBe("");
      expect(shoutCoffeeOrder(null as any)).toBe("");
    });

    test('returns "" for empty or whitespace-only string', () => {
      expect(shoutCoffeeOrder("")).toBe("");
      expect(shoutCoffeeOrder("   ")).toBe("");
    });
  });

  describe("whisperCoffeeOrder", () => {
    test("converts order to lowercase", () => {
      expect(whisperCoffeeOrder("AMERICANO")).toBe("americano");
    });

    test("trims before converting", () => {
      expect(whisperCoffeeOrder("  FLAT WHITE  ")).toBe("flat white");
    });

    test('returns "" for non-string', () => {
      expect(whisperCoffeeOrder(100)).toBe("");
      expect(whisperCoffeeOrder(undefined as any)).toBe("");
    });

    test('returns "" for empty or whitespace-only', () => {
      expect(whisperCoffeeOrder("")).toBe("");
      expect(whisperCoffeeOrder("  ")).toBe("");
    });
  });

  describe("hasSpecialIngredient", () => {
    test("finds ingredient (case-insensitive)", () => {
      expect(hasSpecialIngredient("Hazelnut Latte", "hazelnut")).toBe(true);
    });

    test("finds ingredient when order is lowercase", () => {
      expect(hasSpecialIngredient("vanilla cold coffee", "VANILLA")).toBe(true);
    });

    test("returns false when ingredient not found", () => {
      expect(hasSpecialIngredient("black coffee", "caramel")).toBe(false);
    });

    test("returns false for non-string inputs", () => {
      expect(hasSpecialIngredient(123, "coffee")).toBe(false);
      expect(hasSpecialIngredient("coffee", 123)).toBe(false);
      expect(hasSpecialIngredient(null, null)).toBe(false);
    });
  });

  describe("getFirstAndLastChar", () => {
    test("returns first and last characters", () => {
      expect(getFirstAndLastChar("espresso")).toEqual({ first: "e", last: "o" });
    });

    test("trims before getting chars", () => {
      expect(getFirstAndLastChar("  mocha  ")).toEqual({ first: "m", last: "a" });
    });

    test("works for single character", () => {
      expect(getFirstAndLastChar("a")).toEqual({ first: "a", last: "a" });
    });

    test("returns null for non-string", () => {
      expect(getFirstAndLastChar(42)).toBeNull();
      expect(getFirstAndLastChar(null as any)).toBeNull();
    });

    test("returns null for empty or whitespace-only", () => {
      expect(getFirstAndLastChar("")).toBeNull();
      expect(getFirstAndLastChar("   ")).toBeNull();
    });
  });
});
