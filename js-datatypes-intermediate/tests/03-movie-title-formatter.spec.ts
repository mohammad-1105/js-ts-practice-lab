import { describe, expect, test } from "bun:test";
import { formatMovieTitle } from "../src/03-movie-title-formatter.ts";

describe("03 - Movie Title Formatter (8 pts)", () => {
  describe("Basic title casing", () => {
    test("All lowercase to Title Case", () => {
      expect(formatMovieTitle("the social network")).toBe("The Social Network");
    });

    test("ALL CAPS to Title Case", () => {
      expect(formatMovieTitle("INCEPTION")).toBe("Inception");
    });

    test("Mixed case to Title Case", () => {
      expect(formatMovieTitle("the dARK kNIGHT rISES")).toBe("The Dark Knight Rises");
    });
  });

  describe("Space normalization", () => {
    test("Leading and trailing spaces removed", () => {
      expect(formatMovieTitle("  inception  ")).toBe("Inception");
    });

    test("Multiple spaces between words collapsed", () => {
      expect(formatMovieTitle("the   social   network")).toBe("The Social Network");
    });

    test("Both leading/trailing and internal extra spaces fixed", () => {
      expect(formatMovieTitle("  THE   DARK   KNIGHT   RISES  ")).toBe("The Dark Knight Rises");
    });
  });

  describe("Small words handling", () => {
    test('"of" stays lowercase in middle', () => {
      expect(formatMovieTitle("star of the sea")).toBe("Star of the Sea");
    });

    test('"and" stays lowercase in middle', () => {
      expect(formatMovieTitle("war and peace")).toBe("War and Peace");
    });

    test('"the" stays lowercase in middle', () => {
      expect(formatMovieTitle("lord of the rings")).toBe("Lord of the Rings");
    });

    test("Small word at beginning is capitalized", () => {
      expect(formatMovieTitle("the legend of tomorrow")).toBe("The Legend of Tomorrow");
    });

    test('"a" and "an" stay lowercase in middle', () => {
      expect(formatMovieTitle("once upon a time in an office")).toBe(
        "Once Upon a Time in an Office",
      );
    });

    test("Multiple small words in a title", () => {
      expect(formatMovieTitle("a story of code and coffee")).toBe("A Story of Code and Coffee");
    });
  });

  describe("Validation", () => {
    test("Non-string input (number) returns empty string", () => {
      expect(formatMovieTitle(123)).toBe("");
    });

    test("Empty string returns empty string", () => {
      expect(formatMovieTitle("")).toBe("");
    });

    test("String with only spaces returns empty string", () => {
      expect(formatMovieTitle("     ")).toBe("");
    });

    test("null returns empty string", () => {
      expect(formatMovieTitle(null as any)).toBe("");
    });

    test("undefined returns empty string", () => {
      expect(formatMovieTitle(undefined as any)).toBe("");
    });
  });
});
