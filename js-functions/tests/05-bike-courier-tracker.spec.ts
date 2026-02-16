import { describe, expect, test } from "bun:test";
import { createBikeCourier } from "../src/05-bike-courier-tracker.ts";

describe("05 - Bike Courier Delivery Tracker (8 pts)", () => {
  test("adds deliveries with auto-incrementing IDs", () => {
    const courier = createBikeCourier("Mason", "Downtown");
    expect(courier.addDelivery("Pier 39", "Union Square")).toBe(1);
    expect(courier.addDelivery("Ferry Building", "SoMa")).toBe(2);
  });

  test("invalid pickup/dropoff returns -1", () => {
    const courier = createBikeCourier("Mason", "Downtown");
    expect(courier.addDelivery("", "Union Square")).toBe(-1);
    expect(courier.addDelivery("Pier 39", "")).toBe(-1);
  });

  test("completeDelivery only succeeds once per delivery", () => {
    const courier = createBikeCourier("Mason", "Downtown");
    const id = courier.addDelivery("Pier 39", "Union Square");

    expect(courier.completeDelivery(id)).toBe(true);
    expect(courier.completeDelivery(id)).toBe(false);
    expect(courier.completeDelivery(999)).toBe(false);
  });

  test("getActiveDeliveries returns pending deliveries only", () => {
    const courier = createBikeCourier("Mason", "Downtown");
    const a = courier.addDelivery("Pier 39", "Union Square");
    courier.addDelivery("Ferry Building", "SoMa");
    courier.completeDelivery(a);

    expect(courier.getActiveDeliveries()).toEqual([
      { id: 2, pickup: "Ferry Building", dropoff: "SoMa", status: "pending" },
    ]);
  });

  test("getActiveDeliveries returns copies, not mutable references", () => {
    const courier = createBikeCourier("Mason", "Downtown");
    courier.addDelivery("Pier 39", "Union Square");

    const active = courier.getActiveDeliveries();
    active[0].status = "completed";

    expect(courier.getActiveDeliveries()[0].status).toBe("pending");
  });

  test("getStats returns aggregate totals and formatted success rate", () => {
    const courier = createBikeCourier("Mason", "Downtown");
    const a = courier.addDelivery("Pier 39", "Union Square");
    courier.addDelivery("Ferry Building", "SoMa");
    courier.completeDelivery(a);

    expect(courier.getStats()).toEqual({
      name: "Mason",
      zone: "Downtown",
      total: 2,
      completed: 1,
      pending: 1,
      successRate: "50.00%",
    });
  });

  test("reset clears deliveries and ID counter", () => {
    const courier = createBikeCourier("Mason", "Downtown");
    courier.addDelivery("Pier 39", "Union Square");
    courier.addDelivery("Ferry Building", "SoMa");

    expect(courier.reset()).toBe(true);
    expect(courier.getStats().total).toBe(0);
    expect(courier.addDelivery("Mission", "Market")).toBe(1);
  });

  test("separate instances do not share state", () => {
    const downtown = createBikeCourier("Mason", "Downtown");
    const uptown = createBikeCourier("Harper", "Uptown");

    downtown.addDelivery("A", "B");

    expect(downtown.getStats().total).toBe(1);
    expect(uptown.getStats().total).toBe(0);
  });
});
