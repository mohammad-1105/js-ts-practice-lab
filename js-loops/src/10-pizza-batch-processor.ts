/**
 * Pizza Kitchen Batch Processor
 *
 * A pizza kitchen can bake at most 5 pizzas in one oven batch.
 *
 * Rules:
 * - `orders` is an array where each number is pizzas requested for one order.
 * - Process orders in order.
 * - For each valid order, use `do...while` to split into 5-pizza batches.
 * - Track:
 *   - `totalBatches`
 *   - `totalPizzas`
 *   - `ordersProcessed`
 * - Skip invalid orders (`<= 0`, decimal, non-number).
 *
 * Validation:
 * - If `orders` is not an array or empty, return all counters as `0`.
 *
 * @param orders - Pizza counts per order.
 * @returns Batch and volume summary.
 *
 * @hint Use a `for` loop over orders and a nested `do...while` with
 * `remaining = Math.max(0, remaining - 5)` style updates.
 */
export interface PizzaBatchSummary {
  totalBatches: number;
  totalPizzas: number;
  ordersProcessed: number;
}

export function processPizzaOrders(orders: number[]): PizzaBatchSummary {
  // your code here
  return { totalBatches: 0, totalPizzas: 0, ordersProcessed: 0 };
}
