import { describe, expect, test } from "bun:test";
import {
  extractBorderCenter,
  makeBorder,
  repeatPattern,
  replaceBorderColor,
  splitAndJoinBorder,
} from "../src/02-border-maker.ts";

describe("02 - Decorative Border Maker: String Transform (7 pts)", () => {
  describe("repeatPattern", () => {
    test("repeats pattern given number of times", () => {
      expect(repeatPattern("*-", 4)).toBe("*-*-*-*-");
    });

    test("repeats single char", () => {
      expect(repeatPattern("*", 5)).toBe("*****");
    });

    test('returns "" for zero times', () => {
      expect(repeatPattern("*", 0)).toBe("");
    });

    test('returns "" for negative times', () => {
      expect(repeatPattern("*", -3)).toBe("");
    });

    test('returns "" for non-string pattern', () => {
      expect(repeatPattern(123, 3)).toBe("");
    });

    test('returns "" for non-integer times', () => {
      expect(repeatPattern("*", 2.5)).toBe("");
    });
  });

  describe("extractBorderCenter", () => {
    test("extracts center portion using slice", () => {
      expect(extractBorderCenter("***LOTUS***", 3, 8)).toBe("LOTUS");
    });

    test("extracts from beginning", () => {
      expect(extractBorderCenter("HELLO world", 0, 5)).toBe("HELLO");
    });

    test('returns "" for non-string design', () => {
      expect(extractBorderCenter(12345, 1, 3)).toBe("");
    });

    test('returns "" if start or end not numbers', () => {
      expect(extractBorderCenter("hello", "a", "b")).toBe("");
    });
  });

  describe("splitAndJoinBorder", () => {
    test("changes separator between colors", () => {
      expect(splitAndJoinBorder("red,blue,green", ",", " | ")).toBe("red | blue | green");
    });

    test("changes comma to dash", () => {
      expect(splitAndJoinBorder("red,blue", ",", "-")).toBe("red-blue");
    });

    test("changes space to comma", () => {
      expect(splitAndJoinBorder("red blue green", " ", ",")).toBe("red,blue,green");
    });

    test('returns "" for non-string colorString', () => {
      expect(splitAndJoinBorder(123, ",", "-")).toBe("");
    });
  });

  describe("replaceBorderColor", () => {
    test("replaces all occurrences of a color", () => {
      expect(replaceBorderColor("red-blue-red-green-red", "red", "pink")).toBe(
        "pink-blue-pink-green-pink",
      );
    });

    test("replaces when only one occurrence", () => {
      expect(replaceBorderColor("red-blue-green", "blue", "yellow")).toBe("red-yellow-green");
    });

    test("no change when color not found", () => {
      expect(replaceBorderColor("red-blue", "pink", "white")).toBe("red-blue");
    });

    test('returns "" for non-string params', () => {
      expect(replaceBorderColor(123, "a", "b")).toBe("");
      expect(replaceBorderColor("hello", 123, "b")).toBe("");
      expect(replaceBorderColor("hello", "a", 123)).toBe("");
    });
  });

  describe("makeBorder", () => {
    test("creates border of exact length with single char", () => {
      expect(makeBorder("*", 5)).toBe("*****");
    });

    test("creates border of exact length with multi-char pattern", () => {
      expect(makeBorder("=-", 7)).toBe("=-=-=-=");
    });

    test("creates border when length equals pattern length", () => {
      expect(makeBorder("abc", 3)).toBe("abc");
    });

    test('returns "" for non-string char', () => {
      expect(makeBorder(123, 5)).toBe("");
    });

    test('returns "" for non-positive length', () => {
      expect(makeBorder("*", 0)).toBe("");
      expect(makeBorder("*", -3)).toBe("");
    });

    test('returns "" for non-number length', () => {
      expect(makeBorder("*", "abc")).toBe("");
    });
  });
});
