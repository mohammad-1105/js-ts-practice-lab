/**
 * Office Lunch Subscription Planner
 *
 * Your company cafeteria offers monthly lunch subscriptions for office teams.
 * Implement plan creation and plan aggregation using destructuring, rest,
 * and spread syntax.
 *
 * Functions:
 *
 * 1. `createLunchPlan({ name, mealType = "standard", days = 20 })`
 *    - Meal rates per day:
 *      - `standard` = $15
 *      - `vegetarian` = $14
 *      - `high_protein` = $18
 *    - Return: `{ name, mealType, days, dailyRate, totalCost }`
 *    - If name missing/blank, mealType unknown, or days invalid => `null`
 *
 * 2. `combineLunchPlans(...plans)`
 *    - Accepts any number of plan objects
 *    - Return:
 *      `{ totalCustomers, totalRevenue, mealBreakdown }`
 *    - `mealBreakdown` is an object count by meal type
 *    - If no valid plans, return `null`
 *
 * 3. `applyLunchAddons(plan, ...addons)`
 *    - Addon shape: `{ name, price }`
 *    - Add each valid addon price to `dailyRate`
 *    - Recalculate `totalCost = dailyRate * days`
 *    - Return a NEW object with `addonNames`
 *    - Do not mutate input plan
 *    - If plan invalid, return `null`
 *
 * @hint Use parameter destructuring with defaults, rest parameters for variable
 * argument counts, and object spread for immutable updates.
 */
export type MealType = "standard" | "vegetarian" | "high_protein";

export interface LunchPlan {
  name: string;
  mealType: MealType;
  days: number;
  dailyRate: number;
  totalCost: number;
  addonNames?: string[];
}

export interface LunchAddon {
  name: string;
  price: number;
}

export interface CombinedLunchPlans {
  totalCustomers: number;
  totalRevenue: number;
  mealBreakdown: Record<string, number>;
}

export function createLunchPlan({
  name,
  mealType = "standard",
  days = 20,
}: {
  name?: string;
  mealType?: MealType;
  days?: number;
} = {}): LunchPlan | null {
  // your code here
  return null;
}

export function combineLunchPlans(...plans: LunchPlan[]): CombinedLunchPlans | null {
  // your code here
  return null;
}

export function applyLunchAddons(
  plan: LunchPlan | null,
  ...addons: LunchAddon[]
): LunchPlan | null {
  // your code here
  return null;
}
