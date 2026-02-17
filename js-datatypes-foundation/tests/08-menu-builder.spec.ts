import { describe, expect, test } from "bun:test";
import {
  createMenuItem,
  freezeMenu,
  mergeDailySpecials,
  updatePrices,
} from "../src/08-menu-builder.ts";

describe("08 - Restaurant Menu Builder: Object Transform (8 pts)", () => {
  describe("createMenuItem", () => {
    test("merges baseItem with customizations", () => {
      const result = createMenuItem({ name: "Pasta", price: 300 }, { addOn: "Cheese", price: 350 });
      expect(result).toEqual({ name: "Pasta", price: 350, addOn: "Cheese" });
    });

    test("does NOT mutate baseItem", () => {
      const base = { name: "Pasta", price: 300 };
      createMenuItem(base, { price: 350 });
      expect(base.price).toBe(300);
    });

    test("returns copy of baseItem when customizations is not object", () => {
      const base = { name: "Pasta", price: 300 };
      const result = createMenuItem(base, "invalid");
      expect(result).toEqual({ name: "Pasta", price: 300 });
      expect(result).not.toBe(base);
    });

    test("returns {} for null baseItem", () => {
      expect(createMenuItem(null, { addOn: "Cheese" })).toEqual({});
    });

    test("returns {} for non-object baseItem", () => {
      expect(createMenuItem("not object", { addOn: "Cheese" })).toEqual({});
    });
  });

  describe("freezeMenu", () => {
    test("returns a frozen object", () => {
      const menu = { pizza: 450, pasta: 300 };
      const frozen = freezeMenu(menu);
      expect(Object.isFrozen(frozen)).toBe(true);
    });

    test("frozen object cannot be modified", () => {
      const frozen = freezeMenu({ pizza: 450, pasta: 300 });
      expect(() => {
        frozen.pizza = 500;
      }).toThrow(TypeError);
      expect(frozen.pizza).toBe(450);
    });

    test("returns {} for null", () => {
      expect(freezeMenu(null as any)).toEqual({});
    });

    test("returns {} for non-object", () => {
      expect(freezeMenu("not object")).toEqual({});
      expect(freezeMenu(42)).toEqual({});
    });
  });

  describe("updatePrices", () => {
    test("increases all prices by given amount", () => {
      expect(updatePrices({ pizza: 450, pasta: 300 }, 50)).toEqual({
        pizza: 500,
        pasta: 350,
      });
    });

    test("works with zero increase", () => {
      expect(updatePrices({ pizza: 450 }, 0)).toEqual({ pizza: 450 });
    });

    test("works with negative increase", () => {
      expect(updatePrices({ pizza: 450, pasta: 300 }, -50)).toEqual({
        pizza: 400,
        pasta: 250,
      });
    });

    test("does NOT mutate original menu", () => {
      const menu = { pizza: 450, pasta: 300 };
      updatePrices(menu, 50);
      expect(menu.pizza).toBe(450);
    });

    test("returns {} for non-object menu", () => {
      expect(updatePrices("not object", 10)).toEqual({});
      expect(updatePrices(null, 10)).toEqual({});
    });

    test("returns {} for non-number increase", () => {
      expect(updatePrices({ pizza: 450 }, "abc")).toEqual({});
    });
  });

  describe("mergeDailySpecials", () => {
    test("merges two menus", () => {
      expect(mergeDailySpecials({ pizza: 450 }, { burger: 250 })).toEqual({
        pizza: 450,
        burger: 250,
      });
    });

    test("specials override regular prices", () => {
      expect(mergeDailySpecials({ pizza: 450, pasta: 300 }, { pizza: 400 })).toEqual({
        pizza: 400,
        pasta: 300,
      });
    });

    test("does NOT mutate originals", () => {
      const regular = { pizza: 450 };
      const specials = { burger: 250 };
      mergeDailySpecials(regular, specials);
      expect(regular).toEqual({ pizza: 450 });
      expect(specials).toEqual({ burger: 250 });
    });

    test("treats non-object as empty {}", () => {
      expect(mergeDailySpecials(null, { pizza: 450 })).toEqual({ pizza: 450 });
      expect(mergeDailySpecials({ pizza: 450 }, null)).toEqual({ pizza: 450 });
    });

    test("returns {} when both are non-objects", () => {
      expect(mergeDailySpecials(null, "abc")).toEqual({});
    });
  });
});
