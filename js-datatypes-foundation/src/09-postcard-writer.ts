/**
 * Postcard Writer - String Advanced
 *
 * A postcard editor needs formatting and validation helpers for messages,
 * pincodes, aligned label fields, state checks, and vowel counting.
 *
 * Methods to explore: template literals, .startsWith(), .endsWith(),
 * .padStart(), .padEnd(), .match()
 *
 * Functions:
 *
 * 1. writePostcard(sender, receiver, message)
 *    - Build postcard text using template literal:
 *      "Priy {receiver},\n\n{message}\n\nAapka/Aapki,\n{sender}"
 *    - If any input is not string or empty after trim, return "".
 *
 * 2. isValidPincode(code)
 *    - Valid Indian-style rule here: 6 digits and not starting with "0".
 *    - Use .startsWith("0"), length check, and digit regex.
 *    - If code is not string, return false.
 *
 * 3. formatPostcardField(label, value, width)
 *    - Return aligned text: label.padEnd(width) + ": " + value
 *    - Default width is 12 when not provided.
 *    - If label/value is not string, return "".
 *
 * 4. isFromState(address, stateCode)
 *    - Return whether address ends with stateCode using .endsWith().
 *    - If either input is not string, return false.
 *
 * 5. countVowels(message)
 *    - Use .match(/[aeiouAEIOU]/g) and return count.
 *    - If match returns null, return 0.
 *    - If message is not string, return 0.
 *
 * @example
 * writePostcard("Alex", "Grandma", "Hope you are well")
 * isValidPincode("400001")             // => true
 * countVowels("Namaste")               // => 3
 */

export function writePostcard(sender: string, receiver: string, message: string): string {
  // your code here
  return "";
}

export function isValidPincode(code: string): boolean {
  // your code here
  return false;
}

export function formatPostcardField(label: string, value: string, width: number = 12): string {
  // your code here
  return "";
}

export function isFromState(address: string, stateCode: string): boolean {
  // your code here
  return false;
}

export function countVowels(message: string): number {
  // your code here
  return 0;
}
