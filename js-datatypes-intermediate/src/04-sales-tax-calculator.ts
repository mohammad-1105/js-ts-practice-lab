/**
 * Sales Tax Calculator
 *
 * You are building a retail checkout service that applies tax by product category.
 *
 * Tax Rates (case-insensitive):
 *   - "essential"   => 0
 *   - "food"        => 5
 *   - "standard"    => 12
 *   - "electronics" => 18
 *   - "luxury"      => 28
 *   - Unknown category => return null
 *
 * Rules:
 *   - taxAmount = amount * taxRate / 100
 *   - totalAmount = amount + taxAmount
 *   - Round taxAmount and totalAmount to 2 decimals using parseFloat(value.toFixed(2))
 *   - Return: { baseAmount, taxRate, taxAmount, totalAmount }
 *
 * Validation:
 *   - If amount is not a positive finite number, return null
 *   - If category is not a string, return null
 *   - If category is unknown, return null
 *
 * @param amount
 * @param category
 * @returns {{ baseAmount: number, taxRate: number, taxAmount: number, totalAmount: number } | null}
 */
interface TaxResult {
  baseAmount: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
}

export function calculateSalesTax(amount: number, category: string): TaxResult | null {
  // TODO: implement
  return null;
}
