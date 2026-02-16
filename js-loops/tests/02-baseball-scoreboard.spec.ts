import { describe, expect, test } from "bun:test";
import { calculateBaseballScoreboard } from "../src/02-baseball-scoreboard.ts";

describe("02 - Weekend Baseball Scoreboard (7 pts)", () => {
  describe("Basic scoring", () => {
    test("Mixed inning with no strikeout limit reached", () => {
      expect(calculateBaseballScoreboard([1, 2, 4, 0, 3])).toEqual({
        totalRuns: 10,
        totalPitches: 5,
        strikeouts: 0,
        doubles: 1,
        homeRuns: 1,
      });
    });

    test("All no-run pitches", () => {
      expect(calculateBaseballScoreboard([0, 0, 0, 0])).toEqual({
        totalRuns: 0,
        totalPitches: 4,
        strikeouts: 0,
        doubles: 0,
        homeRuns: 0,
      });
    });

    test("All home runs", () => {
      expect(calculateBaseballScoreboard([4, 4, 4])).toEqual({
        totalRuns: 12,
        totalPitches: 3,
        strikeouts: 0,
        doubles: 0,
        homeRuns: 3,
      });
    });

    test("Tracks runs with one strikeout", () => {
      expect(calculateBaseballScoreboard([2, 0, 4, -1, 1, 3])).toEqual({
        totalRuns: 10,
        totalPitches: 6,
        strikeouts: 1,
        doubles: 1,
        homeRuns: 1,
      });
    });
  });

  describe("Three-strikeout stop rule", () => {
    test("Stops after 3 strikeouts and ignores remaining pitches", () => {
      expect(calculateBaseballScoreboard([-1, -1, 4, -1, 4])).toEqual({
        totalRuns: 4,
        totalPitches: 4,
        strikeouts: 3,
        doubles: 0,
        homeRuns: 1,
      });
    });

    test("Keeps runs scored before inning ends", () => {
      expect(calculateBaseballScoreboard([1, 2, -1, -1, 4, -1, 3])).toEqual({
        totalRuns: 7,
        totalPitches: 6,
        strikeouts: 3,
        doubles: 1,
        homeRuns: 1,
      });
    });
  });

  describe("Edge cases", () => {
    test("Single pitch strikeout", () => {
      expect(calculateBaseballScoreboard([-1])).toEqual({
        totalRuns: 0,
        totalPitches: 1,
        strikeouts: 1,
        doubles: 0,
        homeRuns: 0,
      });
    });

    test("Single pitch double", () => {
      expect(calculateBaseballScoreboard([2])).toEqual({
        totalRuns: 2,
        totalPitches: 1,
        strikeouts: 0,
        doubles: 1,
        homeRuns: 0,
      });
    });
  });

  describe("Validation", () => {
    test("Empty array returns zeroed object", () => {
      expect(calculateBaseballScoreboard([])).toEqual({
        totalRuns: 0,
        totalPitches: 0,
        strikeouts: 0,
        doubles: 0,
        homeRuns: 0,
      });
    });

    test("Non-array input returns zeroed object", () => {
      expect(calculateBaseballScoreboard("not an array" as any)).toEqual({
        totalRuns: 0,
        totalPitches: 0,
        strikeouts: 0,
        doubles: 0,
        homeRuns: 0,
      });
    });

    test("null returns zeroed object", () => {
      expect(calculateBaseballScoreboard(null as any)).toEqual({
        totalRuns: 0,
        totalPitches: 0,
        strikeouts: 0,
        doubles: 0,
        homeRuns: 0,
      });
    });

    test("undefined returns zeroed object", () => {
      expect(calculateBaseballScoreboard(undefined as any)).toEqual({
        totalRuns: 0,
        totalPitches: 0,
        strikeouts: 0,
        doubles: 0,
        homeRuns: 0,
      });
    });
  });
});
