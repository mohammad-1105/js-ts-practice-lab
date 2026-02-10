/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  if (typeof size !== "string" || typeof type !== "string") {
    return -1;
  }

  const normalizedSize = size.toLowerCase();
  const normalizedType = type.toLowerCase();

  const SIZE_PRICES = {
    small: 3.0,
    medium: 4.0,
    large: 5.0,
  };

  const TYPE_PRICES = {
    regular: 0.0,
    latte: 1.0,
    cappuccino: 1.5,
    mocha: 2.0,
  };

  if (!(normalizedSize in SIZE_PRICES)) {
    return -1;
  }

  if (!(normalizedType in TYPE_PRICES)) {
    return -1;
  }

  let totalPrice = SIZE_PRICES[normalizedSize] + TYPE_PRICES[normalizedType];

  if (extras?.whippedCream === true) {
    totalPrice += 0.5;
  }

  if (extras?.extraShot === true) {
    totalPrice += 0.75;
  }

  return Number(totalPrice.toFixed(2));
}
