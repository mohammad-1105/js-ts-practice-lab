import { describe, expect, test } from "bun:test";
import { buildSoccerLeagueTable } from "../src/07-soccer-league-table.ts";

describe("07 - Soccer League Standings (9 pts)", () => {
  describe("Basic match processing", () => {
    test("single win match", () => {
      const result = buildSoccerLeagueTable([
        { homeTeam: "BOS", awayTeam: "NYC", result: "win", winner: "BOS" },
      ]);

      expect(result).toEqual([
        { team: "BOS", played: 1, won: 1, lost: 0, drawn: 0, noResult: 0, points: 3 },
        { team: "NYC", played: 1, won: 0, lost: 1, drawn: 0, noResult: 0, points: 0 },
      ]);
    });

    test("draw gives 1 point each", () => {
      const result = buildSoccerLeagueTable([{ homeTeam: "LAX", awayTeam: "CHI", result: "draw" }]);

      expect(result).toEqual([
        { team: "CHI", played: 1, won: 0, lost: 0, drawn: 1, noResult: 0, points: 1 },
        { team: "LAX", played: 1, won: 0, lost: 0, drawn: 1, noResult: 0, points: 1 },
      ]);
    });

    test("no_result gives 1 point each", () => {
      const result = buildSoccerLeagueTable([
        { homeTeam: "SEA", awayTeam: "DAL", result: "no_result" },
      ]);

      expect(result).toEqual([
        { team: "DAL", played: 1, won: 0, lost: 0, drawn: 0, noResult: 1, points: 1 },
        { team: "SEA", played: 1, won: 0, lost: 0, drawn: 0, noResult: 1, points: 1 },
      ]);
    });
  });

  describe("Multiple matches and sorting", () => {
    test("sorts by points descending", () => {
      const result = buildSoccerLeagueTable([
        { homeTeam: "BOS", awayTeam: "NYC", result: "win", winner: "BOS" },
        { homeTeam: "LAX", awayTeam: "BOS", result: "win", winner: "BOS" },
        { homeTeam: "NYC", awayTeam: "LAX", result: "win", winner: "NYC" },
      ]);

      expect(result[0].team).toBe("BOS");
      expect(result[0].points).toBe(6);
      expect(result[1].team).toBe("NYC");
      expect(result[1].points).toBe(3);
      expect(result[2].team).toBe("LAX");
      expect(result[2].points).toBe(0);
    });

    test("equal points sorted alphabetically", () => {
      const result = buildSoccerLeagueTable([
        { homeTeam: "NYC", awayTeam: "BOS", result: "draw" },
        { homeTeam: "LAX", awayTeam: "CHI", result: "draw" },
      ]);

      expect(result.map((team) => team.team)).toEqual(["BOS", "CHI", "LAX", "NYC"]);
    });

    test("full mini-season scenario", () => {
      const result = buildSoccerLeagueTable([
        { homeTeam: "BOS", awayTeam: "NYC", result: "win", winner: "BOS" },
        { homeTeam: "LAX", awayTeam: "CHI", result: "win", winner: "LAX" },
        { homeTeam: "BOS", awayTeam: "LAX", result: "draw" },
        { homeTeam: "NYC", awayTeam: "CHI", result: "no_result" },
        { homeTeam: "CHI", awayTeam: "BOS", result: "win", winner: "BOS" },
      ]);

      expect(result[0].team).toBe("BOS");
      expect(result[0].points).toBe(7);
      expect(result[1].team).toBe("LAX");
      expect(result[1].points).toBe(4);
      expect(result[2].team).toBe("CHI");
      expect(result[3].team).toBe("NYC");
    });
  });

  describe("Correct stats tracking", () => {
    test("tracks played, won, lost, drawn, noResult", () => {
      const result = buildSoccerLeagueTable([
        { homeTeam: "BOS", awayTeam: "NYC", result: "win", winner: "BOS" },
        { homeTeam: "BOS", awayTeam: "NYC", result: "draw" },
        { homeTeam: "BOS", awayTeam: "NYC", result: "no_result" },
      ]);

      const bos = result.find((team) => team.team === "BOS");
      expect(bos).toEqual({
        team: "BOS",
        played: 3,
        won: 1,
        lost: 0,
        drawn: 1,
        noResult: 1,
        points: 5,
      });

      const nyc = result.find((team) => team.team === "NYC");
      expect(nyc).toEqual({
        team: "NYC",
        played: 3,
        won: 0,
        lost: 1,
        drawn: 1,
        noResult: 1,
        points: 2,
      });
    });
  });

  describe("Validation", () => {
    test("empty array returns []", () => {
      expect(buildSoccerLeagueTable([])).toEqual([]);
    });

    test("non-array input returns []", () => {
      expect(buildSoccerLeagueTable("matches" as any)).toEqual([]);
    });

    test("null input returns []", () => {
      expect(buildSoccerLeagueTable(null as any)).toEqual([]);
    });
  });
});
