import { describe, expect, test } from "bun:test";
import {
  applyLunchAddons,
  combineLunchPlans,
  createLunchPlan,
} from "../src/03-office-lunch-plan.ts";

describe("03 - Office Lunch Subscription Planner (8 pts)", () => {
  describe("createLunchPlan", () => {
    test("creates plan with defaults", () => {
      expect(createLunchPlan({ name: "Liam" })).toEqual({
        name: "Liam",
        mealType: "standard",
        days: 20,
        dailyRate: 15,
        totalCost: 300,
      });
    });

    test("creates plan with custom meal type and days", () => {
      expect(createLunchPlan({ name: "Sophia", mealType: "vegetarian", days: 10 })).toEqual({
        name: "Sophia",
        mealType: "vegetarian",
        days: 10,
        dailyRate: 14,
        totalCost: 140,
      });
    });

    test("invalid input returns null", () => {
      expect(createLunchPlan({})).toBeNull();
      expect(createLunchPlan({ name: "", mealType: "standard" })).toBeNull();
      expect(createLunchPlan({ name: "Noah", mealType: "keto" as any })).toBeNull();
      expect(createLunchPlan({ name: "Noah", days: 0 })).toBeNull();
    });
  });

  describe("combineLunchPlans", () => {
    test("combines totals and meal breakdown", () => {
      const a = createLunchPlan({ name: "Liam" });
      const b = createLunchPlan({ name: "Sophia", mealType: "vegetarian", days: 10 });
      const c = createLunchPlan({ name: "Ethan", mealType: "high_protein", days: 5 });

      expect(combineLunchPlans(a!, b!, c!)).toEqual({
        totalCustomers: 3,
        totalRevenue: 530,
        mealBreakdown: {
          standard: 1,
          vegetarian: 1,
          high_protein: 1,
        },
      });
    });

    test("returns null when no valid plans are provided", () => {
      expect(combineLunchPlans()).toBeNull();
      expect(
        combineLunchPlans(
          { bad: true } as any,
          { name: "x", mealType: "standard", days: "20", dailyRate: 10, totalCost: 200 } as any,
        ),
      ).toBeNull();
    });
  });

  describe("applyLunchAddons", () => {
    test("returns new plan with adjusted daily rate and total", () => {
      const base = createLunchPlan({ name: "Maya", mealType: "high_protein", days: 6 });
      const updated = applyLunchAddons(
        base,
        { name: "dessert", price: 2 },
        { name: "juice", price: 1.5 },
      );

      expect(updated).toEqual({
        name: "Maya",
        mealType: "high_protein",
        days: 6,
        dailyRate: 21.5,
        totalCost: 129,
        addonNames: ["dessert", "juice"],
      });
    });

    test("does not mutate original plan", () => {
      const base = createLunchPlan({ name: "Aiden", mealType: "standard", days: 5 });
      const snapshot = structuredClone(base);

      applyLunchAddons(base, { name: "fruit", price: 1 });

      expect(base).toEqual(snapshot);
    });

    test("invalid plan returns null", () => {
      expect(applyLunchAddons(null, { name: "fruit", price: 1 })).toBeNull();
      expect(applyLunchAddons({} as any, { name: "fruit", price: 1 })).toBeNull();
    });
  });
});
