import { describe, expect, test } from "bun:test";
import {
  createLineWriter,
  createReviewScoreCalculator,
  createSeatPricer,
} from "../src/04-streaming-studio-factory.ts";

describe("04 - Streaming Studio Factory Functions (8 pts)", () => {
  describe("createLineWriter", () => {
    test("returns themed line writer for known genre", () => {
      const actionWriter = createLineWriter("action");
      expect(actionWriter).toBeTypeOf("function");
      expect(actionWriter?.("Reese", "Monroe")).toBe(
        'Reese says: "You picked the wrong day, Monroe."',
      );
    });

    test("empty lead/rival returns ellipsis", () => {
      const dramaWriter = createLineWriter("drama");
      expect(dramaWriter?.("", "Monroe")).toBe("...");
      expect(dramaWriter?.("Reese", "")).toBe("...");
    });

    test("unknown genre returns null", () => {
      expect(createLineWriter("thriller")).toBeNull();
    });
  });

  describe("createSeatPricer", () => {
    test("prices seat types with optional weekend surcharge", () => {
      const pricer = createSeatPricer(20);
      expect(pricer?.("premium")).toBe(28);
      expect(pricer?.("vip", true)).toBe(46);
      expect(pricer?.("balcony", true)).toBe(24);
    });

    test("unknown seat type returns null", () => {
      const pricer = createSeatPricer(20);
      expect(pricer?.("box")).toBeNull();
    });

    test("invalid base price returns null", () => {
      expect(createSeatPricer(0)).toBeNull();
      expect(createSeatPricer(-10)).toBeNull();
    });
  });

  describe("createReviewScoreCalculator", () => {
    test("computes weighted review score", () => {
      const calculate = createReviewScoreCalculator({
        story: 0.4,
        acting: 0.35,
        visuals: 0.25,
      });

      expect(calculate?.({ story: 8, acting: 9, visuals: 7 })).toBe(8.1);
    });

    test("uses only matching keys between weights and scores", () => {
      const calculate = createReviewScoreCalculator({ story: 0.7, acting: 0.3 });
      expect(calculate?.({ story: 8, music: 10 })).toBe(5.6);
    });

    test("invalid objects return null", () => {
      const calculate = createReviewScoreCalculator({ story: 0.5, acting: 0.5 });
      expect(createReviewScoreCalculator(null as any)).toBeNull();
      expect(calculate?.(null as any)).toBeNull();
    });
  });
});
