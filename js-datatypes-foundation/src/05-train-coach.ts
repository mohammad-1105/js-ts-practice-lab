/**
 * Train Coach Finder - Array Search & Check
 *
 * You're building a train passenger lookup tool. You need to search,
 * validate, and filter passenger records based on name and booking status.
 *
 * Data format: passengers = [
 *   { name: "Rahul", coach: "S5", seat: 42, status: "confirmed" },
 *   { name: "Priya", coach: "S3", seat: 15, status: "waitlisted" },
 *   ...
 * ]
 *
 * Methods to explore: .find(), .findIndex(), .some(), .every(), .filter()
 *
 * Functions:
 *
 * 1. findPassenger(passengers, name)
 *    - Find and return passenger object by name (case-insensitive).
 *    - Use .find() with lowercase comparison.
 *    - If passengers is not an array or name is not a string, return undefined.
 *    - Example: findPassenger([{name:"Rahul"}], "rahul") => {name:"Rahul"}
 *
 * 2. getPassengerIndex(passengers, name)
 *    - Return index of passenger by name (case-insensitive).
 *    - Use .findIndex().
 *    - If passengers is not an array or name is not a string, return -1.
 *    - Example: getPassengerIndex([{name:"A"},{name:"B"}], "b") => 1
 *
 * 3. isAnyWaitlisted(passengers)
 *    - Return true if any passenger has status "waitlisted".
 *    - Use .some().
 *    - If passengers is not an array or is empty, return false.
 *
 * 4. areAllConfirmed(passengers)
 *    - Return true only if every passenger has status "confirmed".
 *    - Use .every().
 *    - If passengers is not an array or is empty, return false.
 *
 * 5. getWaitlistedPassengers(passengers)
 *    - Return a new array containing only waitlisted passengers.
 *    - Use .filter().
 *    - If passengers is not an array, return [].
 *
 * @example
 * findPassenger(passengers, "Rahul")     // => { name: "Rahul", ... }
 * isAnyWaitlisted(passengers)             // => true / false
 * getWaitlistedPassengers(passengers)     // => [ ...waitlisted passengers ]
 */

interface Passenger {
  name: string;
  coach: string;
  seat: number;
  status: string;
}

export function findPassenger(passengers: Passenger[], name: string): Passenger | undefined {
  // your code here
  return undefined;
}

export function getPassengerIndex(passengers: Passenger[], name: string): number {
  // your code here
  return -1;
}

export function isAnyWaitlisted(passengers: Passenger[]): boolean {
  // your code here
  return false;
}

export function areAllConfirmed(passengers: Passenger[]): boolean {
  // your code here
  return false;
}

export function getWaitlistedPassengers(passengers: Passenger[]): Passenger[] {
  // your code here
  return [];
}
