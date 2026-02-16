import { describe, expect, test } from "bun:test";
import {
  countVotesInRegions,
  createElection,
  createVoterValidator,
  tallyPure,
} from "../src/12-city-election-capstone.ts";

describe("12 - City Election Capstone (10 pts)", () => {
  const candidates = [
    { id: "C1", name: "Alex Rivera", party: "Forward" },
    { id: "C2", name: "Jordan Lee", party: "Unity" },
  ];

  test("registerVoter accepts valid adults and blocks duplicates/underage", () => {
    const election = createElection(candidates);

    expect(election.registerVoter({ id: "V1", name: "Taylor", age: 23 })).toBe(true);
    expect(election.registerVoter({ id: "V1", name: "Taylor", age: 23 })).toBe(false);
    expect(election.registerVoter({ id: "V2", name: "Sam", age: 16 })).toBe(false);
  });

  test("castVote calls success callback on valid vote", () => {
    const election = createElection(candidates);
    election.registerVoter({ id: "V1", name: "Taylor", age: 23 });

    const result = election.castVote(
      "V1",
      "C1",
      ({ voterId, candidateId }) => `Vote accepted: ${voterId} -> ${candidateId}`,
      (reason) => `Error: ${reason}`,
    );

    expect(result).toBe("Vote accepted: V1 -> C1");
  });

  test("castVote calls error callback for invalid vote attempts", () => {
    const election = createElection(candidates);
    election.registerVoter({ id: "V1", name: "Taylor", age: 23 });

    const unknownCandidate = election.castVote(
      "V1",
      "CX",
      () => "ok",
      (reason) => `Error: ${reason}`,
    );

    expect(unknownCandidate).toBe("Error: candidate_not_found");

    election.castVote(
      "V1",
      "C1",
      () => "ok",
      (reason) => reason,
    );
    const duplicateVote = election.castVote(
      "V1",
      "C2",
      () => "ok",
      (reason) => `Error: ${reason}`,
    );

    expect(duplicateVote).toBe("Error: already_voted");
  });

  test("getResults defaults to vote-desc sorting and getWinner returns top candidate", () => {
    const election = createElection(candidates);
    election.registerVoter({ id: "V1", name: "Taylor", age: 23 });
    election.registerVoter({ id: "V2", name: "Morgan", age: 31 });

    election.castVote(
      "V1",
      "C1",
      () => true,
      () => false,
    );
    election.castVote(
      "V2",
      "C2",
      () => true,
      () => false,
    );

    const results = election.getResults((a, b) => a.id.localeCompare(b.id));
    expect(results).toEqual([
      { id: "C1", name: "Alex Rivera", party: "Forward", votes: 1 },
      { id: "C2", name: "Jordan Lee", party: "Unity", votes: 1 },
    ]);

    expect(election.getWinner()).toEqual({
      id: "C1",
      name: "Alex Rivera",
      party: "Forward",
      votes: 1,
    });
  });

  test("createVoterValidator returns reusable validation function", () => {
    const validate = createVoterValidator({
      minAge: 18,
      requiredFields: ["id", "name", "age"],
    });

    expect(validate({ id: "V1", name: "Taylor", age: 21 })).toEqual({ valid: true, reason: "ok" });
    expect(validate({ id: "V2", name: "Sam", age: 16 })).toEqual({
      valid: false,
      reason: "age_below_minimum",
    });
    expect(validate({ id: "V3", age: 25 })).toEqual({ valid: false, reason: "missing_field:name" });
  });

  test("countVotesInRegions recursively sums nested vote totals", () => {
    expect(
      countVotesInRegions({
        name: "State",
        votes: 100,
        subRegions: [
          { name: "North", votes: 50 },
          {
            name: "South",
            votes: 40,
            subRegions: [
              { name: "South-East", votes: 30 },
              { name: "South-West", votes: 20 },
            ],
          },
        ],
      }),
    ).toBe(240);

    expect(countVotesInRegions(null)).toBe(0);
  });

  test("tallyPure increments without mutating the original object", () => {
    const tally = { C1: 2, C2: 1 };
    const updated = tallyPure(tally, "C1");

    expect(updated).toEqual({ C1: 3, C2: 1 });
    expect(updated).not.toBe(tally);
    expect(tally).toEqual({ C1: 2, C2: 1 });

    expect(tallyPure(tally, "C3")).toEqual({ C1: 2, C2: 1, C3: 1 });
  });
});
