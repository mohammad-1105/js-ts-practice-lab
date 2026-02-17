/**
 * Taxi Fare Calculator - Number & Math
 *
 * A taxi app needs robust fare calculations from user input, surge rules,
 * and distance values. Use Number and Math methods to implement each rule.
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 * Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 * 1. parseFare(fareString)
 *    - Parse a numeric string using parseFloat().
 *    - If fareString is not a string, or parsed value is NaN, return -1.
 *    - Example: parseFare("152.50") => 152.5
 *
 * 2. roundFare(amount, decimalPlaces)
 *    - Round using amount.toFixed(decimalPlaces).
 *    - Return type must be STRING.
 *    - If amount is not number, or decimalPlaces is not a non-negative integer,
 *      return "".
 *    - Example: roundFare(152.567, 2) => "152.57"
 *
 * 3. calculateSurge(baseFare, surgeMultiplier)
 *    - Compute baseFare * surgeMultiplier, then round UP with Math.ceil().
 *    - If baseFare or surgeMultiplier is not a positive number, return 0.
 *    - Example: calculateSurge(73, 1.8) => 132
 *
 * 4. findCheapestAndCostliest(...fares)
 *    - Filter out invalid/non-number values.
 *    - Return cheapest and costliest using Math.min/Math.max.
 *    - If no valid numbers remain, return null.
 *    - Return shape: { cheapest, costliest }.
 *
 * 5. getDistanceDifference(from, to)
 *    - Parse both values using parseInt().
 *    - Return absolute difference using Math.abs().
 *    - If either parsed value is NaN, return -1.
 *
 * @example
 * parseFare("100")                         // => 100
 * findCheapestAndCostliest(150, 80, 200)   // => { cheapest: 80, costliest: 200 }
 * getDistanceDifference("15", "8")       // => 7
 */

export function parseFare(fareString: string): number {
  // your code here
  return -1;
}

export function roundFare(amount: number, decimalPlaces: number): string {
  // your code here
  return "";
}

export function calculateSurge(baseFare: number, surgeMultiplier: number): number {
  // your code here
  return 0;
}

export function findCheapestAndCostliest(
  ...fares: number[]
): { cheapest: number; costliest: number } | null {
  // your code here
  return null;
}

export function getDistanceDifference(from: string, to: string): number {
  // your code here
  return -1;
}
