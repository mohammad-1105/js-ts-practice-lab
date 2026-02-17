/**
 * Team Budget Manager
 *
 * You are building a pro-sports roster budget dashboard.
 *
 * Rules:
 *   - team format: { name: "BOS", budget: 9000 }
 *   - players format: [{ name: "Player", role: "offense", price: 1200 }, ...]
 *   - Compute:
 *     - totalSpent: sum of all player prices
 *     - remaining: budget - totalSpent
 *     - playerCount: number of players
 *     - costliestPlayer: player object with max price
 *     - cheapestPlayer: player object with min price
 *     - averagePrice: Math.round(totalSpent / playerCount)
 *     - byRole: counts per role
 *     - isOverBudget: totalSpent > budget
 *
 * Validation:
 *   - If team is not an object, return null
 *   - If team.budget is not a positive number, return null
 *   - If players is not an array or is empty, return null
 *
 * @param team
 * @param players
 * @returns {object | null}
 */

interface Team {
  name: string;
  budget: number;
}

interface Player {
  name: string;
  role: string;
  price: number;
}

interface BudgetSummary {
  teamName: string;
  totalSpent: number;
  remaining: number;
  playerCount: number;
  costliestPlayer: Player;
  cheapestPlayer: Player;
  averagePrice: number;
  byRole: { [key: string]: number };
  isOverBudget: boolean;
}

export function summarizeTeamBudget(team: Team, players: Player[]): BudgetSummary | null {
  // TODO: implement
  return null;
}
