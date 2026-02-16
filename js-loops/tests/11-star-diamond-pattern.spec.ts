import { describe, expect, test } from "bun:test";
import { generateStarDiamond } from "../src/11-star-diamond-pattern.ts";

describe("11 - Winter Festival Star Diamond (10 pts)", () => {
  describe("Basic patterns", () => {
    test("size=1 produces single star", () => {
      expect(generateStarDiamond(1)).toEqual(["*"]);
    });

    test("size=2 produces 3-row diamond", () => {
      expect(generateStarDiamond(2)).toEqual([" *", "* *", " *"]);
    });

    test("size=3 produces 5-row diamond", () => {
      expect(generateStarDiamond(3)).toEqual(["  *", " * *", "* * *", " * *", "  *"]);
    });

    test("size=4 produces 7-row diamond", () => {
      expect(generateStarDiamond(4)).toEqual([
        "   *",
        "  * *",
        " * * *",
        "* * * *",
        " * * *",
        "  * *",
        "   *",
      ]);
    });

    test("size=5 produces 9-row diamond", () => {
      expect(generateStarDiamond(5)).toEqual([
        "    *",
        "   * *",
        "  * * *",
        " * * * *",
        "* * * * *",
        " * * * *",
        "  * * *",
        "   * *",
        "    *",
      ]);
    });
  });

  describe("Pattern properties", () => {
    test("total rows = 2*size - 1", () => {
      expect(generateStarDiamond(3).length).toBe(5);
      expect(generateStarDiamond(4).length).toBe(7);
      expect(generateStarDiamond(6).length).toBe(11);
    });

    test("middle row has size stars", () => {
      const pattern = generateStarDiamond(4);
      const middleRow = pattern[3];
      const stars = middleRow.split(" ").filter((char) => char === "*").length;
      expect(stars).toBe(4);
    });

    test("first and last rows have one star", () => {
      const pattern = generateStarDiamond(5);
      expect(pattern[0].trim()).toBe("*");
      expect(pattern[pattern.length - 1].trim()).toBe("*");
    });

    test("top mirrors bottom", () => {
      const pattern = generateStarDiamond(4);
      expect(pattern[0]).toBe(pattern[6]);
      expect(pattern[1]).toBe(pattern[5]);
      expect(pattern[2]).toBe(pattern[4]);
    });

    test("no trailing spaces on any row", () => {
      const pattern = generateStarDiamond(5);
      for (const row of pattern) {
        expect(row).toBe(row.trimEnd());
      }
    });
  });

  describe("Validation", () => {
    test("size=0 returns []", () => {
      expect(generateStarDiamond(0)).toEqual([]);
    });

    test("negative size returns []", () => {
      expect(generateStarDiamond(-3)).toEqual([]);
    });

    test("decimal size returns []", () => {
      expect(generateStarDiamond(2.5)).toEqual([]);
    });

    test("string size returns []", () => {
      expect(generateStarDiamond("three" as any)).toEqual([]);
    });

    test("null returns []", () => {
      expect(generateStarDiamond(null as any)).toEqual([]);
    });

    test("undefined returns []", () => {
      expect(generateStarDiamond(undefined as any)).toEqual([]);
    });
  });
});
