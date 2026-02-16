import { describe, expect, test } from "bun:test";
import { createHolidayManager } from "../src/11-holiday-calendar-module.ts";

describe("11 - City Holiday Calendar Manager (Module Pattern) (10 pts)", () => {
  test("addHoliday validates input and tracks count", () => {
    const manager = createHolidayManager();

    expect(manager.addHoliday("Independence Day", "2026-07-04", "public")).toBe(1);
    expect(manager.addHoliday("Harvest Parade", "2026-09-15", "cultural")).toBe(2);

    expect(manager.addHoliday("", "2026-10-01", "seasonal")).toBe(-1);
    expect(manager.addHoliday("Bad Type", "2026-10-01", "sports" as any)).toBe(-1);
    expect(manager.addHoliday("Bad Date", 20261001 as any, "public")).toBe(-1);

    expect(manager.getCount()).toBe(2);
  });

  test("duplicate names are rejected", () => {
    const manager = createHolidayManager();

    expect(manager.addHoliday("Independence Day", "2026-07-04", "public")).toBe(1);
    expect(manager.addHoliday("Independence Day", "2026-07-04", "public")).toBe(-1);
  });

  test("removeHoliday removes existing entries", () => {
    const manager = createHolidayManager();
    manager.addHoliday("Independence Day", "2026-07-04", "public");

    expect(manager.removeHoliday("Independence Day")).toBe(true);
    expect(manager.removeHoliday("Independence Day")).toBe(false);
    expect(manager.getCount()).toBe(0);
  });

  test("getByType filters by holiday type", () => {
    const manager = createHolidayManager();
    manager.addHoliday("Independence Day", "2026-07-04", "public");
    manager.addHoliday("Harvest Parade", "2026-09-15", "cultural");

    expect(manager.getByType("public")).toEqual([
      { name: "Independence Day", date: "2026-07-04", type: "public" },
    ]);
  });

  test("getUpcoming returns sorted next N entries", () => {
    const manager = createHolidayManager();
    manager.addHoliday("Winter Lights", "2026-12-10", "seasonal");
    manager.addHoliday("Independence Day", "2026-07-04", "public");
    manager.addHoliday("Harvest Parade", "2026-09-15", "cultural");

    expect(manager.getUpcoming("2026-08-01", 2)).toEqual([
      { name: "Harvest Parade", date: "2026-09-15", type: "cultural" },
      { name: "Winter Lights", date: "2026-12-10", type: "seasonal" },
    ]);
  });

  test("getAll returns copy, not direct internal array", () => {
    const manager = createHolidayManager();
    manager.addHoliday("Independence Day", "2026-07-04", "public");

    const all = manager.getAll();
    all.push({ name: "Injected", date: "2026-01-01", type: "public" });

    expect(manager.getAll()).toEqual([
      { name: "Independence Day", date: "2026-07-04", type: "public" },
    ]);
  });

  test("private state is not exposed directly", () => {
    const manager = createHolidayManager();
    expect((manager as any).holidays).toBeUndefined();
  });
});
