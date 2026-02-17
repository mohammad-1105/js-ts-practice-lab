import { describe, expect, test } from "bun:test";
import {
  createComboDescription,
  generateComboReceipt,
  getComboStats,
  searchComboMenu,
} from "../src/12-combo-platter.ts";

describe("12 - Restaurant Combo Platter: Mixed Methods Capstone (9 pts)", () => {
  const combos = [
    {
      name: "Family Veg Combo",
      items: ["paneer tikka", "naan", "dal fry"],
      price: 450,
      isVeg: true,
    },
    {
      name: "Chicken Feast Combo",
      items: ["butter chicken", "naan", "rice"],
      price: 550,
      isVeg: false,
    },
    {
      name: "South Special Combo",
      items: ["dosa", "sambar", "chutney"],
      price: 300,
      isVeg: true,
    },
    {
      name: "Mini Lunch Combo",
      items: ["roti", "dal", "salad"],
      price: 250,
      isVeg: true,
    },
  ];

  describe("createComboDescription", () => {
    test("creates formatted description for veg combo", () => {
      expect(createComboDescription(combos[0])).toBe(
        "FAMILY VEG COMBO (Veg) - Items: paneer tikka, naan, dal fry - Rs.450.00",
      );
    });

    test("creates formatted description for non-veg combo", () => {
      expect(createComboDescription(combos[1])).toBe(
        "CHICKEN FEAST COMBO (Non-Veg) - Items: butter chicken, naan, rice - Rs.550.00",
      );
    });

    test('returns "" for non-object', () => {
      expect(createComboDescription("not object")).toBe("");
      expect(createComboDescription(null as any)).toBe("");
    });

    test('returns "" for missing required fields', () => {
      expect(createComboDescription({ name: "Test" })).toBe("");
      expect(createComboDescription({ name: "Test", items: [], price: 100 })).toBe("");
    });
  });

  describe("getComboStats", () => {
    test("returns correct stats", () => {
      const stats = getComboStats(combos);
      expect(stats.totalCombos).toBe(4);
      expect(stats.vegCount).toBe(3);
      expect(stats.nonVegCount).toBe(1);
      expect(stats.cheapest).toBe(250);
      expect(stats.costliest).toBe(550);
      expect(stats.names).toEqual([
        "Family Veg Combo",
        "Chicken Feast Combo",
        "South Special Combo",
        "Mini Lunch Combo",
      ]);
    });

    test("calculates correct average price", () => {
      const stats = getComboStats(combos);
      expect(stats.avgPrice).toBe("387.50");
    });

    test("returns null for empty array", () => {
      expect(getComboStats([])).toBeNull();
    });

    test("returns null for non-array", () => {
      expect(getComboStats("not array")).toBeNull();
      expect(getComboStats(null as any)).toBeNull();
    });

    test("works with single combo", () => {
      const stats = getComboStats([combos[0]]);
      expect(stats.totalCombos).toBe(1);
      expect(stats.cheapest).toBe(450);
      expect(stats.costliest).toBe(450);
    });
  });

  describe("searchComboMenu", () => {
    test("finds combo by name", () => {
      const result = searchComboMenu(combos, "family");
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe("Family Veg Combo");
    });

    test("finds combo by item", () => {
      const result = searchComboMenu(combos, "dal");
      expect(result).toHaveLength(2);
    });

    test("search is case-insensitive", () => {
      expect(searchComboMenu(combos, "DOSA")).toHaveLength(1);
    });

    test("returns [] when no match", () => {
      expect(searchComboMenu(combos, "pizza")).toEqual([]);
    });

    test("returns [] for non-array combos", () => {
      expect(searchComboMenu("not array", "dal")).toEqual([]);
    });

    test("returns [] for non-string query", () => {
      expect(searchComboMenu(combos, 123)).toEqual([]);
    });
  });

  describe("generateComboReceipt", () => {
    test("generates formatted receipt", () => {
      const receipt = generateComboReceipt("Alex", [combos[0], combos[2]]);
      expect(receipt).toContain("THALI RECEIPT");
      expect(receipt).toContain("Customer: ALEX");
      expect(receipt).toContain("- Family Veg Combo x Rs.450");
      expect(receipt).toContain("- South Special Combo x Rs.300");
      expect(receipt).toContain("Total: Rs.750");
      expect(receipt).toContain("Items: 2");
    });

    test("generates receipt for single combo", () => {
      const receipt = generateComboReceipt("Ravi", [combos[0]]);
      expect(receipt).toContain("Customer: RAVI");
      expect(receipt).toContain("Total: Rs.450");
      expect(receipt).toContain("Items: 1");
    });

    test('returns "" for non-string customerName', () => {
      expect(generateComboReceipt(123, [combos[0]])).toBe("");
    });

    test('returns "" for non-array combos', () => {
      expect(generateComboReceipt("Alex", "not array")).toBe("");
    });

    test('returns "" for empty combos', () => {
      expect(generateComboReceipt("Alex", [])).toBe("");
    });
  });
});
