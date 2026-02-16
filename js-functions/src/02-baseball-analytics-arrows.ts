/**
 * Baseball Analytics Dashboard (Arrow Functions)
 *
 * Build a mini MLB analytics utility. Every function in this file must be
 * implemented as an arrow function.
 *
 * Functions:
 *
 * 1. `calcSlugging(totalBases, atBats)`
 *    - Formula: `totalBases / atBats`
 *    - Round to 3 decimals
 *    - If `atBats <= 0` or `totalBases < 0`, return `0`
 *
 * 2. `calcEra(earnedRuns, inningsPitched)`
 *    - Formula: `(earnedRuns * 9) / inningsPitched`
 *    - Round to 2 decimals
 *    - If `inningsPitched <= 0` or `earnedRuns < 0`, return `0`
 *
 * 3. `calcBattingAverage(totalHits, atBats, sacrifices = 0)`
 *    - Formula: `totalHits / (atBats - sacrifices)`
 *    - Round to 3 decimals
 *    - If denominator <= 0, return `0`
 *
 * 4. `isTwoWayStar(battingAverage, era)`
 *    - Return `true` if:
 *      - battingAverage >= 0.285
 *      - era <= 3.50
 *
 * 5. `getPlayerCard(player)`
 *    - Input shape:
 *      `{ name, totalBases, atBats, earnedRuns, inningsPitched, totalHits, sacrifices }`
 *    - Return:
 *      `{ name, slugging, era, battingAverage, isTwoWayStar }`
 *    - Use the above functions internally
 *    - If player is missing or name is blank, return `null`
 *
 * @hint Arrow style: `const fn = (...) => { ... }`
 */
export interface BaseballPlayerInput {
  name: string;
  totalBases: number;
  atBats: number;
  earnedRuns: number;
  inningsPitched: number;
  totalHits: number;
  sacrifices?: number;
}

export interface BaseballPlayerCard {
  name: string;
  slugging: number;
  era: number;
  battingAverage: number;
  isTwoWayStar: boolean;
}

export const calcSlugging = (totalBases: number, atBats: number): number => {
  // your code here
  return 0;
};

export const calcEra = (earnedRuns: number, inningsPitched: number): number => {
  // your code here
  return 0;
};

export const calcBattingAverage = (
  totalHits: number,
  atBats: number,
  sacrifices: number = 0,
): number => {
  // your code here
  return 0;
};

export const isTwoWayStar = (battingAverage: number, era: number): boolean => {
  // your code here
  return false;
};

export const getPlayerCard = (
  player: BaseballPlayerInput | null | undefined,
): BaseballPlayerCard | null => {
  // your code here
  return null;
};
