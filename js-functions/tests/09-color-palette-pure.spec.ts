import { describe, expect, test } from "bun:test";
import {
  addToPalette,
  adjustBrightness,
  mergePalettes,
  mixColors,
  removeFromPalette,
} from "../src/09-color-palette-pure.ts";

describe("09 - Design Studio Color Palette Utilities (8 pts)", () => {
  const red = { name: "red", r: 255, g: 0, b: 0 };
  const blue = { name: "blue", r: 0, g: 0, b: 255 };
  const gray = { name: "gray", r: 120, g: 120, b: 120 };

  describe("mixColors", () => {
    test("averages RGB channels and combines names", () => {
      expect(mixColors(red, blue)).toEqual({ name: "red-blue", r: 128, g: 0, b: 128 });
    });

    test("does not mutate inputs", () => {
      const redCopy = structuredClone(red);
      const blueCopy = structuredClone(blue);

      mixColors(red, blue);

      expect(red).toEqual(redCopy);
      expect(blue).toEqual(blueCopy);
    });

    test("invalid color input returns null", () => {
      expect(mixColors(null, blue)).toBeNull();
      expect(mixColors(red, null)).toBeNull();
    });
  });

  describe("adjustBrightness", () => {
    test("adjusts and clamps RGB channels", () => {
      expect(adjustBrightness(gray, 1.5)).toEqual({ name: "gray", r: 180, g: 180, b: 180 });
      expect(adjustBrightness(red, 2)).toEqual({ name: "red", r: 255, g: 0, b: 0 });
    });

    test("invalid input returns null", () => {
      expect(adjustBrightness(null, 1.2)).toBeNull();
      expect(adjustBrightness(gray, Number.NaN)).toBeNull();
    });
  });

  describe("palette array operations", () => {
    test("addToPalette appends immutably", () => {
      const palette = [red, blue];
      const result = addToPalette(palette, gray);

      expect(result).toEqual([red, blue, gray]);
      expect(result).not.toBe(palette);
      expect(palette).toEqual([red, blue]);
    });

    test("removeFromPalette removes by name immutably", () => {
      const palette = [red, blue, gray];
      const result = removeFromPalette(palette, "blue");

      expect(result).toEqual([red, gray]);
      expect(result).not.toBe(palette);
      expect(palette).toEqual([red, blue, gray]);
    });

    test("mergePalettes keeps first occurrence of duplicate names", () => {
      const palette1 = [red, blue];
      const palette2 = [{ name: "blue", r: 10, g: 10, b: 10 }, gray];

      expect(mergePalettes(palette1, palette2)).toEqual([red, blue, gray]);
    });
  });
});
