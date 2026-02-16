/**
 * City Election Capstone
 *
 * Final challenge combining closures, callbacks, higher-order functions,
 * recursion, factories, and pure functions.
 *
 * Functions:
 *
 * 1. `createElection(candidates)`
 *    - Keep votes and voter state private
 *    - Return methods:
 *      - `registerVoter(voter)`
 *      - `castVote(voterId, candidateId, onSuccess, onError)`
 *      - `getResults(sortFn?)`
 *      - `getWinner()`
 *
 * 2. `createVoterValidator(rules)`
 *    - Return validator function producing `{ valid, reason }`
 *
 * 3. `countVotesInRegions(regionTree)`
 *    - Recursively sum votes in nested region tree
 *
 * 4. `tallyPure(currentTally, candidateId)`
 *    - Return NEW tally object with candidate incremented
 *    - Do not mutate input tally
 *
 * @hint Keep election state private inside closures and make `tallyPure`
 * fully immutable.
 */
export interface Candidate {
  id: string;
  name: string;
  party: string;
}

export interface Voter {
  id: string;
  name: string;
  age: number;
  [key: string]: unknown;
}

export interface ElectionResultRow {
  id: string;
  name: string;
  party: string;
  votes: number;
}

export interface ElectionSystem {
  registerVoter: (voter: Voter) => boolean;
  castVote: (
    voterId: string,
    candidateId: string,
    onSuccess: (payload: { voterId: string; candidateId: string }) => unknown,
    onError: (reason: string) => unknown,
  ) => unknown;
  getResults: (
    sortFn?: (a: ElectionResultRow, b: ElectionResultRow) => number,
  ) => ElectionResultRow[];
  getWinner: () => ElectionResultRow | null;
}

export interface VoterValidationRules {
  minAge: number;
  requiredFields: string[];
}

export interface VoterValidationResult {
  valid: boolean;
  reason: string;
}

export interface RegionTree {
  name: string;
  votes: number;
  subRegions?: RegionTree[];
}

export function createElection(candidates: Candidate[]): ElectionSystem {
  // your code here
  return {
    registerVoter: () => false,
    castVote: (_voterId, _candidateId, _onSuccess, onError) => onError("not implemented"),
    getResults: () => [],
    getWinner: () => null,
  };
}

export function createVoterValidator(
  rules: VoterValidationRules,
): (voter: Record<string, unknown>) => VoterValidationResult {
  // your code here
  return (_voter: Record<string, unknown>) => ({
    valid: false,
    reason: `validator not implemented (minAge: ${rules.minAge})`,
  });
}

export function countVotesInRegions(regionTree: RegionTree | null): number {
  // your code here
  return 0;
}

export function tallyPure(
  currentTally: Record<string, number>,
  candidateId: string,
): Record<string, number> {
  // your code here
  return { ...currentTally };
}
