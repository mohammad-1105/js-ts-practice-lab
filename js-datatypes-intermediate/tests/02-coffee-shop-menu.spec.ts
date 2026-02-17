import { describe, expect, test } from "bun:test";
import { formatCoffeeMenu } from "../src/02-coffee-shop-menu.ts";

describe("02 - Coffee Shop Menu (7 pts)", () => {
  describe("Basic formatting", () => {
    test("Single item formatted correctly", () => {
      expect(formatCoffeeMenu([{ name: "latte", price: 15 }])).toBe("LATTE - $15");
    });

    test("Two items joined with pipe separator", () => {
      expect(
        formatCoffeeMenu([
          { name: "latte", price: 15 },
          { name: "croissant", price: 12 },
        ]),
      ).toBe("LATTE - $15 | CROISSANT - $12");
    });

    test("Multiple items all formatted", () => {
      expect(
        formatCoffeeMenu([
          { name: "drip coffee", price: 10 },
          { name: "blueberry muffin", price: 20 },
          { name: "bagel sandwich", price: 15 },
        ]),
      ).toBe("DRIP COFFEE - $10 | BLUEBERRY MUFFIN - $20 | BAGEL SANDWICH - $15");
    });
  });

  describe("Name transformations", () => {
    test("Already uppercase name stays uppercase", () => {
      expect(formatCoffeeMenu([{ name: "COFFEE", price: 10 }])).toBe("COFFEE - $10");
    });

    test("Mixed case becomes full uppercase", () => {
      expect(formatCoffeeMenu([{ name: "Iced Latte", price: 15 }])).toBe("ICED LATTE - $15");
    });
  });

  describe("Filtering invalid items", () => {
    test("Skips item with price 0", () => {
      expect(
        formatCoffeeMenu([
          { name: "coffee", price: 10 },
          { name: "water", price: 0 },
          { name: "croissant", price: 12 },
        ]),
      ).toBe("COFFEE - $10 | CROISSANT - $12");
    });

    test("Skips item with negative price", () => {
      expect(
        formatCoffeeMenu([
          { name: "coffee", price: 10 },
          { name: "expired", price: -5 },
        ]),
      ).toBe("COFFEE - $10");
    });

    test("Skips item with empty name", () => {
      expect(
        formatCoffeeMenu([
          { name: "", price: 10 },
          { name: "coffee", price: 15 },
        ]),
      ).toBe("COFFEE - $15");
    });

    test("All items invalid returns empty string", () => {
      expect(
        formatCoffeeMenu([
          { name: "", price: 10 },
          { name: "water", price: 0 },
        ]),
      ).toBe("");
    });

    test("Mix of valid and invalid items", () => {
      expect(
        formatCoffeeMenu([
          { name: "coffee", price: 10 },
          { name: "", price: 20 },
          { name: "croissant", price: -5 },
          { name: "donut", price: 8 },
        ]),
      ).toBe("COFFEE - $10 | DONUT - $8");
    });
  });

  describe("Validation", () => {
    test("Empty array returns empty string", () => {
      expect(formatCoffeeMenu([])).toBe("");
    });

    test("Non-array input returns empty string", () => {
      expect(formatCoffeeMenu("menu")).toBe("");
    });

    test("null returns empty string", () => {
      expect(formatCoffeeMenu(null as any)).toBe("");
    });

    test("undefined returns empty string", () => {
      expect(formatCoffeeMenu(undefined as any)).toBe("");
    });
  });
});
