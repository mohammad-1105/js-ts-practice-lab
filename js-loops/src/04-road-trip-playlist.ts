/**
 * Road Trip Playlist Builder
 *
 * You are building a playlist generator for a long highway drive.
 * Songs are considered in order and each has a duration in seconds.
 *
 * Rules (use a `while` loop):
 * - Check each song in order.
 * - Skip invalid durations (non-number, non-integer, `<= 0`).
 * - Before adding a valid song, verify that:
 *   `currentTotal + songDuration <= maxDuration`
 * - If adding a song would exceed `maxDuration`, stop immediately.
 *
 * Validation:
 * - If `songs` is not an array, return `{ count: 0, totalDuration: 0 }`.
 * - If `maxDuration` is not a positive number, return zeroed result.
 *
 * @param songs - Song durations in seconds.
 * @param maxDuration - Maximum allowed total duration in seconds.
 * @returns Number of accepted songs and resulting total duration.
 *
 * @hint Use an index variable in a `while` loop and apply the
 * "look-before-you-add" check.
 */
export interface PlaylistSummary {
  count: number;
  totalDuration: number;
}

export function buildRoadTripPlaylist(songs: number[], maxDuration: number): PlaylistSummary {
  // your code here
  return { count: 0, totalDuration: 0 };
}
