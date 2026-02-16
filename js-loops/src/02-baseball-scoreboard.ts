/**
 * Weekend Baseball Scoreboard
 *
 * You are tracking one batting side in a neighborhood baseball inning.
 * Each pitch outcome is provided as a number in order.
 *
 * Pitch outcomes:
 * - `-1` = strikeout
 * - `0` = no run scored
 * - `1..4` = runs scored on that pitch
 *
 * Rules:
 * - Loop through outcomes with a `for` loop.
 * - Track: `totalRuns`, `totalPitches`, `strikeouts`, `doubles`, `homeRuns`.
 * - A double is any pitch with value `2`.
 * - A home run is any pitch with value `4`.
 * - Stop immediately when strikeouts reach `3` (inning over).
 *
 * Validation:
 * - If input is not an array or is empty, return all counters as `0`.
 *
 * @param pitches - Ordered pitch outcomes.
 * @returns Aggregated inning statistics.
 *
 * @hint Use `break` once strikeouts hit `3`, and keep separate counters for
 * each statistic.
 */
export interface BaseballScore {
  totalRuns: number;
  totalPitches: number;
  strikeouts: number;
  doubles: number;
  homeRuns: number;
}

export function calculateBaseballScoreboard(pitches: number[]): BaseballScore {
  // your code here
  return {
    totalRuns: 0,
    totalPitches: 0,
    strikeouts: 0,
    doubles: 0,
    homeRuns: 0,
  };
}
