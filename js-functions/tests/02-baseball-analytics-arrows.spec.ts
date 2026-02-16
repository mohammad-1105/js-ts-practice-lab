import { describe, expect, test } from "bun:test";
import {
  calcBattingAverage,
  calcEra,
  calcSlugging,
  getPlayerCard,
  isTwoWayStar,
} from "../src/02-baseball-analytics-arrows.ts";

describe("02 - Baseball Analytics Dashboard (Arrow Functions) (7 pts)", () => {
  describe("Stat calculations", () => {
    test("slugging is computed and rounded to 3 decimals", () => {
      expect(calcSlugging(150, 300)).toBe(0.5);
      expect(calcSlugging(47, 143)).toBe(0.329);
    });

    test("ERA is computed and rounded to 2 decimals", () => {
      expect(calcEra(60, 180)).toBe(3);
      expect(calcEra(41, 98.2)).toBe(3.76);
    });

    test("batting average uses sacrifices and rounds to 3 decimals", () => {
      expect(calcBattingAverage(90, 300, 10)).toBe(0.31);
      expect(calcBattingAverage(105, 350)).toBe(0.3);
    });

    test("isTwoWayStar applies both thresholds", () => {
      expect(isTwoWayStar(0.301, 3.2)).toBe(true);
      expect(isTwoWayStar(0.284, 3.2)).toBe(false);
      expect(isTwoWayStar(0.301, 3.8)).toBe(false);
    });
  });

  describe("Player card", () => {
    test("builds card using helper functions", () => {
      expect(
        getPlayerCard({
          name: "Ava Brooks",
          totalBases: 175,
          atBats: 350,
          earnedRuns: 55,
          inningsPitched: 165,
          totalHits: 105,
          sacrifices: 5,
        }),
      ).toEqual({
        name: "Ava Brooks",
        slugging: 0.5,
        era: 3,
        battingAverage: 0.304,
        isTwoWayStar: true,
      });
    });

    test("invalid player returns null", () => {
      expect(getPlayerCard(null)).toBeNull();
      expect(getPlayerCard({ ...({} as object), name: "" } as any)).toBeNull();
    });
  });

  describe("Validation", () => {
    test("invalid numeric inputs return 0", () => {
      expect(calcSlugging(-1, 20)).toBe(0);
      expect(calcSlugging(20, 0)).toBe(0);
      expect(calcEra(-1, 30)).toBe(0);
      expect(calcEra(10, 0)).toBe(0);
      expect(calcBattingAverage(10, 5, 5)).toBe(0);
    });

    test("helpers are arrow functions (no prototype property)", () => {
      expect(Object.hasOwn(calcSlugging, "prototype")).toBe(false);
      expect(Object.hasOwn(calcEra, "prototype")).toBe(false);
      expect(Object.hasOwn(calcBattingAverage, "prototype")).toBe(false);
      expect(Object.hasOwn(isTwoWayStar, "prototype")).toBe(false);
      expect(Object.hasOwn(getPlayerCard, "prototype")).toBe(false);
    });
  });
});
