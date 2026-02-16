import { describe, expect, test } from "bun:test";
import {
  applyOperations,
  createFilter,
  createMapper,
  createSorter,
} from "../src/08-diner-rating-hof.ts";

describe("08 - Neighborhood Diner Rating System (9 pts)", () => {
  const diners = [
    { name: "Sunset Diner", rating: 4.7, city: "Boston", price: 3 },
    { name: "Maple Grill", rating: 3.9, city: "Seattle", price: 2 },
    { name: "Harbor Kitchen", rating: 4.2, city: "Boston", price: 4 },
  ];

  describe("createFilter", () => {
    test("creates predicate from field/operator/value", () => {
      const highRated = createFilter("rating", ">=", 4.2);
      expect(diners.filter(highRated)).toEqual([
        { name: "Sunset Diner", rating: 4.7, city: "Boston", price: 3 },
        { name: "Harbor Kitchen", rating: 4.2, city: "Boston", price: 4 },
      ]);
    });

    test("unknown operator always returns false", () => {
      const invalid = createFilter("rating", "!=", 4);
      expect(diners.filter(invalid)).toEqual([]);
    });
  });

  describe("createSorter", () => {
    test("sorts numbers in descending order", () => {
      const byRatingDesc = createSorter<{ rating: number }>("rating", "desc");
      expect([{ rating: 3 }, { rating: 5 }, { rating: 4 }].sort(byRatingDesc)).toEqual([
        { rating: 5 },
        { rating: 4 },
        { rating: 3 },
      ]);
    });

    test("sorts strings in ascending order", () => {
      const byNameAsc = createSorter<{ name: string }>("name", "asc");
      expect([{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }].sort(byNameAsc)).toEqual([
        { name: "Alice" },
        { name: "Bob" },
        { name: "Charlie" },
      ]);
    });
  });

  describe("createMapper", () => {
    test("picks only requested fields", () => {
      const pickNameAndRating = createMapper<{ name: string; rating: number; city: string }>([
        "name",
        "rating",
      ]);

      expect(pickNameAndRating({ name: "Sunset Diner", rating: 4.7, city: "Boston" })).toEqual({
        name: "Sunset Diner",
        rating: 4.7,
      });
    });
  });

  describe("applyOperations", () => {
    test("applies operations left-to-right", () => {
      const result = applyOperations(
        diners,
        (items) => items.filter(createFilter("rating", ">=", 4.0)),
        (items) => items.sort(createSorter("name", "asc")),
      );

      expect(result).toEqual([
        { name: "Harbor Kitchen", rating: 4.2, city: "Boston", price: 4 },
        { name: "Sunset Diner", rating: 4.7, city: "Boston", price: 3 },
      ]);
    });

    test("invalid data returns []", () => {
      expect(applyOperations(null as any, (items) => items)).toEqual([]);
    });
  });
});
