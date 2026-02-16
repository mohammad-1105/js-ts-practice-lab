import { describe, expect, test } from "bun:test";
import { calculateCoffeeCartRevenue } from "../src/01-coffee-cart-revenue.ts";

describe("01 - Downtown Coffee Cart Revenue (7 pts)", () => {
  describe("Basic revenue calculation", () => {
    test("1 customer buys drip coffee ($4)", () => {
      expect(calculateCoffeeCartRevenue(1)).toEqual({ totalCups: 1, totalRevenue: 4 });
    });

    test("2 customers buy drip coffee ($8)", () => {
      expect(calculateCoffeeCartRevenue(2)).toEqual({ totalCups: 2, totalRevenue: 8 });
    });

    test("3 customers: 2 drip + 1 seasonal latte = $14", () => {
      expect(calculateCoffeeCartRevenue(3)).toEqual({ totalCups: 3, totalRevenue: 14 });
    });

    test("6 customers: 4 drip + 2 seasonal = $28", () => {
      expect(calculateCoffeeCartRevenue(6)).toEqual({ totalCups: 6, totalRevenue: 28 });
    });

    test("10 customers: 7 drip + 3 seasonal = $46", () => {
      expect(calculateCoffeeCartRevenue(10)).toEqual({ totalCups: 10, totalRevenue: 46 });
    });

    test("9 customers: 6 drip + 3 seasonal = $42", () => {
      expect(calculateCoffeeCartRevenue(9)).toEqual({ totalCups: 9, totalRevenue: 42 });
    });
  });

  describe("Large numbers", () => {
    test("100 customers computes correctly", () => {
      expect(calculateCoffeeCartRevenue(100)).toEqual({ totalCups: 100, totalRevenue: 466 });
    });
  });

  describe("Validation", () => {
    test("0 customers returns zeroed object", () => {
      expect(calculateCoffeeCartRevenue(0)).toEqual({ totalCups: 0, totalRevenue: 0 });
    });

    test("Negative number returns zeroed object", () => {
      expect(calculateCoffeeCartRevenue(-5)).toEqual({ totalCups: 0, totalRevenue: 0 });
    });

    test("Decimal number returns zeroed object", () => {
      expect(calculateCoffeeCartRevenue(3.5)).toEqual({ totalCups: 0, totalRevenue: 0 });
    });

    test("String input returns zeroed object", () => {
      expect(calculateCoffeeCartRevenue("ten" as any)).toEqual({ totalCups: 0, totalRevenue: 0 });
    });

    test("undefined returns zeroed object", () => {
      expect(calculateCoffeeCartRevenue(undefined as any)).toEqual({
        totalCups: 0,
        totalRevenue: 0,
      });
    });

    test("null returns zeroed object", () => {
      expect(calculateCoffeeCartRevenue(null as any)).toEqual({ totalCups: 0, totalRevenue: 0 });
    });
  });
});
