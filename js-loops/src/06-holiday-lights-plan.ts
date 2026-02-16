/**
 * Holiday Lights Budget Planner
 *
 * You are planning exterior holiday lights for a townhouse while staying
 * within a strict budget.
 *
 * Color rates (per meter):
 * - `warm_white` = $5
 * - `multicolor` = $4
 * - `cool_white` = $3
 * - any other color = $4
 *
 * Rules:
 * 1. Use `for...of` to add all valid light strings with computed cost.
 * 2. If total cost exceeds budget, use a `while` loop to remove items from
 *    the END until total cost is within budget.
 *
 * Validation:
 * - If `lightStrings` is not an array or `budget` is not a positive number,
 *   return `{ selected: [], totalLength: 0, totalCost: 0 }`.
 *
 * @param lightStrings - Candidate light strings with color and length.
 * @param budget - Maximum allowed spend.
 * @returns Final selected plan that fits budget.
 *
 * @hint First build the full selection, then trim from the end in a `while`
 * loop while `totalCost > budget`.
 */
export interface LightStringInput {
  color: string;
  length: number;
}

export interface LightSelection {
  color: string;
  length: number;
  cost: number;
}

export interface HolidayLightsPlan {
  selected: LightSelection[];
  totalLength: number;
  totalCost: number;
}

export function buildHolidayLightsPlan(
  lightStrings: LightStringInput[],
  budget: number,
): HolidayLightsPlan {
  // your code here
  return { selected: [], totalLength: 0, totalCost: 0 };
}
