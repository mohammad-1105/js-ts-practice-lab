import { describe, expect, test } from "bun:test";
import { createFarmersMarketBill } from "../src/05-farmers-market-bill.ts";

describe("05 - Farmers Market Bill (8 pts)", () => {
  describe("Basic billing", () => {
    test("Single item available and affordable", () => {
      expect(createFarmersMarketBill([{ name: "apples", qty: 2 }], { apples: 4 })).toEqual({
        items: [{ name: "apples", qty: 2, cost: 8 }],
        totalBill: 8,
      });
    });

    test("Multiple items all available and affordable", () => {
      expect(
        createFarmersMarketBill(
          [
            { name: "apples", qty: 2 },
            { name: "onions", qty: 1 },
          ],
          { apples: 4, onions: 3 },
        ),
      ).toEqual({
        items: [
          { name: "apples", qty: 2, cost: 8 },
          { name: "onions", qty: 1, cost: 3 },
        ],
        totalBill: 11,
      });
    });

    test("Item at exactly $20 is included", () => {
      expect(createFarmersMarketBill([{ name: "wild_honey", qty: 1 }], { wild_honey: 20 })).toEqual(
        {
          items: [{ name: "wild_honey", qty: 1, cost: 20 }],
          totalBill: 20,
        },
      );
    });
  });

  describe("Skipping items", () => {
    test("Skips item not in price list", () => {
      expect(
        createFarmersMarketBill(
          [
            { name: "apples", qty: 2 },
            { name: "dragonfruit", qty: 1 },
          ],
          { apples: 4 },
        ),
      ).toEqual({
        items: [{ name: "apples", qty: 2, cost: 8 }],
        totalBill: 8,
      });
    });

    test("Skips item priced above $20", () => {
      expect(
        createFarmersMarketBill(
          [
            { name: "apples", qty: 2 },
            { name: "truffle", qty: 1 },
          ],
          { apples: 4, truffle: 45 },
        ),
      ).toEqual({
        items: [{ name: "apples", qty: 2, cost: 8 }],
        totalBill: 8,
      });
    });

    test("All items too expensive", () => {
      expect(
        createFarmersMarketBill(
          [
            { name: "truffle", qty: 1 },
            { name: "saffron", qty: 2 },
          ],
          { truffle: 45, saffron: 30 },
        ),
      ).toEqual({ items: [], totalBill: 0 });
    });

    test("All items unavailable", () => {
      expect(createFarmersMarketBill([{ name: "dragonfruit", qty: 1 }], { apples: 4 })).toEqual({
        items: [],
        totalBill: 0,
      });
    });

    test("Mix of available, unavailable, and expensive items", () => {
      expect(
        createFarmersMarketBill(
          [
            { name: "apples", qty: 2 },
            { name: "truffle", qty: 1 },
            { name: "potatoes", qty: 3 },
            { name: "dragonfruit", qty: 1 },
          ],
          { apples: 4, truffle: 45, potatoes: 2 },
        ),
      ).toEqual({
        items: [
          { name: "apples", qty: 2, cost: 8 },
          { name: "potatoes", qty: 3, cost: 6 },
        ],
        totalBill: 14,
      });
    });
  });

  describe("Validation and edge cases", () => {
    test("Empty shopping list", () => {
      expect(createFarmersMarketBill([], { apples: 4 })).toEqual({ items: [], totalBill: 0 });
    });

    test("Empty price list", () => {
      expect(createFarmersMarketBill([{ name: "apples", qty: 2 }], {})).toEqual({
        items: [],
        totalBill: 0,
      });
    });

    test("Non-array shopping list returns zeroed object", () => {
      expect(createFarmersMarketBill("list" as any, { apples: 4 })).toEqual({
        items: [],
        totalBill: 0,
      });
    });

    test("null price list returns zeroed object", () => {
      expect(createFarmersMarketBill([{ name: "apples", qty: 2 }], null as any)).toEqual({
        items: [],
        totalBill: 0,
      });
    });
  });
});
