/**
 * Restaurant Menu Builder - Object Transform
 *
 * You're building menu management helpers for a restaurant system.
 * You need object merge, freeze, transform, and override operations.
 *
 * Methods to explore: Object.assign(), Object.freeze(), spread operator,
 * Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 * 1. createMenuItem(baseItem, customizations)
 *    - Return NEW merged item using Object.assign({}, baseItem, customizations).
 *    - Do not mutate baseItem.
 *    - If baseItem is not a valid object, return {}.
 *    - If customizations is invalid, return shallow copy of baseItem.
 *
 * 2. freezeMenu(menu)
 *    - Freeze menu with Object.freeze() and return it.
 *    - If menu is not a valid object, return {}.
 *
 * 3. updatePrices(menu, increase)
 *    - Add increase to each price and return NEW object.
 *    - Use Object.entries() + Object.fromEntries().
 *    - Do not mutate original menu.
 *    - If menu is invalid or increase is not number, return {}.
 *
 * 4. mergeDailySpecials(regularMenu, specialsMenu)
 *    - Merge with spread: { ...regularMenu, ...specialsMenu }.
 *    - specialsMenu values override on same keys.
 *    - Treat invalid inputs as {}.
 *
 * @example
 * createMenuItem({name:"Pasta",price:300}, {price:350}) // => {name:"Pasta", price:350}
 * updatePrices({pizza:450,pasta:300}, 50)                // => {pizza:500,pasta:350}
 */

interface MenuItem {
  name?: string;
  price?: number;
  [key: string]: any;
}

interface Menu {
  [key: string]: number;
}

function isPlainObject(value: any): boolean {
  // your code here
  return false;
}

export function createMenuItem(baseItem: MenuItem, customizations: MenuItem): MenuItem {
  // your code here
  return {};
}

export function freezeMenu(menu: Menu): Menu {
  // your code here
  return {};
}

export function updatePrices(menu: Menu, increase: number): Menu {
  // your code here
  return {};
}

export function mergeDailySpecials(regularMenu: Menu, specialsMenu: Menu): Menu {
  // your code here
  return {};
}
