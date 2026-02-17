/**
 * Restaurant Combo Platter - Mixed Methods Capstone
 *
 * This capstone combines String, Number, Array, and Object logic to
 * build combo descriptions, stats, search, and printable receipts.
 *
 * Data format: combo = {
 *   name: "Family Veg Combo",
 *   items: ["paneer tikka", "naan", "dal fry"],
 *   price: 450,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 * 1. createComboDescription(combo)
 *    - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *    - name should be uppercase; price should use 2 decimals.
 *    - If combo is invalid or required fields missing, return "".
 *    - Required: name(string), items(array), price(number), isVeg(boolean).
 *
 * 2. getComboStats(combos)
 *    - Return stats object:
 *      { totalCombos, vegCount, nonVegCount, avgPrice, cheapest, costliest, names }
 *    - Use filter/reduce/min/max/map style logic.
 *    - avgPrice must be a 2-decimal string.
 *    - If combos is not array or empty, return null.
 *
 * 3. searchComboMenu(combos, query)
 *    - Return combos where query exists in combo name or any combo item.
 *    - Search must be case-insensitive.
 *    - If combos is invalid or query not string, return [].
 *
 * 4. generateComboReceipt(customerName, combos)
 *    - Return receipt in this shape:
 *      "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *    - Line format: "- {combo name} x Rs.{price}"
 *    - customerName should be uppercase.
 *    - If customerName invalid or combos invalid/empty, return "".
 *
 * @example
 * createComboDescription({name:"Family Veg Combo",items:["dal"],price:450,isVeg:true})
 * // => "FAMILY VEG COMBO (Veg) - Items: dal - Rs.450.00"
 */

interface Combo {
  name: string;
  items: string[];
  price: number;
  isVeg: boolean;
  [key: string]: any;
}

interface ComboStats {
  totalCombos: number;
  vegCount: number;
  nonVegCount: number;
  avgPrice: string;
  cheapest: Combo | null;
  costliest: Combo | null;
  names: string[];
}

export function createComboDescription(combo: Combo): string {
  // your code here
  return "";
}

export function getComboStats(combos: Combo[]): ComboStats | null {
  // your code here
  return null;
}

export function searchComboMenu(combos: Combo[], query: string): Combo[] {
  // your code here
  return [];
}

export function generateComboReceipt(customerName: string, combos: Combo[]): string {
  // your code here
  return "";
}
