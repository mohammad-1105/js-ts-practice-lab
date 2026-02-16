/**
 * City Taxi Meter
 *
 * You are implementing fare logic for a city taxi app.
 *
 * Distance rules (bill mile-by-mile using a `while` loop):
 * - First mile (minimum fare): $8
 * - Miles 2 through 5: $3 per mile
 * - Beyond mile 5: $2 per mile
 * - Distance must be billed with `Math.ceil(distanceMiles)`
 *
 * Waiting charge:
 * - $2 per 2 minutes of waiting
 * - Waiting pairs are billed with `Math.ceil(waitingMinutes / 2)`
 * - `waitingMinutes` defaults to `0`
 *
 * Validation:
 * - If `distanceMiles` is not a positive number, return `-1`.
 * - If `waitingMinutes` is negative or not a number, return `-1`.
 *
 * @param distanceMiles - Trip distance in miles.
 * @param waitingMinutes - Waiting time in minutes.
 * @returns Total fare as a number, or `-1` for invalid input.
 *
 * @hint Use one `while` loop for distance tiers and compute waiting charge
 * separately afterward.
 */
export function calculateCityTaxiFare(distanceMiles: number, waitingMinutes: number = 0): number {
  // your code here
  return -1;
}
