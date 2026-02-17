/**
 * Transit Pass Generator
 *
 * You are building a city rail pass generator.
 *
 * Rules:
 *   - passenger must include: name, from, to, classType
 *   - classType must be "first" or "second" (case-insensitive)
 *   - Build pass ID as:
 *     first character of classType (uppercase)
 *     + first 3 letters of from (uppercase)
 *     + first 3 letters of to (uppercase)
 *   - Output format:
 *     Line 1: "CITY TRANSIT PASS"
 *     Line 2: "---"
 *     Line 3: "Name: <NAME IN UPPERCASE>"
 *     Line 4: "From: <From in Title Case>"
 *     Line 5: "To: <To in Title Case>"
 *     Line 6: "Class: <FIRST or SECOND>"
 *     Line 7: "Pass ID: <PASSID>"
 *   - Use "\n" between lines
 *
 * Validation:
 *   - If passenger is not an object or is null, return "INVALID PASS"
 *   - If any required field is missing or empty, return "INVALID PASS"
 *   - If classType is not first/second, return "INVALID PASS"
 *
 * @param {{ name: string, from: string, to: string, classType: string }} passenger
 * @returns {string}
 */

interface Passenger {
  name: string;
  from: string;
  to: string;
  classType: string;
}

export function generateTransitPass(passenger: Passenger): string {
  // TODO: implement
  return "INVALID PASS";
}
