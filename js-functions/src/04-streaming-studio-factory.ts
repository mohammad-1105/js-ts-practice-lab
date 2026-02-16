/**
 * Streaming Studio Factory Functions
 *
 * Create configurable factories for a streaming platform toolkit.
 *
 * Functions:
 *
 * 1. `createLineWriter(genre)`
 *    - Returns a function `(lead, rival) => string`
 *    - Genres and templates:
 *      - `action`: `${lead} says: "You picked the wrong day, ${rival}."`
 *      - `romance`: `${lead} whispers: "${rival}, you are my favorite chapter."`
 *      - `comedy`: `${lead} laughs: "${rival}, that was not in the script!"`
 *      - `drama`: `${lead} cries: "${rival}, you changed everything."`
 *    - Unknown genre => `null`
 *    - If lead/rival missing in returned function => `"..."`
 *
 * 2. `createSeatPricer(basePrice)`
 *    - Returns function `(seatType, isWeekend = false) => number | null`
 *    - Seat multipliers:
 *      - `balcony` = 1
 *      - `premium` = 1.4
 *      - `vip` = 1.9
 *    - Weekend surcharge: multiply final price by `1.2`
 *    - Round final price to nearest integer
 *    - Invalid `basePrice` => `null`
 *    - Unknown `seatType` in returned function => `null`
 *
 * 3. `createReviewScoreCalculator(weights)`
 *    - Returns function `(scores) => number | null`
 *    - Weighted score: sum of `scores[key] * weights[key]` for matching keys
 *    - Round to 1 decimal
 *    - If weights invalid object => `null`
 *
 * @hint Factory functions return specialized inner functions and preserve
 * outer parameters via closure.
 */
export type StudioGenre = "action" | "romance" | "comedy" | "drama";

export function createLineWriter(
  genre: StudioGenre | string,
): ((lead: string, rival: string) => string) | null {
  // your code here
  return null;
}

export function createSeatPricer(
  basePrice: number,
): ((seatType: string, isWeekend?: boolean) => number | null) | null {
  // your code here
  return null;
}

export function createReviewScoreCalculator(
  weights: Record<string, number>,
): ((scores: Record<string, number>) => number | null) | null {
  // your code here
  return null;
}
