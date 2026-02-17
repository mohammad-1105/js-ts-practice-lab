/**
 * Coffee Shop Order System - String Basics
 *
 * The cafe is busy and incoming orders are messy. You need to process
 * order text safely using basic string methods.
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 * .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 * 1. getCoffeeOrderLength(order)
 *    - Trim the order first, then return its length.
 *    - If order is not a string, return -1.
 *    - Example: getCoffeeOrderLength("  cappuccino  ") => 10
 *
 * 2. shoutCoffeeOrder(order)
 *    - Convert a valid order to uppercase after trimming.
 *    - If order is not a string or is empty after trim, return "".
 *    - Example: shoutCoffeeOrder(" iced mocha ") => "ICED MOCHA"
 *
 * 3. whisperCoffeeOrder(order)
 *    - Convert a valid order to lowercase after trimming.
 *    - If order is not a string or is empty after trim, return "".
 *    - Example: whisperCoffeeOrder("FLAT WHITE") => "flat white"
 *
 * 4. hasSpecialIngredient(order, ingredient)
 *    - Check if order contains ingredient (case-insensitive).
 *    - Convert both to lowercase before checking .includes().
 *    - If either input is not a string, return false.
 *    - Example: hasSpecialIngredient("Hazelnut Latte", "hazelnut") => true
 *
 * 5. getFirstAndLastChar(order)
 *    - Trim first, then return first and last character.
 *    - Use .charAt(0) for first and .at(-1) for last.
 *    - Return object shape: { first, last }.
 *    - If order is not a string or is empty after trim, return null.
 *    - Example: getFirstAndLastChar("espresso") => { first: "e", last: "o" }
 *
 * @example
 * getCoffeeOrderLength("  latte  ")           // => 5
 * shoutCoffeeOrder("cold brew")               // => "COLD BREW"
 * hasSpecialIngredient("Vanilla Latte", "VANILLA") // => true
 */

export function getCoffeeOrderLength(order: string): number {
  // your code here
  return -1;
}

export function shoutCoffeeOrder(order: string): string {
  // your code here
  return "";
}

export function whisperCoffeeOrder(order: string): string {
  // your code here
  return "";
}

export function hasSpecialIngredient(order: string, ingredient: string): boolean {
  // your code here
  return false;
}

export function getFirstAndLastChar(order: string): { first: string; last: string } | null {
  // your code here
  return null;
}
