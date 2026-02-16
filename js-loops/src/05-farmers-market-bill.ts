/**
 * Farmers Market Bill
 *
 * A customer brings a shopping list to a Saturday farmers market.
 * You must produce a final bill from requested quantities and a price table.
 *
 * Rules (use `for...of`):
 * - `shoppingList` entries look like `{ name, qty }`.
 * - `priceList` maps product name to price-per-unit.
 * - Skip any item when:
 *   1. the item is missing from `priceList`
 *   2. unit price is greater than `$20` (customer budget rule)
 *   3. item data is invalid (`name` blank, `qty <= 0`, etc.)
 * - For valid items, include `{ name, qty, cost }` and add to `totalBill`.
 *
 * Validation:
 * - If list input is invalid, return empty result with `totalBill: 0`.
 *
 * @param shoppingList - Requested items and quantities.
 * @param priceList - Unit prices by item name.
 * @returns Final bill details.
 *
 * @hint Loop through the shopping list with `for...of`, do validation first,
 * then compute cost and push to the result array.
 */
export interface MarketItemInput {
  name: string;
  qty: number;
}

export interface MarketBillItem {
  name: string;
  qty: number;
  cost: number;
}

export interface MarketBillSummary {
  items: MarketBillItem[];
  totalBill: number;
}

export function createFarmersMarketBill(
  shoppingList: MarketItemInput[],
  priceList: Record<string, number>,
): MarketBillSummary {
  // your code here
  return { items: [], totalBill: 0 };
}
