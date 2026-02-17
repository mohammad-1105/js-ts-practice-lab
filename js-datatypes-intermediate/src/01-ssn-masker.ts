/**
 * Social Security Number Masker
 *
 * You are building a secure data logger that needs to mask sensitive SSNs.
 *
 * Rules:
 *   - Valid SSN format: "AAA-GG-SSSS" (3 digits, hyphen, 2 digits, hyphen, 4 digits)
 *   - Masking: Keep the last 4 digits visible, replace the rest with "*"
 *   - Example: "123-45-6789" -> "***-**-6789"
 *
 * Validation:
 *   - If input is not a string, return "Invalid SSN"
 *   - If input length is not exactly 11, return "Invalid SSN"
 *   - If input does not match the digit/hyphen structure, return "Invalid SSN"
 *
 * @param ssn
 * @returns {string} masked SSN or error message
 */
export function maskSSN(ssn: string): string {
  // your code here
  return "Invalid SSN";
}
