import { describe, expect, test } from "bun:test";
import { buildHolidayLightsPlan } from "../src/06-holiday-lights-plan.ts";

describe("06 - Holiday Lights Budget Planner (8 pts)", () => {
  describe("All items fit within budget", () => {
    test("Single light string within budget", () => {
      expect(buildHolidayLightsPlan([{ color: "cool_white", length: 5 }], 50)).toEqual({
        selected: [{ color: "cool_white", length: 5, cost: 15 }],
        totalLength: 5,
        totalCost: 15,
      });
    });

    test("Multiple strings fit budget", () => {
      expect(
        buildHolidayLightsPlan(
          [
            { color: "cool_white", length: 3 },
            { color: "warm_white", length: 2 },
          ],
          50,
        ),
      ).toEqual({
        selected: [
          { color: "cool_white", length: 3, cost: 9 },
          { color: "warm_white", length: 2, cost: 10 },
        ],
        totalLength: 5,
        totalCost: 19,
      });
    });
  });

  describe("Over budget trimming", () => {
    test("Removes last item to fit budget", () => {
      expect(
        buildHolidayLightsPlan(
          [
            { color: "cool_white", length: 5 },
            { color: "warm_white", length: 10 },
          ],
          20,
        ),
      ).toEqual({
        selected: [{ color: "cool_white", length: 5, cost: 15 }],
        totalLength: 5,
        totalCost: 15,
      });
    });

    test("Removes multiple items from end", () => {
      expect(
        buildHolidayLightsPlan(
          [
            { color: "warm_white", length: 5 },
            { color: "cool_white", length: 10 },
            { color: "multicolor", length: 3 },
          ],
          40,
        ),
      ).toEqual({
        selected: [{ color: "warm_white", length: 5, cost: 25 }],
        totalLength: 5,
        totalCost: 25,
      });
    });

    test("All items removed if budget too small", () => {
      expect(buildHolidayLightsPlan([{ color: "warm_white", length: 10 }], 10)).toEqual({
        selected: [],
        totalLength: 0,
        totalCost: 0,
      });
    });
  });

  describe("Color rates", () => {
    test("warm_white = $5/meter", () => {
      expect(buildHolidayLightsPlan([{ color: "warm_white", length: 4 }], 100)).toEqual({
        selected: [{ color: "warm_white", length: 4, cost: 20 }],
        totalLength: 4,
        totalCost: 20,
      });
    });

    test("multicolor = $4/meter", () => {
      expect(buildHolidayLightsPlan([{ color: "multicolor", length: 5 }], 100)).toEqual({
        selected: [{ color: "multicolor", length: 5, cost: 20 }],
        totalLength: 5,
        totalCost: 20,
      });
    });

    test("cool_white = $3/meter", () => {
      expect(buildHolidayLightsPlan([{ color: "cool_white", length: 6 }], 100)).toEqual({
        selected: [{ color: "cool_white", length: 6, cost: 18 }],
        totalLength: 6,
        totalCost: 18,
      });
    });

    test("Any other color = $4/meter", () => {
      expect(buildHolidayLightsPlan([{ color: "red", length: 4 }], 100)).toEqual({
        selected: [{ color: "red", length: 4, cost: 16 }],
        totalLength: 4,
        totalCost: 16,
      });
    });
  });

  describe("Validation", () => {
    test("Non-array light strings returns zeroed object", () => {
      expect(buildHolidayLightsPlan("lights" as any, 100)).toEqual({
        selected: [],
        totalLength: 0,
        totalCost: 0,
      });
    });

    test("Negative budget returns zeroed object", () => {
      expect(buildHolidayLightsPlan([{ color: "cool_white", length: 5 }], -10)).toEqual({
        selected: [],
        totalLength: 0,
        totalCost: 0,
      });
    });

    test("Zero budget returns zeroed object", () => {
      expect(buildHolidayLightsPlan([{ color: "cool_white", length: 5 }], 0)).toEqual({
        selected: [],
        totalLength: 0,
        totalCost: 0,
      });
    });

    test("Non-number budget returns zeroed object", () => {
      expect(buildHolidayLightsPlan([{ color: "cool_white", length: 5 }], "cheap" as any)).toEqual({
        selected: [],
        totalLength: 0,
        totalCost: 0,
      });
    });
  });
});
