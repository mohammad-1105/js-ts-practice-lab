/**
 * Coffee Shop Menu Formatter
 *
 * You are building a cafe POS system and need to render a clean menu line.
 *
 * Rules:
 *   - Input is an array of objects: [{ name: "latte", price: 5 }, ...]
 *   - Convert each valid item name to uppercase
 *   - Format each item as: "NAME - $PRICE"
 *   - Join formatted items using " | "
 *   - Skip items where price is 0 or negative
 *   - Skip items where name is not a non-empty string
 *
 * Validation:
 *   - If items is not an array or is empty, return ""
 *
 * @param items
 * @returns {string}
 */

interface MenuItem {
  name: string;
  price: number;
}

export function formatCoffeeMenu(items: MenuItem[]): string {
  // your code here
  return "";
}
