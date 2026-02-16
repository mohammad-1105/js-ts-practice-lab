/**
 * Bike Courier Delivery Tracker (Closures)
 *
 * Build a closure-based tracker for a bike courier company.
 *
 * Function:
 * - `createBikeCourier(name, zone)`
 *
 * Returned methods share private state:
 *
 * 1. `addDelivery(pickup, dropoff)`
 *    - Adds `{ id, pickup, dropoff, status: "pending" }`
 *    - IDs auto-increment starting at 1
 *    - Invalid pickup/dropoff => `-1`
 *
 * 2. `completeDelivery(id)`
 *    - Mark pending delivery as completed
 *    - Return `true` on success, else `false`
 *
 * 3. `getActiveDeliveries()`
 *    - Return pending deliveries only
 *    - Return copies, not internal references
 *
 * 4. `getStats()`
 *    - Return `{ name, zone, total, completed, pending, successRate }`
 *    - `successRate` format: `"85.00%"`
 *    - If total is 0, use `"0.00%"`
 *
 * 5. `reset()`
 *    - Clear all deliveries and reset ID counter
 *    - Return `true`
 *
 * @hint Keep `deliveries` and `nextId` private in the outer function scope.
 */
export type DeliveryStatus = "pending" | "completed";

export interface DeliveryRecord {
  id: number;
  pickup: string;
  dropoff: string;
  status: DeliveryStatus;
}

export interface CourierStats {
  name: string;
  zone: string;
  total: number;
  completed: number;
  pending: number;
  successRate: string;
}

export interface BikeCourierTracker {
  addDelivery: (pickup: string, dropoff: string) => number;
  completeDelivery: (id: number) => boolean;
  getActiveDeliveries: () => DeliveryRecord[];
  getStats: () => CourierStats;
  reset: () => boolean;
}

export function createBikeCourier(name: string, zone: string): BikeCourierTracker {
  // your code here
  return {
    addDelivery: () => -1,
    completeDelivery: () => false,
    getActiveDeliveries: () => [],
    getStats: () => ({
      name,
      zone,
      total: 0,
      completed: 0,
      pending: 0,
      successRate: "0.00%",
    }),
    reset: () => true,
  };
}
