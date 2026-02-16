import { describe, expect, test } from "bun:test";
import { calculateInstallmentPayoff } from "../src/08-installment-payoff.ts";

describe("08 - Installment Payoff Calculator (9 pts)", () => {
  describe("Basic payoff behavior", () => {
    test("valid loan pays off after some months", () => {
      const result = calculateInstallmentPayoff(10000, 0.01, 2000);
      expect(result.months).toBeGreaterThan(0);
      expect(result.totalPaid).toBeGreaterThan(10000);
      expect(result.totalInterest).toBe(Math.round((result.totalPaid - 10000) * 100) / 100);
    });

    test("very low interest still pays off", () => {
      const result = calculateInstallmentPayoff(5000, 0.001, 1000);
      expect(result.months).toBeGreaterThan(0);
      expect(result.totalPaid).toBeGreaterThanOrEqual(5000);
    });

    test("large payment pays off quickly", () => {
      const result = calculateInstallmentPayoff(10000, 0.02, 5000);
      expect(result.months).toBeLessThanOrEqual(3);
      expect(result.totalPaid).toBeGreaterThan(10000);
    });

    test("small payment takes longer", () => {
      const result = calculateInstallmentPayoff(10000, 0.01, 500);
      expect(result.months).toBeGreaterThan(20);
    });
  });

  describe("Last month partial payment", () => {
    test("does not overpay in final month", () => {
      const result = calculateInstallmentPayoff(1000, 0.01, 600);
      expect(result.months).toBe(2);
      expect(result.totalPaid).toBeCloseTo(1014.1, 1);
    });
  });

  describe("Infinite loop protection", () => {
    test("monthly payment less than first month interest returns error", () => {
      expect(calculateInstallmentPayoff(10000, 0.05, 400)).toEqual({
        months: -1,
        totalPaid: -1,
        totalInterest: -1,
      });
    });

    test("monthly payment equal to first month interest returns error", () => {
      expect(calculateInstallmentPayoff(10000, 0.05, 500)).toEqual({
        months: -1,
        totalPaid: -1,
        totalInterest: -1,
      });
    });

    test("monthly payment just above first month interest is allowed", () => {
      const result = calculateInstallmentPayoff(10000, 0.05, 501);
      expect(result.months).toBeGreaterThan(0);
    });
  });

  describe("Interest consistency", () => {
    test("totalInterest equals totalPaid minus principal", () => {
      const result = calculateInstallmentPayoff(20000, 0.02, 3000);
      expect(result.totalInterest).toBeCloseTo(result.totalPaid - 20000, 1);
    });
  });

  describe("Validation", () => {
    test("negative principal returns error object", () => {
      expect(calculateInstallmentPayoff(-5000, 0.01, 1000)).toEqual({
        months: -1,
        totalPaid: -1,
        totalInterest: -1,
      });
    });

    test("zero principal returns error object", () => {
      expect(calculateInstallmentPayoff(0, 0.01, 1000)).toEqual({
        months: -1,
        totalPaid: -1,
        totalInterest: -1,
      });
    });

    test("negative rate returns error object", () => {
      expect(calculateInstallmentPayoff(10000, -0.01, 1000)).toEqual({
        months: -1,
        totalPaid: -1,
        totalInterest: -1,
      });
    });

    test("zero monthly payment returns error object", () => {
      expect(calculateInstallmentPayoff(10000, 0.01, 0)).toEqual({
        months: -1,
        totalPaid: -1,
        totalInterest: -1,
      });
    });

    test("string input returns error object", () => {
      expect(calculateInstallmentPayoff("ten thousand" as any, 0.01, 1000)).toEqual({
        months: -1,
        totalPaid: -1,
        totalInterest: -1,
      });
    });
  });
});
