import { describe, expect, test } from "bun:test";
import { generateTransitPass } from "../src/05-transit-pass.ts";

describe("05 - Transit Pass Generator (8 pts)", () => {
  describe("Basic pass generation", () => {
    test("First class pass generated correctly", () => {
      const result = generateTransitPass({
        name: "alex parker",
        from: "midtown",
        to: "downtown",
        classType: "first",
      });
      expect(result!).toBe(
        "CITY TRANSIT PASS\n---\nName: ALEX PARKER\nFrom: Midtown\nTo: Downtown\nClass: FIRST\nPass ID: FMIDDOW",
      );
    });

    test("Second class pass generated correctly", () => {
      const result = generateTransitPass({
        name: "taylor morgan",
        from: "union",
        to: "uptown",
        classType: "second",
      });
      expect(result!).toBe(
        "CITY TRANSIT PASS\n---\nName: TAYLOR MORGAN\nFrom: Union\nTo: Uptown\nClass: SECOND\nPass ID: SUNIUPT",
      );
    });

    test("Single word name", () => {
      const result = generateTransitPass({
        name: "ryan",
        from: "lakeside",
        to: "riverside",
        classType: "first",
      });
      expect(result).toContain("Name: RYAN");
      expect(result).toContain("Pass ID: FLAKRIV");
    });
  });

  describe("Name formatting", () => {
    test("Name is converted to uppercase", () => {
      const result = generateTransitPass({
        name: "chris lane",
        from: "midtown",
        to: "union",
        classType: "first",
      });
      expect(result).toContain("Name: CHRIS LANE");
    });
  });

  describe("Station Title Case", () => {
    test("From and To are in Title Case", () => {
      const result = generateTransitPass({
        name: "test",
        from: "MIDTOWN",
        to: "downtown",
        classType: "first",
      });
      expect(result).toContain("From: Midtown");
      expect(result).toContain("To: Downtown");
    });
  });

  describe("Pass ID generation", () => {
    test("Pass ID uses first char of classType + first 3 of from + first 3 of to", () => {
      const result = generateTransitPass({
        name: "test",
        from: "chicago",
        to: "phoenix",
        classType: "second",
      });
      expect(result).toContain("Pass ID: SCHIPHO");
    });

    test("Pass ID letters are all uppercase", () => {
      const result = generateTransitPass({
        name: "test",
        from: "midtown",
        to: "downtown",
        classType: "first",
      });
      expect(result).toContain("Pass ID: FMIDDOW");
    });
  });

  describe("Case insensitivity for classType", () => {
    test('"FIRST" works same as "first"', () => {
      const result = generateTransitPass({
        name: "test",
        from: "midtown",
        to: "union",
        classType: "FIRST",
      });
      expect(result).toContain("Class: FIRST");
    });

    test('"Second" works same as "second"', () => {
      const result = generateTransitPass({
        name: "test",
        from: "midtown",
        to: "union",
        classType: "Second",
      });
      expect(result).toContain("Class: SECOND");
    });
  });

  describe("Template literal format", () => {
    test("Output starts with CITY TRANSIT PASS", () => {
      const result = generateTransitPass({
        name: "test",
        from: "midtown",
        to: "union",
        classType: "first",
      });
      expect(result.startsWith("CITY TRANSIT PASS")).toBe(true);
    });

    test("Output contains \\n line breaks", () => {
      const result = generateTransitPass({
        name: "test",
        from: "midtown",
        to: "union",
        classType: "first",
      });
      const lines = result.split("\n");
      expect(lines.length).toBe(7);
      expect(lines[1]).toBe("---");
    });
  });

  describe("Validation", () => {
    test("null input returns INVALID PASS", () => {
      expect(generateTransitPass(null as any)).toBe("INVALID PASS");
    });

    test("Non-object input returns INVALID PASS", () => {
      expect(generateTransitPass("passenger")).toBe("INVALID PASS");
    });

    test("Missing name returns INVALID PASS", () => {
      expect(generateTransitPass({ from: "midtown", to: "union", classType: "first" })).toBe(
        "INVALID PASS",
      );
    });

    test("Empty name returns INVALID PASS", () => {
      expect(
        generateTransitPass({ name: "", from: "midtown", to: "union", classType: "first" }),
      ).toBe("INVALID PASS");
    });

    test("Missing from returns INVALID PASS", () => {
      expect(generateTransitPass({ name: "test", to: "union", classType: "first" })).toBe(
        "INVALID PASS",
      );
    });

    test("Invalid classType returns INVALID PASS", () => {
      expect(
        generateTransitPass({ name: "test", from: "midtown", to: "union", classType: "third" }),
      ).toBe("INVALID PASS");
    });

    test("undefined input returns INVALID PASS", () => {
      expect(generateTransitPass(undefined as any)).toBe("INVALID PASS");
    });
  });
});
