/**
 * Manhattan Bagel Shop Order Calculator
 *
 * You are building the checkout function for a small bagel shop in Manhattan.
 * Customers choose a bagel type, quantity, and whether each bagel should be toasted.
 *
 * Bagel prices:
 * - `plain` = $3.00
 * - `everything` = $4.00
 * - `sesame` = $3.50
 * - `blueberry` = $4.25
 * - `asiago` = $5.00
 *
 * Rules:
 * - `quantity` defaults to `1`
 * - `toasted` defaults to `false`
 * - If toasted, add `$0.50` per bagel
 * - `pricePerBagel = basePrice + toastCharge`
 * - `total = pricePerBagel * quantity`
 * - Return `{ type, quantity, pricePerBagel, total }`
 *
 * Validation:
 * - If `type` is not a known bagel type, return `null`
 * - If `quantity` is not a positive integer, return `null`
 *
 * @param type - Bagel type
 * @param quantity - Number of bagels (default: 1)
 * @param toasted - Whether bagels are toasted (default: false)
 * @returns Order summary object, or `null` for invalid input
 *
 * @hint Use default parameters and a price lookup object.
 */
export interface BagelOrderSummary {
  type: string;
  quantity: number;
  pricePerBagel: number;
  total: number;
}

export function calculateBagelOrder(
  type: string,
  quantity: number = 1,
  toasted: boolean = false,
): BagelOrderSummary | null {
  // your code here
  return null;
}
