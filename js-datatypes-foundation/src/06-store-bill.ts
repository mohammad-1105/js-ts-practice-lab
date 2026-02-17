/**
 * Store Billing System - Array Transform
 *
 * A local store wants digital billing helpers for name lists,
 * affordability filters, totals, sorting, and printable invoice lines.
 *
 * Data format: items = [
 *   { name: "Flour", price: 40, qty: 2 },
 *   { name: "Lentils", price: 80, qty: 1 },
 *   ...
 * ]
 *
 * Methods to explore: .map(), .filter(), .reduce(), .sort(), .join()
 *
 * Functions:
 *
 * 1. getItemNames(items)
 *    - Return an array of item names using .map().
 *    - If items is not an array, return [].
 *
 * 2. getAffordableItems(items, maxPrice)
 *    - Return items where item.price <= maxPrice using .filter().
 *    - If items is not an array or maxPrice is not a number, return [].
 *
 * 3. calculateTotal(items)
 *    - Return total bill using .reduce() over (price * qty).
 *    - If items is not an array or empty, return 0.
 *
 * 4. sortByPrice(items, ascending)
 *    - Return a NEW sorted array (do not mutate original).
 *    - If ascending is true: low to high; else high to low.
 *    - If items is not an array, return [].
 *
 * 5. formatBill(items)
 *    - Convert each item to: "name x qty = Rs.total".
 *    - Join lines with "\n".
 *    - If items is not an array or empty, return "".
 *
 * @example
 * getItemNames([{name:"Flour",price:40,qty:2}])       // => ["Flour"]
 * calculateTotal([{price:40,qty:2},{price:80,qty:1}])  // => 160
 * formatBill([{name:"Flour",price:40,qty:2}])         // => "Flour x 2 = Rs.80"
 */

interface Item {
  name: string;
  price: number;
  qty: number;
}

export function getItemNames(items: Item[]): string[] {
  // your code here
  return [];
}

export function getAffordableItems(items: Item[], maxPrice: number): Item[] {
  // your code here
  return [];
}

export function calculateTotal(items: Item[]): number {
  // your code here
  return 0;
}

export function sortByPrice(items: Item[], ascending: boolean): Item[] {
  // your code here
  return [];
}

export function formatBill(items: Item[]): string {
  // your code here
  return "";
}
