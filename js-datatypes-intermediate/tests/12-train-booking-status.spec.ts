import { describe, expect, test } from "bun:test";
import { processTrainBooking } from "../src/12-train-booking-status.ts";

describe("12 - Train Booking Status Processor (9 pts)", () => {
  const baseBooking = {
    bookingRef: "1234567890",
    train: { number: "1201", name: "Northeast Express", from: "NYP", to: "BOS" },
    classBooked: "Business",
    passengers: [{ name: "Alex Kim", age: 28, gender: "M", booking: "C1", current: "C1" }],
  };

  describe("Booking reference formatting", () => {
    test("bookingRef formatted as 3-3-4 with dashes", () => {
      const result = processTrainBooking(baseBooking);
      expect(result.bookingRefFormatted).toBe("123-456-7890");
    });

    test("bookingRef with all zeros", () => {
      const result = processTrainBooking({ ...baseBooking, bookingRef: "0000000000" });
      expect(result.bookingRefFormatted).toBe("000-000-0000");
    });
  });

  describe("Train info template literal", () => {
    test("trainInfo formatted correctly", () => {
      const result = processTrainBooking(baseBooking);
      expect(result.trainInfo).toBe(
        "Train: 1201 - Northeast Express | NYP -> BOS | Class: Business",
      );
    });
  });

  describe("Passenger status detection", () => {
    test('Current "C1" => CONFIRMED', () => {
      const result = processTrainBooking(baseBooking);
      expect(result.passengers[0].statusLabel).toBe("CONFIRMED");
      expect(result.passengers[0].isConfirmed).toBe(true);
    });

    test('Current "S5" => CONFIRMED', () => {
      const booking = {
        ...baseBooking,
        passengers: [{ name: "Test", age: 30, gender: "M", booking: "S5", current: "S5" }],
      };
      const result = processTrainBooking(booking);
      expect(result.passengers[0].statusLabel).toBe("CONFIRMED");
    });

    test('Current "WL8" => WAITLISTED', () => {
      const booking = {
        ...baseBooking,
        passengers: [{ name: "Test", age: 30, gender: "M", booking: "WL12", current: "WL8" }],
      };
      const result = processTrainBooking(booking);
      expect(result.passengers[0].statusLabel).toBe("WAITLISTED");
      expect(result.passengers[0].isConfirmed).toBe(false);
    });

    test('Current "CXL" => CANCELLED', () => {
      const booking = {
        ...baseBooking,
        passengers: [{ name: "Test", age: 30, gender: "M", booking: "C1", current: "CXL" }],
      };
      const result = processTrainBooking(booking);
      expect(result.passengers[0].statusLabel).toBe("CANCELLED");
    });

    test('Current "STBY2" => STANDBY', () => {
      const booking = {
        ...baseBooking,
        passengers: [{ name: "Test", age: 30, gender: "M", booking: "STBY5", current: "STBY2" }],
      };
      const result = processTrainBooking(booking);
      expect(result.passengers[0].statusLabel).toBe("STANDBY");
    });
  });

  describe("Formatted name", () => {
    test("Name padded to 20 chars with age/gender suffix", () => {
      const result = processTrainBooking(baseBooking);
      expect(result.passengers[0].formattedName).toBe("Alex Kim            (28/M)");
    });

    test("Booking and current status preserved", () => {
      const result = processTrainBooking(baseBooking);
      expect(result.passengers[0].bookingStatus).toBe("C1");
      expect(result.passengers[0].currentStatus).toBe("C1");
    });
  });

  describe("Summary statistics", () => {
    test("All confirmed passengers", () => {
      const booking = {
        ...baseBooking,
        passengers: [
          { name: "A", age: 20, gender: "M", booking: "C1", current: "C1" },
          { name: "B", age: 25, gender: "F", booking: "C2", current: "C2" },
        ],
      };
      const result = processTrainBooking(booking);
      expect(result.summary).toEqual({
        totalPassengers: 2,
        confirmed: 2,
        waitlisted: 0,
        cancelled: 0,
        standby: 0,
        allConfirmed: true,
        anyWaitlisted: false,
      });
    });

    test("Mixed statuses counted correctly", () => {
      const booking = {
        ...baseBooking,
        passengers: [
          { name: "A", age: 20, gender: "M", booking: "C1", current: "C1" },
          { name: "B", age: 25, gender: "F", booking: "WL5", current: "WL3" },
          { name: "C", age: 30, gender: "M", booking: "C3", current: "CXL" },
          { name: "D", age: 35, gender: "F", booking: "STBY1", current: "STBY1" },
        ],
      };
      const result = processTrainBooking(booking);
      expect(result.summary.totalPassengers).toBe(4);
      expect(result.summary.confirmed).toBe(1);
      expect(result.summary.waitlisted).toBe(1);
      expect(result.summary.cancelled).toBe(1);
      expect(result.summary.standby).toBe(1);
      expect(result.summary.allConfirmed).toBe(false);
      expect(result.summary.anyWaitlisted).toBe(true);
    });
  });

  describe("Chart prepared", () => {
    test("All confirmed => chartPrepared true", () => {
      const result = processTrainBooking(baseBooking);
      expect(result.chartPrepared).toBe(true);
    });

    test("Has waitlisted passenger => chartPrepared false", () => {
      const booking = {
        ...baseBooking,
        passengers: [
          { name: "A", age: 20, gender: "M", booking: "C1", current: "C1" },
          { name: "B", age: 25, gender: "F", booking: "WL5", current: "WL3" },
        ],
      };
      const result = processTrainBooking(booking);
      expect(result.chartPrepared).toBe(false);
    });

    test("Cancelled + confirmed => chartPrepared true (cancelled excluded)", () => {
      const booking = {
        ...baseBooking,
        passengers: [
          { name: "A", age: 20, gender: "M", booking: "C1", current: "C1" },
          { name: "B", age: 25, gender: "F", booking: "C2", current: "CXL" },
        ],
      };
      const result = processTrainBooking(booking);
      expect(result.chartPrepared).toBe(true);
    });

    test("Standby passenger => chartPrepared false", () => {
      const booking = {
        ...baseBooking,
        passengers: [
          { name: "A", age: 20, gender: "M", booking: "C1", current: "C1" },
          { name: "B", age: 25, gender: "F", booking: "STBY1", current: "STBY1" },
        ],
      };
      const result = processTrainBooking(booking);
      expect(result.chartPrepared).toBe(false);
    });
  });

  describe("Multiple passengers", () => {
    test("All passenger fields generated correctly", () => {
      const booking = {
        ...baseBooking,
        passengers: [
          { name: "Alex", age: 28, gender: "M", booking: "C1", current: "C1" },
          { name: "Taylor", age: 25, gender: "F", booking: "WL5", current: "C3" },
        ],
      };
      const result = processTrainBooking(booking);
      expect(result.passengers.length).toBe(2);
      expect(result.passengers[0].statusLabel).toBe("CONFIRMED");
      expect(result.passengers[1].statusLabel).toBe("CONFIRMED");
      expect(result.passengers[1].bookingStatus).toBe("WL5");
      expect(result.passengers[1].currentStatus).toBe("C3");
    });
  });

  describe("Validation", () => {
    test("null bookingData returns null", () => {
      expect(processTrainBooking(null as any)).toBeNull();
    });

    test("Non-object returns null", () => {
      expect(processTrainBooking("booking")).toBeNull();
    });

    test("Missing bookingRef string returns null", () => {
      expect(processTrainBooking({ ...baseBooking, bookingRef: undefined })).toBeNull();
    });

    test("bookingRef not 10 digits returns null", () => {
      expect(processTrainBooking({ ...baseBooking, bookingRef: "12345" })).toBeNull();
    });

    test("bookingRef with letters returns null", () => {
      expect(processTrainBooking({ ...baseBooking, bookingRef: "12345abcde" })).toBeNull();
    });

    test("Missing train returns null", () => {
      expect(processTrainBooking({ ...baseBooking, train: undefined })).toBeNull();
    });

    test("Empty passengers array returns null", () => {
      expect(processTrainBooking({ ...baseBooking, passengers: [] })).toBeNull();
    });

    test("Non-array passengers returns null", () => {
      expect(processTrainBooking({ ...baseBooking, passengers: "none" })).toBeNull();
    });
  });
});
