import { describe, expect, test } from "bun:test";
import { calculateCityTaxiFare } from "../src/03-city-taxi-meter.ts";

describe("03 - City Taxi Meter (8 pts)", () => {
  describe("Distance-only fare", () => {
    test("Exactly 1 mile = $8 minimum fare", () => {
      expect(calculateCityTaxiFare(1)).toBe(8);
    });

    test("Less than 1 mile rounds up to 1 mile", () => {
      expect(calculateCityTaxiFare(0.5)).toBe(8);
    });

    test("2 miles = 8 + 3 = $11", () => {
      expect(calculateCityTaxiFare(2)).toBe(11);
    });

    test("3 miles = 8 + 3 + 3 = $14", () => {
      expect(calculateCityTaxiFare(3)).toBe(14);
    });

    test("5 miles = 8 + 3*4 = $20", () => {
      expect(calculateCityTaxiFare(5)).toBe(20);
    });

    test("7 miles = 8 + 12 + 4 = $24", () => {
      expect(calculateCityTaxiFare(7)).toBe(24);
    });

    test("10 miles = 8 + 12 + 10 = $30", () => {
      expect(calculateCityTaxiFare(10)).toBe(30);
    });

    test("3.2 miles ceils to 4 miles = $17", () => {
      expect(calculateCityTaxiFare(3.2)).toBe(17);
    });

    test("5.1 miles ceils to 6 miles = $22", () => {
      expect(calculateCityTaxiFare(5.1)).toBe(22);
    });
  });

  describe("Waiting charges", () => {
    test("2 miles + 2 waiting minutes = 11 + 2 = $13", () => {
      expect(calculateCityTaxiFare(2, 2)).toBe(13);
    });

    test("3 miles + 3 waiting minutes = 14 + 4 = $18", () => {
      expect(calculateCityTaxiFare(3, 3)).toBe(18);
    });

    test("5 miles + 5 waiting minutes = 20 + 6 = $26", () => {
      expect(calculateCityTaxiFare(5, 5)).toBe(26);
    });

    test("1 mile + 1 waiting minute = 8 + 2 = $10", () => {
      expect(calculateCityTaxiFare(1, 1)).toBe(10);
    });

    test("7 miles + 4 waiting minutes = 24 + 4 = $28", () => {
      expect(calculateCityTaxiFare(7, 4)).toBe(28);
    });

    test("0 waiting minutes adds no waiting charge", () => {
      expect(calculateCityTaxiFare(3, 0)).toBe(14);
    });
  });

  describe("Validation", () => {
    test("Zero distance returns -1", () => {
      expect(calculateCityTaxiFare(0)).toBe(-1);
    });

    test("Negative distance returns -1", () => {
      expect(calculateCityTaxiFare(-5)).toBe(-1);
    });

    test("String distance returns -1", () => {
      expect(calculateCityTaxiFare("three" as any)).toBe(-1);
    });

    test("Negative waiting minutes returns -1", () => {
      expect(calculateCityTaxiFare(3, -2)).toBe(-1);
    });

    test("undefined distance returns -1", () => {
      expect(calculateCityTaxiFare(undefined as any)).toBe(-1);
    });
  });
});
