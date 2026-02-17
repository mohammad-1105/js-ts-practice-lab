import { describe, expect, test } from "bun:test";
import { summarizeTeamBudget } from "../src/08-team-budget-manager.ts";

describe("08 - Team Budget Manager (8 pts)", () => {
  describe("Basic calculations", () => {
    test("Total spent is correct sum of prices", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "Carter", role: "offense", price: 1200 },
        { name: "Brooks", role: "defense", price: 1600 },
      ]);
      expect(result.totalSpent).toBe(2800);
    });

    test("Remaining = budget - totalSpent", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "Carter", role: "offense", price: 1200 },
      ]);
      expect(result.remaining).toBe(7800);
    });

    test("playerCount matches array length", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "A", role: "offense", price: 100 },
        { name: "B", role: "defense", price: 200 },
      ]);
      expect(result.playerCount).toBe(2);
    });

    test("averagePrice is correctly rounded", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "A", role: "offense", price: 100 },
        { name: "B", role: "defense", price: 201 },
      ]);
      expect(result.averagePrice).toBe(151);
    });

    test("teamName is taken from team object", () => {
      const result = summarizeTeamBudget({ name: "NYC", budget: 5000 }, [
        { name: "Parker", role: "offense", price: 1600 },
      ]);
      expect(result.teamName).toBe("NYC");
    });
  });

  describe("Player stats", () => {
    test("costliestPlayer has highest price", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "Carter", role: "offense", price: 1200 },
        { name: "Brooks", role: "defense", price: 1600 },
        { name: "Reed", role: "special", price: 800 },
      ]);
      expect(result.costliestPlayer.name).toBe("Brooks");
      expect(result.costliestPlayer.price).toBe(1600);
    });

    test("cheapestPlayer has lowest price", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "Carter", role: "offense", price: 1200 },
        { name: "Brooks", role: "defense", price: 1600 },
        { name: "Reed", role: "special", price: 800 },
      ]);
      expect(result.cheapestPlayer.name).toBe("Reed");
      expect(result.cheapestPlayer.price).toBe(800);
    });

    test("Single player is both costliest and cheapest", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "Carter", role: "offense", price: 1200 },
      ]);
      expect(result.costliestPlayer.name).toBe("Carter");
      expect(result.cheapestPlayer.name).toBe("Carter");
    });
  });

  describe("Role grouping", () => {
    test("byRole correctly counts each role", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "A", role: "offense", price: 100 },
        { name: "B", role: "offense", price: 200 },
        { name: "C", role: "defense", price: 150 },
        { name: "D", role: "special", price: 300 },
      ]);
      expect(result.byRole).toEqual({ offense: 2, defense: 1, special: 1 });
    });

    test("All same role", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "A", role: "defense", price: 100 },
        { name: "B", role: "defense", price: 200 },
      ]);
      expect(result.byRole).toEqual({ defense: 2 });
    });
  });

  describe("Budget check", () => {
    test("Under budget => isOverBudget false", () => {
      const result = summarizeTeamBudget({ name: "BOS", budget: 9000 }, [
        { name: "A", role: "offense", price: 1000 },
      ]);
      expect(result.isOverBudget).toBe(false);
    });

    test("Over budget => isOverBudget true, remaining negative", () => {
      const result = summarizeTeamBudget({ name: "LAX", budget: 500 }, [
        { name: "Miller", role: "offense", price: 1700 },
      ]);
      expect(result.isOverBudget).toBe(true);
      expect(result.remaining).toBe(-1200);
    });

    test("Exactly at budget => isOverBudget false, remaining 0", () => {
      const result = summarizeTeamBudget({ name: "NYC", budget: 1000 }, [
        { name: "A", role: "offense", price: 1000 },
      ]);
      expect(result.isOverBudget).toBe(false);
      expect(result.remaining).toBe(0);
    });
  });

  describe("Validation", () => {
    test("null team returns null", () => {
      expect(summarizeTeamBudget(null, [{ name: "A", role: "offense", price: 100 }])).toBeNull();
    });

    test("Empty players array returns null", () => {
      expect(summarizeTeamBudget({ name: "BOS", budget: 9000 }, [])).toBeNull();
    });

    test("Non-array players returns null", () => {
      expect(summarizeTeamBudget({ name: "BOS", budget: 9000 }, "players")).toBeNull();
    });

    test("Negative budget returns null", () => {
      expect(
        summarizeTeamBudget({ name: "BOS", budget: -100 }, [
          { name: "A", role: "offense", price: 100 },
        ]),
      ).toBeNull();
    });

    test("Missing budget returns null", () => {
      expect(
        summarizeTeamBudget({ name: "BOS" }, [{ name: "A", role: "offense", price: 100 }]),
      ).toBeNull();
    });
  });
});
