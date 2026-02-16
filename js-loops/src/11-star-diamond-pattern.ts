/**
 * Winter Festival Star Diamond
 *
 * Generate a centered diamond pattern using `*` characters.
 *
 * Rules (use nested `for` loops):
 * - Input `size` is the number of stars in the widest row.
 * - Total rows must be `2 * size - 1`.
 * - Top half increases from 1 star to `size` stars.
 * - Bottom half mirrors the top (excluding the middle row duplicate).
 * - Stars in a row are separated by one space.
 * - Rows should be center-aligned with leading spaces.
 * - No trailing spaces allowed.
 *
 * Validation:
 * - If `size` is not a positive integer, return `[]`.
 *
 * @param size - Diamond size.
 * @returns Array of row strings.
 *
 * @hint Build top and bottom halves separately. For each row, compute
 * leading spaces plus `Array(stars).fill("*").join(" ")`.
 */
export function generateStarDiamond(size: number): string[] {
  // your code here
  return [];
}
