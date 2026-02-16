import { describe, expect, test } from "bun:test";
import { processPizzaOrders } from "../src/10-pizza-batch-processor.ts";

describe("10 - Pizza Kitchen Batch Processor (8 pts)", () => {
  describe("Basic batch processing", () => {
    test("single order within one batch", () => {
      expect(processPizzaOrders([3])).toEqual({
        totalBatches: 1,
        totalPizzas: 3,
        ordersProcessed: 1,
      });
    });

    test("single order exactly one full batch", () => {
      expect(processPizzaOrders([5])).toEqual({
        totalBatches: 1,
        totalPizzas: 5,
        ordersProcessed: 1,
      });
    });

    test("single order split across multiple batches", () => {
      expect(processPizzaOrders([12])).toEqual({
        totalBatches: 3,
        totalPizzas: 12,
        ordersProcessed: 1,
      });
    });

    test("multiple small orders", () => {
      expect(processPizzaOrders([3, 2, 4])).toEqual({
        totalBatches: 3,
        totalPizzas: 9,
        ordersProcessed: 3,
      });
    });

    test("multiple mixed-size orders", () => {
      expect(processPizzaOrders([3, 7, 2])).toEqual({
        totalBatches: 4,
        totalPizzas: 12,
        ordersProcessed: 3,
      });
    });

    test("order of exactly 10 pizzas", () => {
      expect(processPizzaOrders([10])).toEqual({
        totalBatches: 2,
        totalPizzas: 10,
        ordersProcessed: 1,
      });
    });

    test("two large orders", () => {
      expect(processPizzaOrders([5, 10])).toEqual({
        totalBatches: 3,
        totalPizzas: 15,
        ordersProcessed: 2,
      });
    });
  });

  describe("Skipping invalid orders", () => {
    test("skips zero-pizza orders", () => {
      expect(processPizzaOrders([3, 0, 2])).toEqual({
        totalBatches: 2,
        totalPizzas: 5,
        ordersProcessed: 2,
      });
    });

    test("skips negative orders", () => {
      expect(processPizzaOrders([5, -3, 2])).toEqual({
        totalBatches: 2,
        totalPizzas: 7,
        ordersProcessed: 2,
      });
    });

    test("skips decimal orders", () => {
      expect(processPizzaOrders([4, 2.5, 6])).toEqual({
        totalBatches: 3,
        totalPizzas: 10,
        ordersProcessed: 2,
      });
    });

    test("skips non-number orders", () => {
      expect(processPizzaOrders([3, "five", 2] as any)).toEqual({
        totalBatches: 2,
        totalPizzas: 5,
        ordersProcessed: 2,
      });
    });

    test("all orders invalid", () => {
      expect(processPizzaOrders([0, -1, 2.5, "abc"] as any)).toEqual({
        totalBatches: 0,
        totalPizzas: 0,
        ordersProcessed: 0,
      });
    });
  });

  describe("Edge cases", () => {
    test("single pizza order", () => {
      expect(processPizzaOrders([1])).toEqual({
        totalBatches: 1,
        totalPizzas: 1,
        ordersProcessed: 1,
      });
    });

    test("order of 6 pizzas uses 2 batches", () => {
      expect(processPizzaOrders([6])).toEqual({
        totalBatches: 2,
        totalPizzas: 6,
        ordersProcessed: 1,
      });
    });
  });

  describe("Validation", () => {
    test("empty array returns zeroed object", () => {
      expect(processPizzaOrders([])).toEqual({
        totalBatches: 0,
        totalPizzas: 0,
        ordersProcessed: 0,
      });
    });

    test("non-array returns zeroed object", () => {
      expect(processPizzaOrders("orders" as any)).toEqual({
        totalBatches: 0,
        totalPizzas: 0,
        ordersProcessed: 0,
      });
    });

    test("null returns zeroed object", () => {
      expect(processPizzaOrders(null as any)).toEqual({
        totalBatches: 0,
        totalPizzas: 0,
        ordersProcessed: 0,
      });
    });
  });
});
