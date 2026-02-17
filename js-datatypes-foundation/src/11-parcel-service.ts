/**
 * Parcel Delivery Service - JSON & Conversion
 *
 * A delivery backend frequently converts parcel payloads between JSON,
 * strings, numbers, and character arrays.
 *
 * Methods to explore: JSON.stringify(), JSON.parse(), String(), Number(),
 * Array.from()
 *
 * Functions:
 *
 * 1. parcelToJSON(parcel)
 *    - Convert parcel to JSON string using JSON.stringify().
 *    - Use try/catch for serialization errors (e.g., circular data).
 *    - If parcel is undefined, or conversion fails, return "".
 *    - If JSON.stringify returns undefined, also return "".
 *
 * 2. jsonToParcel(jsonString)
 *    - Parse JSON string using JSON.parse().
 *    - If jsonString is not a string or JSON is invalid, return null.
 *
 * 3. convertToString(value)
 *    - Convert any value to string using String(value).
 *
 * 4. convertToNumber(value)
 *    - Convert using Number(value).
 *    - If result is NaN, return NaN (do not override).
 *
 * 5. stringToChars(str)
 *    - Convert string to character array using Array.from(str).
 *    - If str is not a string, return [].
 *
 * @example
 * parcelToJSON({id:"P001"})                 // => '{"id":"P001"}'
 * jsonToParcel('{"id":"P001"}')           // => { id: "P001" }
 * convertToString(42)                        // => "42"
 * stringToChars("Dak")                      // => ["D", "a", "k"]
 */

export function parcelToJSON(parcel: any): string {
  // your code here
  return "";
}

export function jsonToParcel(jsonString: any): any {
  // your code here
  return null;
}

export function convertToString(value: any): string {
  // your code here
  return "";
}

export function convertToNumber(value: any): number {
  // your code here
  return NaN;
}

export function stringToChars(str: any): string[] {
  // your code here
  return [];
}
