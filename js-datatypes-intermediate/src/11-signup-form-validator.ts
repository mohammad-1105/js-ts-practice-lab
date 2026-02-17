/**
 * Signup Form Validator
 *
 * You are validating a web signup form and must return field-level errors.
 *
 * formData fields:
 *   { name, email, phone, age, zipCode, state, agreeTerms }
 *
 * Validation Rules:
 *   1. name: trimmed string, 2-50 chars
 *      Error: "Name must be 2-50 characters"
 *
 *   2. email: string with exactly one "@" and at least one "." after "@"
 *      Error: "Invalid email format"
 *
 *   3. phone: string of exactly 10 digits, starting with 6, 7, 8, or 9
 *      Error: "Invalid US phone number"
 *
 *   4. age: integer between 16 and 100 inclusive
 *      If age is numeric string (e.g., "22"), parseInt it first
 *      Error: "Age must be an integer between 16 and 100"
 *
 *   5. zipCode: string of exactly 6 digits, not starting with "0"
 *      Error: "Invalid ZIP code"
 *
 *   6. state: use optional chaining and nullish coalescing; must be non-empty string
 *      Error: "State is required"
 *
 *   7. agreeTerms: must be truthy
 *      Error: "Must agree to terms"
 *
 * Return:
 *   { isValid: boolean, errors: { fieldName: "error message" } }
 *   - isValid is true only when errors has zero keys
 *
 * @param {object} formData
 * @returns {{ isValid: boolean, errors: object }}
 */

interface SignupData {
  name?: any;
  email?: any;
  phone?: any;
  age?: any;
  zipCode?: any;
  state?: any;
  agreeTerms?: any;
}

interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

export function validateSignupForm(formData: SignupData): ValidationResult {
  // TODO: implement
  return { isValid: false, errors: {} };
}
