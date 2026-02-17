import { describe, expect, test } from "bun:test";
import { calculateSalesTax } from "../src/04-sales-tax-calculator.ts";

describe("04 - Sales Tax Calculator (8 pts)", () => {
  describe("Sales Tax rate by category", () => {
    test("Essential items have 0% Sales Tax", () => {
      expect(calculateSalesTax(500, "essential")).toEqual({
        baseAmount: 500,
        taxRate: 0,
        taxAmount: 0,
        totalAmount: 500,
      });
    });

    test("Food items have 5% Sales Tax", () => {
      expect(calculateSalesTax(1000, "food")).toEqual({
        baseAmount: 1000,
        taxRate: 5,
        taxAmount: 50,
        totalAmount: 1050,
      });
    });

    test("Standard items have 12% Sales Tax", () => {
      expect(calculateSalesTax(1000, "standard")).toEqual({
        baseAmount: 1000,
        taxRate: 12,
        taxAmount: 120,
        totalAmount: 1120,
      });
    });

    test("Electronics have 18% Sales Tax", () => {
      expect(calculateSalesTax(1000, "electronics")).toEqual({
        baseAmount: 1000,
        taxRate: 18,
        taxAmount: 180,
        totalAmount: 1180,
      });
    });

    test("Luxury items have 28% Sales Tax", () => {
      expect(calculateSalesTax(1000, "luxury")).toEqual({
        baseAmount: 1000,
        taxRate: 28,
        taxAmount: 280,
        totalAmount: 1280,
      });
    });
  });

  describe("Decimal precision", () => {
    test("Sales Tax amount rounded to 2 decimals", () => {
      const result = calculateSalesTax(999.99, "food");
      expect(result.taxAmount).toBe(50);
      expect(result.totalAmount).toBe(1049.99);
    });

    test("Small amount with electronics Sales Tax", () => {
      const result = calculateSalesTax(33.33, "electronics");
      expect(result.taxAmount).toBe(6);
      expect(result.totalAmount).toBe(39.33);
    });

    test("Precision with luxury rate", () => {
      const result = calculateSalesTax(75.5, "luxury");
      expect(result.taxAmount).toBe(21.14);
      expect(result.totalAmount).toBe(96.64);
    });
  });

  describe("Case insensitivity", () => {
    test('"ELECTRONICS" works same as "electronics"', () => {
      expect(calculateSalesTax(100, "ELECTRONICS")).toEqual({
        baseAmount: 100,
        taxRate: 18,
        taxAmount: 18,
        totalAmount: 118,
      });
    });

    test('"Luxury" works same as "luxury"', () => {
      expect(calculateSalesTax(100, "Luxury")).toEqual({
        baseAmount: 100,
        taxRate: 28,
        taxAmount: 28,
        totalAmount: 128,
      });
    });

    test('"FOOD" works same as "food"', () => {
      expect(calculateSalesTax(200, "FOOD")).toEqual({
        baseAmount: 200,
        taxRate: 5,
        taxAmount: 10,
        totalAmount: 210,
      });
    });
  });

  describe("Unknown category", () => {
    test("Unknown category returns null", () => {
      expect(calculateSalesTax(100, "custom")).toBeNull();
    });

    test("Empty string category returns null", () => {
      expect(calculateSalesTax(100, "")).toBeNull();
    });
  });

  describe("Validation", () => {
    test("Negative amount returns null", () => {
      expect(calculateSalesTax(-100, "food")).toBeNull();
    });

    test("Zero amount returns null", () => {
      expect(calculateSalesTax(0, "food")).toBeNull();
    });

    test("String amount returns null", () => {
      expect(calculateSalesTax("thousand", "food")).toBeNull();
    });

    test("Infinity returns null", () => {
      expect(calculateSalesTax(Infinity, "food")).toBeNull();
    });

    test("NaN amount returns null", () => {
      expect(calculateSalesTax(NaN, "food")).toBeNull();
    });

    test("Category as number returns null", () => {
      expect(calculateSalesTax(100, 18)).toBeNull();
    });

    test("null amount returns null", () => {
      expect(calculateSalesTax(null, "food")).toBeNull();
    });
  });
});
