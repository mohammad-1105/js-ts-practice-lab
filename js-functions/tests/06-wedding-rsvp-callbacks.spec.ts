import { describe, expect, test } from "bun:test";
import {
  handleRSVP,
  notifyGuests,
  processGuests,
  transformGuestList,
} from "../src/06-wedding-rsvp-callbacks.ts";

describe("06 - Wedding RSVP Callback Utilities (8 pts)", () => {
  const guests = [
    { name: "Emma", side: "bride", rsvp: "yes", plusOne: true },
    { name: "Noah", side: "groom", rsvp: "no", plusOne: false },
    { name: "Olivia", side: "bride", rsvp: "yes", plusOne: false },
  ];

  describe("processGuests", () => {
    test("filters guests using callback", () => {
      expect(processGuests(guests, (guest) => guest.side === "bride")).toEqual([
        { name: "Emma", side: "bride", rsvp: "yes", plusOne: true },
        { name: "Olivia", side: "bride", rsvp: "yes", plusOne: false },
      ]);
    });

    test("invalid inputs return []", () => {
      expect(processGuests(null as any, (guest) => Boolean(guest))).toEqual([]);
      expect(processGuests(guests, null as any)).toEqual([]);
    });
  });

  describe("notifyGuests", () => {
    test("collects callback results for each guest", () => {
      expect(notifyGuests(guests, (guest) => `Email sent to ${guest.name}`)).toEqual([
        "Email sent to Emma",
        "Email sent to Noah",
        "Email sent to Olivia",
      ]);
    });

    test("invalid inputs return []", () => {
      expect(notifyGuests(null as any, (guest) => guest)).toEqual([]);
      expect(notifyGuests(guests, null as any)).toEqual([]);
    });
  });

  describe("handleRSVP", () => {
    test("calls onAccept for yes RSVP", () => {
      const guest = { name: "Emma", rsvp: "yes" };
      const result = handleRSVP(
        guest,
        (g) => `${g.name} confirmed attendance`,
        (g) => `${g.name} declined`,
      );

      expect(result).toBe("Emma confirmed attendance");
    });

    test("calls onDecline for no RSVP", () => {
      const guest = { name: "Noah", rsvp: "no" };
      const result = handleRSVP(
        guest,
        (g) => `${g.name} confirmed attendance`,
        (g) => `${g.name} declined`,
      );

      expect(result).toBe("Noah declined");
    });

    test("other RSVP values return null", () => {
      expect(
        handleRSVP(
          { name: "Ava", rsvp: "maybe" },
          () => "yes",
          () => "no",
        ),
      ).toBeNull();
    });

    test("invalid inputs return null", () => {
      expect(
        handleRSVP(
          null,
          () => "ok",
          () => "no",
        ),
      ).toBeNull();
      expect(handleRSVP({ name: "Ava", rsvp: "yes" }, null as any, () => "no")).toBeNull();
      expect(handleRSVP({ name: "Ava", rsvp: "yes" }, () => "ok", null as any)).toBeNull();
    });
  });

  describe("transformGuestList", () => {
    test("applies transforms left-to-right", () => {
      const result = transformGuestList(
        guests,
        (items) => items.filter((guest) => guest.rsvp === "yes"),
        (items) => items.map((guest) => ({ ...guest, invited: true })),
      );

      expect(result).toEqual([
        { name: "Emma", side: "bride", rsvp: "yes", plusOne: true, invited: true },
        { name: "Olivia", side: "bride", rsvp: "yes", plusOne: false, invited: true },
      ]);
    });

    test("invalid guest input returns []", () => {
      expect(transformGuestList(null as any, (items) => items)).toEqual([]);
    });
  });
});
