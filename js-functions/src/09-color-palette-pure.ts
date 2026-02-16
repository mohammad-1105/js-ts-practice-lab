/**
 * Design Studio Color Palette Utilities (Pure Functions)
 *
 * Implement pure RGB operations without mutating input objects or arrays.
 *
 * Color shape:
 * - `{ name: string, r: number, g: number, b: number }`
 * - Channels should be in range `0..255`
 *
 * Functions:
 *
 * 1. `mixColors(color1, color2)`
 *    - Average each RGB channel, rounded to integer
 *    - New name: `${color1.name}-${color2.name}`
 *    - Invalid color input => `null`
 *
 * 2. `adjustBrightness(color, factor)`
 *    - Multiply channels by factor
 *    - Clamp to `0..255`, round with `Math.round`
 *    - Keep original name
 *    - Invalid input => `null`
 *
 * 3. `addToPalette(palette, color)`
 *    - Return NEW array with color appended
 *    - If palette invalid, return `[color]` when color is valid
 *    - If color invalid, return copy of palette
 *
 * 4. `removeFromPalette(palette, colorName)`
 *    - Return NEW array without matching color name
 *    - Invalid palette => `[]`
 *
 * 5. `mergePalettes(palette1, palette2)`
 *    - Return NEW merged array
 *    - Keep first occurrence by `name`
 *    - Treat invalid palette inputs as empty arrays
 *
 * @hint Use spread syntax for immutable object and array updates.
 */
export interface RGBColor {
  name: string;
  r: number;
  g: number;
  b: number;
}

export function mixColors(color1: RGBColor | null, color2: RGBColor | null): RGBColor | null {
  // your code here
  return null;
}

export function adjustBrightness(color: RGBColor | null, factor: number): RGBColor | null {
  // your code here
  return null;
}

export function addToPalette(palette: RGBColor[] | null, color: RGBColor | null): RGBColor[] {
  // your code here
  return [];
}

export function removeFromPalette(palette: RGBColor[] | null, colorName: string): RGBColor[] {
  // your code here
  return [];
}

export function mergePalettes(
  palette1: RGBColor[] | null,
  palette2: RGBColor[] | null,
): RGBColor[] {
  // your code here
  return [];
}
