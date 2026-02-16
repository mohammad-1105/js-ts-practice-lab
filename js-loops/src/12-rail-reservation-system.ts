/**
 * Intercity Rail Reservation System
 *
 * Build a simplified seat-allocation engine for intercity rail.
 *
 * Train object:
 * - `{ trainNumber, name, seats }`
 * - `seats` is a class-to-count map, e.g. `{ standard: 5, business: 2 }`
 *
 * Passenger request:
 * - `{ name, trainNumber, preferred, fallback }`
 *
 * Rules (use nested loops):
 * - Process passengers in FIFO order.
 * - For each passenger:
 *   1. Find matching train by `trainNumber`.
 *   2. Allocate `preferred` class if seats available.
 *   3. Else allocate `fallback` class if available.
 *   4. Else return `waitlisted` with class set to preferred.
 *   5. If no train found, return `train_not_found` with class `null`.
 * - Seat counts must be mutated as allocations happen.
 *
 * Validation:
 * - If `passengers` or `trains` is not a non-empty array, return `[]`.
 *
 * @param passengers - Queue of passenger requests.
 * @param trains - Train inventory with mutable seat counts.
 * @returns Reservation results in request order.
 *
 * @hint Use one loop for passengers and an inner loop to locate train.
 * After locating, check preferred then fallback and decrement seat counters.
 */
export interface PassengerRequest {
  name: string;
  trainNumber: string;
  preferred: string;
  fallback: string;
}

export interface TrainInfo {
  trainNumber: string;
  name: string;
  seats: Record<string, number>;
}

export type ReservationStatus = "confirmed" | "waitlisted" | "train_not_found";

export interface ReservationResult {
  name: string;
  trainNumber: string;
  class: string | null;
  status: ReservationStatus;
}

export function processRailReservations(
  passengers: PassengerRequest[],
  trains: TrainInfo[],
): ReservationResult[] {
  // your code here
  return [];
}
