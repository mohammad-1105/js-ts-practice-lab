/**
 * Zipcode Type Checker - Type Checking
 *
 * A parcel intake service receives mixed values and needs strict
 * type checking helpers for validation and classification.
 *
 * Methods to explore: typeof, Number.isInteger(), Number.isFinite(),
 * Number.isNaN(), Array.isArray(), Boolean()
 *
 * Functions:
 *
 * 1. getDataType(value)
 *    - Return "null" for null.
 *    - Return "array" for arrays.
 *    - Otherwise return typeof value.
 *
 * 2. isValidParcelWeight(weight)
 *    - Return true only for positive finite numbers.
 *    - Reject Infinity, -Infinity, NaN, non-number, and <= 0.
 *
 * 3. isWholeNumber(value)
 *    - Return Number.isInteger(value).
 *
 * 4. isNotANumber(value)
 *    - Return Number.isNaN(value).
 *
 * 5. isTruthy(value)
 *    - Return Boolean(value).
 *
 * @example
 * getDataType(null)                  // => "null"
 * getDataType([1,2,3])               // => "array"
 * isValidParcelWeight(2.5)           // => true
 * isTruthy(0)                        // => false
 */

export function getDataType(value: any): string {
  // your code here
  return "";
}

export function isValidParcelWeight(weight: any): boolean {
  // your code here
  return false;
}

export function isWholeNumber(value: any): boolean {
  // your code here
  return false;
}

export function isNotANumber(value: any): boolean {
  // your code here
  return false;
}

export function isTruthy(value: any): boolean {
  // your code here
  return false;
}
