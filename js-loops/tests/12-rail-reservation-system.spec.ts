import { describe, expect, test } from "bun:test";
import { processRailReservations } from "../src/12-rail-reservation-system.ts";

describe("12 - Intercity Rail Reservation System (10 pts)", () => {
  const sampleTrains = [
    {
      trainNumber: "A100",
      name: "Atlantic Express",
      seats: { standard: 3, comfort: 2, business: 1, first: 0 },
    },
    {
      trainNumber: "B200",
      name: "Coastal Arrow",
      seats: { standard: 5, comfort: 1, business: 0, first: 1 },
    },
  ];

  describe("Preferred class allocation", () => {
    test("allocates preferred class when available", () => {
      const trains = [
        { trainNumber: "A100", name: "Atlantic", seats: { standard: 5, comfort: 2 } },
      ];

      const result = processRailReservations(
        [{ name: "Alice", trainNumber: "A100", preferred: "comfort", fallback: "standard" }],
        trains,
      );

      expect(result).toEqual([
        { name: "Alice", trainNumber: "A100", class: "comfort", status: "confirmed" },
      ]);
    });

    test("seat count decrements after allocation", () => {
      const trains = [
        { trainNumber: "A100", name: "Atlantic", seats: { comfort: 1, standard: 5 } },
      ];

      const result = processRailReservations(
        [
          { name: "Alice", trainNumber: "A100", preferred: "comfort", fallback: "standard" },
          { name: "Ben", trainNumber: "A100", preferred: "comfort", fallback: "standard" },
        ],
        trains,
      );

      expect(result[0]).toEqual({
        name: "Alice",
        trainNumber: "A100",
        class: "comfort",
        status: "confirmed",
      });

      expect(result[1]).toEqual({
        name: "Ben",
        trainNumber: "A100",
        class: "standard",
        status: "confirmed",
      });
    });
  });

  describe("Fallback allocation", () => {
    test("uses fallback class when preferred is full", () => {
      const trains = [
        { trainNumber: "A100", name: "Atlantic", seats: { comfort: 0, standard: 5 } },
      ];

      const result = processRailReservations(
        [{ name: "Chris", trainNumber: "A100", preferred: "comfort", fallback: "standard" }],
        trains,
      );

      expect(result).toEqual([
        { name: "Chris", trainNumber: "A100", class: "standard", status: "confirmed" },
      ]);
    });

    test("fallback seat also decrements", () => {
      const trains = [
        { trainNumber: "A100", name: "Atlantic", seats: { comfort: 0, standard: 1 } },
      ];

      const result = processRailReservations(
        [
          { name: "Chris", trainNumber: "A100", preferred: "comfort", fallback: "standard" },
          { name: "Diana", trainNumber: "A100", preferred: "comfort", fallback: "standard" },
        ],
        trains,
      );

      expect(result[0].status).toBe("confirmed");
      expect(result[0].class).toBe("standard");
      expect(result[1].status).toBe("waitlisted");
    });
  });

  describe("Waitlisted passengers", () => {
    test("waitlisted when preferred and fallback are both full", () => {
      const trains = [
        { trainNumber: "A100", name: "Atlantic", seats: { comfort: 0, standard: 0 } },
      ];

      const result = processRailReservations(
        [{ name: "Evan", trainNumber: "A100", preferred: "comfort", fallback: "standard" }],
        trains,
      );

      expect(result).toEqual([
        { name: "Evan", trainNumber: "A100", class: "comfort", status: "waitlisted" },
      ]);
    });
  });

  describe("Train not found", () => {
    test("returns train_not_found for invalid train number", () => {
      const trains = [{ trainNumber: "A100", name: "Atlantic", seats: { standard: 5 } }];

      const result = processRailReservations(
        [{ name: "Fiona", trainNumber: "X999", preferred: "comfort", fallback: "standard" }],
        trains,
      );

      expect(result).toEqual([
        { name: "Fiona", trainNumber: "X999", class: null, status: "train_not_found" },
      ]);
    });
  });

  describe("FIFO processing", () => {
    test("processes requests in order as seats deplete", () => {
      const trains = [
        { trainNumber: "A100", name: "Atlantic", seats: { business: 1, comfort: 1, standard: 1 } },
      ];

      const passengers = [
        { name: "P1", trainNumber: "A100", preferred: "business", fallback: "comfort" },
        { name: "P2", trainNumber: "A100", preferred: "business", fallback: "comfort" },
        { name: "P3", trainNumber: "A100", preferred: "comfort", fallback: "standard" },
        { name: "P4", trainNumber: "A100", preferred: "standard", fallback: "business" },
      ];

      const result = processRailReservations(passengers, trains);

      expect(result[0]).toEqual({
        name: "P1",
        trainNumber: "A100",
        class: "business",
        status: "confirmed",
      });
      expect(result[1]).toEqual({
        name: "P2",
        trainNumber: "A100",
        class: "comfort",
        status: "confirmed",
      });
      expect(result[2]).toEqual({
        name: "P3",
        trainNumber: "A100",
        class: "standard",
        status: "confirmed",
      });
      expect(result[3]).toEqual({
        name: "P4",
        trainNumber: "A100",
        class: "standard",
        status: "waitlisted",
      });
    });
  });

  describe("Multiple trains", () => {
    test("books passengers across different trains", () => {
      const trains = [
        { trainNumber: "A100", name: "Atlantic", seats: { comfort: 1, standard: 2 } },
        { trainNumber: "B200", name: "Coastal", seats: { comfort: 1, standard: 3 } },
      ];

      const passengers = [
        { name: "A", trainNumber: "A100", preferred: "comfort", fallback: "standard" },
        { name: "B", trainNumber: "B200", preferred: "comfort", fallback: "standard" },
        { name: "C", trainNumber: "A100", preferred: "comfort", fallback: "standard" },
      ];

      const result = processRailReservations(passengers, trains);

      expect(result[0]).toEqual({
        name: "A",
        trainNumber: "A100",
        class: "comfort",
        status: "confirmed",
      });
      expect(result[1]).toEqual({
        name: "B",
        trainNumber: "B200",
        class: "comfort",
        status: "confirmed",
      });
      expect(result[2]).toEqual({
        name: "C",
        trainNumber: "A100",
        class: "standard",
        status: "confirmed",
      });
    });
  });

  describe("Validation", () => {
    test("empty passengers array returns []", () => {
      expect(processRailReservations([], sampleTrains)).toEqual([]);
    });

    test("empty trains array returns []", () => {
      expect(
        processRailReservations(
          [{ name: "Test", trainNumber: "A100", preferred: "comfort", fallback: "standard" }],
          [],
        ),
      ).toEqual([]);
    });

    test("non-array passengers returns []", () => {
      expect(processRailReservations("passengers" as any, sampleTrains)).toEqual([]);
    });

    test("non-array trains returns []", () => {
      expect(
        processRailReservations(
          [{ name: "Test", trainNumber: "A100", preferred: "comfort", fallback: "standard" }],
          "trains" as any,
        ),
      ).toEqual([]);
    });

    test("null passengers returns []", () => {
      expect(processRailReservations(null as any, sampleTrains)).toEqual([]);
    });

    test("null trains returns []", () => {
      expect(
        processRailReservations(
          [{ name: "Test", trainNumber: "A100", preferred: "comfort", fallback: "standard" }],
          null as any,
        ),
      ).toEqual([]);
    });
  });
});
