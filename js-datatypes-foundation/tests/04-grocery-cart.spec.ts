import { describe, expect, test } from "bun:test";
import {
  addToCart,
  addUrgentItem,
  isInCart,
  mergeCarts,
  removeLastItem,
} from "../src/04-grocery-cart.ts";

describe("04 - Grocery Shopping Cart: Array Basics (8 pts)", () => {
  describe("addToCart", () => {
    test("adds item and returns new length", () => {
      const cart = ["tomato", "onion"];
      expect(addToCart(cart, "chili")).toBe(3);
    });

    test("item is added at the end", () => {
      const cart = ["tomato", "onion"];
      addToCart(cart, "chili");
      expect(cart[2]).toBe("chili");
    });

    test("returns -1 for non-array cart", () => {
      expect(addToCart("not array", "chili")).toBe(-1);
      expect(addToCart(null, "chili")).toBe(-1);
    });

    test("does not add empty string item", () => {
      const cart = ["tomato"];
      expect(addToCart(cart, "")).toBe(1);
      expect(cart).toEqual(["tomato"]);
    });

    test("does not add non-string item", () => {
      const cart = ["tomato"];
      expect(addToCart(cart, 123)).toBe(1);
    });
  });

  describe("addUrgentItem", () => {
    test("adds item at the beginning", () => {
      const cart = ["onion", "chili"];
      const result = addUrgentItem(cart, "coriander");
      expect(result[0]).toBe("coriander");
      expect(result).toEqual(["coriander", "onion", "chili"]);
    });

    test("returns [] for non-array cart", () => {
      expect(addUrgentItem("not array", "item")).toEqual([]);
    });

    test("returns cart unchanged for invalid item", () => {
      const cart = ["tomato"];
      expect(addUrgentItem(cart, 123)).toEqual(["tomato"]);
      expect(addUrgentItem(cart, "")).toEqual(["tomato"]);
    });
  });

  describe("removeLastItem", () => {
    test("removes and returns last item", () => {
      const cart = ["tomato", "onion", "chili"];
      expect(removeLastItem(cart)).toBe("chili");
      expect(cart).toEqual(["tomato", "onion"]);
    });

    test("returns undefined for empty array", () => {
      expect(removeLastItem([])).toBeUndefined();
    });

    test("returns undefined for non-array", () => {
      expect(removeLastItem("not array")).toBeUndefined();
      expect(removeLastItem(null as any)).toBeUndefined();
    });
  });

  describe("isInCart", () => {
    test("returns true when item is in cart", () => {
      expect(isInCart(["tomato", "onion"], "onion")).toBe(true);
    });

    test("returns false when item is not in cart", () => {
      expect(isInCart(["tomato", "onion"], "chili")).toBe(false);
    });

    test("returns false for non-array cart", () => {
      expect(isInCart("not array", "item")).toBe(false);
      expect(isInCart(null, "item")).toBe(false);
    });

    test("returns false for empty cart", () => {
      expect(isInCart([], "tomato")).toBe(false);
    });
  });

  describe("mergeCarts", () => {
    test("merges two carts", () => {
      expect(mergeCarts(["tomato"], ["chili", "ginger"])).toEqual(["tomato", "chili", "ginger"]);
    });

    test("merges with empty cart", () => {
      expect(mergeCarts(["tomato"], [])).toEqual(["tomato"]);
    });

    test("treats non-array as empty", () => {
      expect(mergeCarts("not array", ["chili"])).toEqual(["chili"]);
      expect(mergeCarts(["tomato"], null)).toEqual(["tomato"]);
    });

    test("treats both non-arrays as empty", () => {
      expect(mergeCarts(null, undefined)).toEqual([]);
    });
  });
});
