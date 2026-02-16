/**
 * Soccer League Standings
 *
 * Build a league table from match results in season order.
 *
 * Match object:
 * - `{ homeTeam, awayTeam, result, winner? }`
 *
 * Supported `result` values:
 * - `"win"`: winner gets 3 points, loser gets 0
 * - `"draw"`: each team gets 1 point
 * - `"no_result"`: each team gets 1 point
 *
 * Output row fields:
 * - `team`, `played`, `won`, `lost`, `drawn`, `noResult`, `points`
 *
 * Rules:
 * - Use a `for` loop and an object accumulator.
 * - Initialize teams lazily as they appear.
 * - Sort final table by:
 *   1. points descending
 *   2. team name ascending (alphabetical)
 *
 * Validation:
 * - If input is not an array or empty, return `[]`.
 *
 * @param matches - Match results for the season.
 * @returns Sorted league table.
 *
 * @hint Store team stats in a dictionary keyed by team name, then
 * `Object.values()` + `sort()` at the end.
 */
export type LeagueResult = "win" | "draw" | "no_result";

export interface LeagueMatch {
  homeTeam: string;
  awayTeam: string;
  result: LeagueResult;
  winner?: string;
}

export interface TeamStanding {
  team: string;
  played: number;
  won: number;
  lost: number;
  drawn: number;
  noResult: number;
  points: number;
}

export function buildSoccerLeagueTable(matches: LeagueMatch[]): TeamStanding[] {
  // your code here
  return [];
}
