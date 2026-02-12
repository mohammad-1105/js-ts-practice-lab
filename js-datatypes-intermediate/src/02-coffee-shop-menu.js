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
 * @param {Array<{name: string, price: number}>} items
 * @returns {string}
 */
export function formatCoffeeMenu(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return items
    .filter(
      (item) =>
        item &&
        item.name.trim() !== "" &&
        Number.isFinite(item.price) &&
        item.price > 0,
    )
    .map((item) => `${item.name.toUpperCase()} - $${item.price}`)
    .join(" | ");
}
