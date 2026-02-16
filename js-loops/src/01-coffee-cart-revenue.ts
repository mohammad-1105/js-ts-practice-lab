/**
 * Downtown Coffee Cart Revenue
 *
 * You run a fast-moving coffee cart in downtown Seattle. Customers arrive in
 * a single queue and every order is served in sequence.
 *
 * Pricing rules:
 * - Every 3rd customer buys a seasonal latte for $6.
 * - All other customers buy drip coffee for $4.
 *
 * Validation:
 * - If `customers` is not a positive integer, return:
 *   `{ totalCups: 0, totalRevenue: 0 }`
 *
 * @param customers - Number of customers served today.
 * @returns A summary with total cups served and total revenue.
 *
 * @hint Use a `for` loop from `1` to `customers` and `% 3` to detect every
 * third customer.
 */
export interface CoffeeCartSummary {
  totalCups: number;
  totalRevenue: number;
}

export function calculateCoffeeCartRevenue(customers: number): CoffeeCartSummary {
  // your code here
  return { totalCups: 0, totalRevenue: 0 };
}
