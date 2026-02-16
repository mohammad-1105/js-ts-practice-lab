import { describe, expect, test } from "bun:test";
import {
  flattenNestedValues,
  generateTreePattern,
  isMirrorPalindrome,
  repeatSymbol,
  sumNestedValues,
} from "../src/07-winter-recursion-workshop.ts";

describe("07 - Winter Recursion Workshop (9 pts)", () => {
  describe("repeatSymbol", () => {
    test("repeats symbol recursively", () => {
      expect(repeatSymbol("*", 4)).toBe("****");
      expect(repeatSymbol("#", 1)).toBe("#");
    });

    test("invalid input returns empty string", () => {
      expect(repeatSymbol("", 4)).toBe("");
      expect(repeatSymbol("*", 0)).toBe("");
      expect(repeatSymbol("*", -1)).toBe("");
    });
  });

  describe("sumNestedValues", () => {
    test("sums deeply nested numeric values", () => {
      expect(sumNestedValues([1, [2, [3, 4]], 5])).toBe(15);
      expect(sumNestedValues([1, "x", [2, null], true, [3]])).toBe(6);
    });

    test("invalid input returns 0", () => {
      expect(sumNestedValues(null)).toBe(0);
      expect(sumNestedValues("not-array")).toBe(0);
    });
  });

  describe("flattenNestedValues", () => {
    test("flattens arbitrary nested arrays", () => {
      expect(flattenNestedValues([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
      expect(flattenNestedValues(["a", ["b", ["c"]]])).toEqual(["a", "b", "c"]);
    });

    test("invalid input returns []", () => {
      expect(flattenNestedValues(undefined)).toEqual([]);
      expect(flattenNestedValues({})).toEqual([]);
    });
  });

  describe("isMirrorPalindrome", () => {
    test("checks palindrome recursively (case-insensitive)", () => {
      expect(isMirrorPalindrome("Madam")).toBe(true);
      expect(isMirrorPalindrome("RaceCar")).toBe(true);
      expect(isMirrorPalindrome("OpenAI")).toBe(false);
    });

    test("ignores non-alphanumeric characters", () => {
      expect(isMirrorPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    test("invalid input returns false", () => {
      expect(isMirrorPalindrome(1234)).toBe(false);
      expect(isMirrorPalindrome(null)).toBe(false);
    });
  });

  describe("generateTreePattern", () => {
    test("builds mirrored tree pattern", () => {
      expect(generateTreePattern(1)).toEqual(["*"]);
      expect(generateTreePattern(2)).toEqual(["*", "**", "*"]);
      expect(generateTreePattern(4)).toEqual(["*", "**", "***", "****", "***", "**", "*"]);
    });

    test("invalid levels return []", () => {
      expect(generateTreePattern(0)).toEqual([]);
      expect(generateTreePattern(-2)).toEqual([]);
      expect(generateTreePattern(2.5)).toEqual([]);
    });
  });
});
