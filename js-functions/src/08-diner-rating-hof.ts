/**
 * Neighborhood Diner Rating System (Higher-Order Functions)
 *
 * Build reusable higher-order function tools for diner listings.
 *
 * Functions:
 *
 * 1. `createFilter(field, operator, value)`
 *    - Return a predicate function for objects
 *    - Operators: `>`, `<`, `>=`, `<=`, `===`
 *    - Unknown operator returns function that always returns `false`
 *
 * 2. `createSorter(field, order = "asc")`
 *    - Return comparator for `Array.sort()`
 *    - Supports numbers and strings
 *    - `order` is `"asc"` or `"desc"`
 *
 * 3. `createMapper(fields)`
 *    - Return function that picks only listed fields from each object
 *
 * 4. `applyOperations(data, ...operations)`
 *    - Apply operation functions left-to-right
 *    - Each operation takes array and returns array
 *    - Invalid `data` => `[]`
 *
 * @hint HOFs either accept functions, return functions, or both.
 */
export type ComparisonOperator = ">" | "<" | ">=" | "<=" | "===";

export function createFilter<T extends Record<string, unknown>>(
  field: string,
  operator: ComparisonOperator | string,
  value: unknown,
): (item: T) => boolean {
  // your code here
  return () => false;
}

export function createSorter<T extends Record<string, unknown>>(
  field: string,
  order: "asc" | "desc" = "asc",
): (a: T, b: T) => number {
  // your code here
  return () => 0;
}

export function createMapper<T extends Record<string, unknown>>(
  fields: string[],
): (item: T) => Partial<T> {
  // your code here
  return () => ({});
}

export function applyOperations<T>(data: T[], ...operations: Array<(items: T[]) => T[]>): T[] {
  // your code here
  return [];
}
