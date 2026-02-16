import { describe, expect, test } from "bun:test";
import {
  blend,
  compose,
  createRecipe,
  grind,
  pack,
  pipe,
  roast,
} from "../src/10-roastery-pipeline-compose.ts";

describe("10 - Coffee Roastery Pipeline (Composition) (8 pts)", () => {
  describe("pipe and compose", () => {
    test("pipe applies functions left-to-right", () => {
      const process = pipe(grind, roast, pack);
      expect(process({ name: "Midnight" })).toEqual({
        name: "Midnight",
        form: "ground",
        roasted: true,
        aroma: "bold",
        packed: true,
        label: "Midnight Blend",
      });
    });

    test("compose applies functions right-to-left", () => {
      const process = compose(pack, roast, grind);
      expect(process({ name: "Summit" })).toEqual({
        name: "Summit",
        form: "ground",
        roasted: true,
        aroma: "bold",
        packed: true,
        label: "Summit Blend",
      });
    });

    test("pipe/compose with no functions returns identity", () => {
      const batch = { name: "Harbor" };
      expect(pipe()(batch)).toBe(batch);
      expect(compose()(batch)).toBe(batch);
    });
  });

  describe("utility transforms", () => {
    test("grind/roast/blend/pack return transformed objects", () => {
      expect(grind({ name: "Atlas" })).toEqual({ name: "Atlas", form: "ground" });
      expect(roast({ name: "Atlas" })).toEqual({ name: "Atlas", roasted: true, aroma: "bold" });
      expect(blend({ name: "Atlas" })).toEqual({ name: "Atlas", blended: true });
      expect(pack({ name: "Atlas" })).toEqual({
        name: "Atlas",
        packed: true,
        label: "Atlas Blend",
      });
    });
  });

  describe("createRecipe", () => {
    test("maps step names and runs in sequence", () => {
      const recipe = createRecipe(["grind", "roast", "pack"]);
      expect(recipe({ name: "Aurora" })).toEqual({
        name: "Aurora",
        form: "ground",
        roasted: true,
        aroma: "bold",
        packed: true,
        label: "Aurora Blend",
      });
    });

    test("skips unknown steps", () => {
      const recipe = createRecipe(["grind", "unknown-step", "pack"]);
      expect(recipe({ name: "Glacier" })).toEqual({
        name: "Glacier",
        form: "ground",
        packed: true,
        label: "Glacier Blend",
      });
    });

    test("invalid steps input returns identity", () => {
      const batch = { name: "North" };
      expect(createRecipe([])(batch)).toBe(batch);
      expect(createRecipe(null as any)(batch)).toBe(batch);
    });
  });
});
