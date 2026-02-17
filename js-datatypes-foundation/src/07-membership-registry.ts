/**
 * Membership Registry - Object Basics
 *
 * A club stores member records in an object map where keys are member IDs.
 * You need to list keys/values/entries, check membership, and delete records.
 *
 * Data format: registry = {
 *   "M001": { name: "Rahul", plan: "Gold", active: true },
 *   "M002": { name: "Priya", plan: "Silver", active: true },
 *   ...
 * }
 *
 * Methods to explore: Object.keys(), Object.values(), Object.entries(),
 * .hasOwnProperty(), delete operator
 *
 * Functions:
 *
 * 1. getMemberIds(registry)
 *    - Return all member IDs using Object.keys().
 *    - If registry is not a valid object (or is null/array), return [].
 *
 * 2. getAllMembers(registry)
 *    - Return all member objects using Object.values().
 *    - If registry is not a valid object, return [].
 *
 * 3. getMembershipEntries(registry)
 *    - Return [id, member] pairs using Object.entries().
 *    - If registry is not a valid object, return [].
 *
 * 4. hasMemberId(registry, memberId)
 *    - Check key existence using hasOwnProperty().
 *    - If registry is invalid or memberId is not a string, return false.
 *
 * 5. removeMemberId(registry, memberId)
 *    - Delete member only when key exists.
 *    - Return true if deleted, false otherwise.
 *    - If registry is invalid or memberId is not a string, return false.
 *
 * Hint: valid registry check should ensure object, not null, and not array.
 *
 * @example
 * getMemberIds({"M001":{...},"M002":{...}})      // => ["M001", "M002"]
 * hasMemberId({"M001":{...}}, "M001")            // => true
 * removeMemberId(registry, "M001")                 // => true
 */

interface Member {
  name: string;
  plan: string;
  active: boolean;
}

interface Registry {
  [key: string]: Member;
}

function isValidRegistry(registry: any): boolean {
  // your code here
  return false;
}

export function getMemberIds(registry: Registry): string[] {
  // your code here
  return [];
}

export function getAllMembers(registry: Registry): Member[] {
  // your code here
  return [];
}

export function getMembershipEntries(registry: Registry): [string, Member][] {
  // your code here
  return [];
}

export function hasMemberId(registry: Registry, memberId: string): boolean {
  // your code here
  return false;
}

export function removeMemberId(registry: Registry, memberId: string): boolean {
  // your code here
  return false;
}
