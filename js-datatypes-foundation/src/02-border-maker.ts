/**
 * Decorative Border Maker - String Transform
 *
 * A design tool needs string-based border transformations for festival cards.
 * Use string transform methods to generate and edit patterns.
 *
 * Methods to explore: .slice(), .split(), .join(), .replaceAll(), .repeat()
 *
 * Functions:
 *
 * 1. repeatPattern(pattern, times)
 *    - Repeat pattern exactly times times.
 *    - If pattern is not a string, or times is not a positive integer, return "".
 *    - Example: repeatPattern("*-", 4) => "*-*-*-*-"
 *
 * 2. extractBorderCenter(design, start, end)
 *    - Return design.slice(start, end).
 *    - If design is not a string, return "".
 *    - If start/end are not numbers, return "".
 *    - Example: extractBorderCenter("***LOTUS***", 3, 8) => "LOTUS"
 *
 * 3. splitAndJoinBorder(colorString, oldSep, newSep)
 *    - Split using oldSep and join using newSep.
 *    - If colorString is not a string, return "".
 *    - Example: splitAndJoinBorder("red,blue,green", ",", " | ")
 *      => "red | blue | green"
 *
 * 4. replaceBorderColor(design, oldColor, newColor)
 *    - Replace all oldColor occurrences with newColor using .replaceAll().
 *    - If any input is not a string, return "".
 *    - Example: replaceBorderColor("red-blue-red", "red", "pink") => "pink-blue-pink"
 *
 * 5. makeBorder(char, length)
 *    - Build a border by repeating char and slicing to exact length.
 *    - If char is not a string, or length is not a positive integer, return "".
 *    - Example: makeBorder("=-", 7) => "=-=-=-="
 *
 * @example
 * repeatPattern("*", 5)                 // => "*****"
 * extractBorderCenter("--HELLO--", 2, 7) // => "HELLO"
 * makeBorder("abc", 5)                  // => "abcab"
 */

export function repeatPattern(pattern: string, times: number): string {
  // your code here
  return "";
}

export function extractBorderCenter(design: string, start: number, end: number): string {
  // your code here
  return "";
}

export function splitAndJoinBorder(colorString: string, oldSep: string, newSep: string): string {
  // your code here
  return "";
}

export function replaceBorderColor(design: string, oldColor: string, newColor: string): string {
  // your code here
  return "";
}

export function makeBorder(char: string, length: number): string {
  // your code here
  return "";
}
