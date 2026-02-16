/**
 * Card Payment Retry Engine
 *
 * A checkout service retries card payments with exponential backoff.
 *
 * Rules (use `do...while`):
 * - Always perform at least one attempt.
 * - Outcomes array provides attempt results in order.
 * - Stop immediately on `"success"`.
 * - On `"fail"`, wait before next attempt.
 * - Wait sequence between attempts: `1, 2, 4, 8` seconds.
 * - Maximum attempts: `5`.
 *
 * Validation:
 * - If outcomes is not an array or empty, return:
 *   `{ attempts: 0, success: false, totalWaitTime: 0 }`.
 *
 * @param outcomes - Ordered attempt outcomes (`"success"` or `"fail"`).
 * @returns Attempts used, success flag, and total wait time.
 *
 * @hint Keep `attempts`, `waitTime`, and `totalWaitTime` variables, and double
 * `waitTime` after each failed retry (except after final attempt).
 */
export type RetryOutcome = "success" | "fail";

export interface PaymentRetrySummary {
  attempts: number;
  success: boolean;
  totalWaitTime: number;
}

export function processCardPaymentRetry(outcomes: RetryOutcome[]): PaymentRetrySummary {
  // your code here
  return { attempts: 0, success: false, totalWaitTime: 0 };
}
