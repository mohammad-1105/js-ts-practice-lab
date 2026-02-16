/**
 * Installment Payoff Calculator
 *
 * A customer finances a phone and pays it down monthly with fixed payments.
 *
 * Monthly sequence (use a `while` loop):
 * 1. `interest = remaining * monthlyRate`
 * 2. `remaining = remaining + interest`
 * 3. deduct payment
 * 4. increment months and total paid
 *
 * Last month rule:
 * - If remaining after interest is less than `monthlyPayment`, pay only the
 *   remaining balance (do not overpay by a full installment).
 *
 * Infinite loop guard:
 * - If `monthlyPayment <= principal * monthlyRate`, return:
 *   `{ months: -1, totalPaid: -1, totalInterest: -1 }`
 *
 * Validation:
 * - All parameters must be positive numbers, else return the same error object.
 *
 * @param principal - Initial borrowed amount.
 * @param monthlyRate - Monthly interest rate (e.g. 0.02 for 2%).
 * @param monthlyPayment - Monthly payment amount.
 * @returns Payoff summary including months and total interest.
 *
 * @hint Track `remaining`, `months`, and `totalPaid` as accumulators, and round
 * values to 2 decimals when needed.
 */
export interface InstallmentSummary {
  months: number;
  totalPaid: number;
  totalInterest: number;
}

export function calculateInstallmentPayoff(
  principal: number,
  monthlyRate: number,
  monthlyPayment: number,
): InstallmentSummary {
  // your code here
  return { months: -1, totalPaid: -1, totalInterest: -1 };
}
