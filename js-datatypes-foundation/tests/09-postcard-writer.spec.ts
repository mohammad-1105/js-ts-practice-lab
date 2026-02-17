import { describe, expect, test } from "bun:test";
import {
  countVowels,
  formatPostcardField,
  isFromState,
  isValidPincode,
  writePostcard,
} from "../src/09-postcard-writer.ts";

describe("09 - Postcard Writer: String Advanced (9 pts)", () => {
  describe("writePostcard", () => {
    test("creates formatted postcard", () => {
      const result = writePostcard("Alex", "Grandma", "Hope you are doing well");
      expect(result!).toBe("Priy Grandma,\n\nHope you are doing well\n\nAapka/Aapki,\nAlex");
    });

    test("works with different names", () => {
      const result = writePostcard("Ravi", "Mom", "Miss you");
      expect(result).toContain("Priy Mom,");
      expect(result).toContain("Miss you");
      expect(result).toContain("Ravi");
    });

    test('returns "" for non-string sender', () => {
      expect(writePostcard(123, "Grandma", "hello")).toBe("");
    });

    test('returns "" for non-string receiver', () => {
      expect(writePostcard("Alex", null, "hello")).toBe("");
    });

    test('returns "" for non-string message', () => {
      expect(writePostcard("Alex", "Grandma", 42)).toBe("");
    });

    test('returns "" for empty string after trim', () => {
      expect(writePostcard("", "Grandma", "hello")).toBe("");
      expect(writePostcard("Alex", "  ", "hello")).toBe("");
      expect(writePostcard("Alex", "Grandma", "  ")).toBe("");
    });
  });

  describe("isValidPincode", () => {
    test("returns true for valid pincode", () => {
      expect(isValidPincode("400001")).toBe(true);
      expect(isValidPincode("110001")).toBe(true);
    });

    test("returns false for pincode starting with 0", () => {
      expect(isValidPincode("012345")).toBe(false);
    });

    test("returns false for wrong length", () => {
      expect(isValidPincode("12345")).toBe(false);
      expect(isValidPincode("1234567")).toBe(false);
    });

    test("returns false for non-digit characters", () => {
      expect(isValidPincode("12345a")).toBe(false);
      expect(isValidPincode("abcdef")).toBe(false);
    });

    test("returns false for non-string", () => {
      expect(isValidPincode(400001)).toBe(false);
      expect(isValidPincode(null as any)).toBe(false);
    });
  });

  describe("formatPostcardField", () => {
    test("formats with default width (12)", () => {
      const result = formatPostcardField("From", "Alex");
      expect(result!).toBe("From        : Alex");
    });

    test("formats with custom width", () => {
      const result = formatPostcardField("To", "Grandma", 8);
      expect(result!).toBe("To      : Grandma");
    });

    test('returns "" for non-string label', () => {
      expect(formatPostcardField(123, "value")).toBe("");
    });

    test('returns "" for non-string value', () => {
      expect(formatPostcardField("label", 123)).toBe("");
    });
  });

  describe("isFromState", () => {
    test("returns true when address ends with state code", () => {
      expect(isFromState("Alex, Seattle, WA", "WA")).toBe(true);
    });

    test("returns false when state code does not match", () => {
      expect(isFromState("Priya, Mumbai, MH", "UP")).toBe(false);
    });

    test("returns false for non-string address", () => {
      expect(isFromState(123, "WA")).toBe(false);
    });

    test("returns false for non-string stateCode", () => {
      expect(isFromState("address, WA", 123)).toBe(false);
    });
  });

  describe("countVowels", () => {
    test("counts vowels in a string", () => {
      expect(countVowels("Namaste India")).toBe(6);
    });

    test("counts uppercase vowels too", () => {
      expect(countVowels("AEIOU")).toBe(5);
    });

    test("returns 0 for no vowels", () => {
      expect(countVowels("xyz")).toBe(0);
    });

    test("returns 0 for empty string", () => {
      expect(countVowels("")).toBe(0);
    });

    test("returns 0 for non-string", () => {
      expect(countVowels(123)).toBe(0);
      expect(countVowels(null as any)).toBe(0);
    });
  });
});
