/**
 * Coffee Roastery Pipeline (Composition)
 *
 * Build composition utilities for a coffee processing pipeline.
 *
 * Functions:
 *
 * 1. `pipe(...fns)`
 *    - Return function that applies left-to-right
 *    - `pipe(f, g, h)(x) => h(g(f(x)))`
 *    - No functions => identity function
 *
 * 2. `compose(...fns)`
 *    - Return function that applies right-to-left
 *    - `compose(f, g, h)(x) => f(g(h(x)))`
 *    - No functions => identity function
 *
 * Utility transforms:
 *
 * 3. `grind(batch)`
 *    - Return `{ ...batch, form: "ground" }`
 *
 * 4. `roast(batch)`
 *    - Return `{ ...batch, roasted: true, aroma: "bold" }`
 *
 * 5. `blend(batch)`
 *    - Return `{ ...batch, blended: true }`
 *
 * 6. `pack(batch)`
 *    - Return `{ ...batch, packed: true, label: `${batch.name} Blend` }`
 *
 * 7. `createRecipe(steps)`
 *    - `steps` is array of step names (`grind`, `roast`, `blend`, `pack`)
 *    - Map names to functions and return piped function in same order
 *    - Unknown steps are skipped
 *    - Invalid/empty steps => identity function
 *
 * @hint `pipe` is usually built with `reduce`; `compose` with `reduceRight`.
 */
export interface CoffeeBatch {
  name: string;
  form?: string;
  roasted?: boolean;
  aroma?: string;
  blended?: boolean;
  packed?: boolean;
  label?: string;
  [key: string]: unknown;
}

export function pipe(
  ...fns: Array<(value: CoffeeBatch) => CoffeeBatch>
): (value: CoffeeBatch) => CoffeeBatch {
  // your code here
  return (value: CoffeeBatch) => value;
}

export function compose(
  ...fns: Array<(value: CoffeeBatch) => CoffeeBatch>
): (value: CoffeeBatch) => CoffeeBatch {
  // your code here
  return (value: CoffeeBatch) => value;
}

export function grind(batch: CoffeeBatch): CoffeeBatch {
  // your code here
  return batch;
}

export function roast(batch: CoffeeBatch): CoffeeBatch {
  // your code here
  return batch;
}

export function blend(batch: CoffeeBatch): CoffeeBatch {
  // your code here
  return batch;
}

export function pack(batch: CoffeeBatch): CoffeeBatch {
  // your code here
  return batch;
}

export function createRecipe(steps: string[]): (value: CoffeeBatch) => CoffeeBatch {
  // your code here
  return (value: CoffeeBatch) => value;
}
