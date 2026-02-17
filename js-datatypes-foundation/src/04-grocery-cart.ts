/**
 * Grocery Shopping Cart - Array Basics
 *
 * A grocery app needs helper functions to manage cart items.
 * Use core array methods for insert, remove, search, and merge operations.
 *
 * Methods to explore: .push(), .pop(), .unshift(), .includes(),
 * .concat(), Array.isArray()
 *
 * Functions:
 *
 * 1. addToCart(cart, item)
 *    - Add item to end using .push().
 *    - Return updated cart length.
 *    - If cart is not an array, return -1.
 *    - If item is not a non-empty string, return cart.length unchanged.
 *
 * 2. addUrgentItem(cart, item)
 *    - Add item to beginning using .unshift().
 *    - Return updated cart array.
 *    - If cart is not an array, return [].
 *    - If item is invalid, return cart unchanged.
 *
 * 3. removeLastItem(cart)
 *    - Remove and return last item using .pop().
 *    - If cart is not an array or is empty, return undefined.
 *
 * 4. isInCart(cart, item)
 *    - Return whether item exists in cart using .includes().
 *    - If cart is not an array, return false.
 *
 * 5. mergeCarts(cart1, cart2)
 *    - Merge using .concat() and return new array.
 *    - Treat invalid inputs as empty arrays.
 *
 * @example
 * addToCart(["tomato", "onion"], "chili")      // => 3
 * addUrgentItem(["milk"], "bread")              // => ["bread", "milk"]
 * mergeCarts(["apple"], ["banana", "grape"])  // => ["apple", "banana", "grape"]
 */

export function addToCart(cart: string[], item: string): number {
  // your code here
  return -1;
}

export function addUrgentItem(cart: string[], item: string): string[] {
  // your code here
  return [];
}

export function removeLastItem(cart: string[]): string | undefined {
  // your code here
  return undefined;
}

export function isInCart(cart: string[], item: string): boolean {
  // your code here
  return false;
}

export function mergeCarts(cart1: string[], cart2: string[]): string[] {
  // your code here
  return [];
}
