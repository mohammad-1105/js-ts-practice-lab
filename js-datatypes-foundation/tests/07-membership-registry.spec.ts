import { describe, expect, test } from "bun:test";
import {
  getAllMembers,
  getMemberIds,
  getMembershipEntries,
  hasMemberId,
  removeMemberId,
} from "../src/07-membership-registry.ts";

describe("07 - Membership Registry: Object Basics (9 pts)", () => {
  const registry = {
    M001: { name: "Rahul", plan: "Gold", active: true },
    M002: { name: "Priya", plan: "Silver", active: true },
    M003: { name: "Amit", plan: "Basic", active: false },
  };

  describe("getMemberIds", () => {
    test("returns all member IDs", () => {
      expect(getMemberIds(registry)).toEqual(["M001", "M002", "M003"]);
    });

    test("returns empty array for empty object", () => {
      expect(getMemberIds({})).toEqual([]);
    });

    test("returns [] for null", () => {
      expect(getMemberIds(null as any)).toEqual([]);
    });

    test("returns [] for non-object", () => {
      expect(getMemberIds("not object")).toEqual([]);
      expect(getMemberIds(42)).toEqual([]);
    });

    test("returns [] for array", () => {
      expect(getMemberIds([1, 2, 3])).toEqual([]);
    });
  });

  describe("getAllMembers", () => {
    test("returns all member objects", () => {
      const members = getAllMembers(registry);
      expect(members).toHaveLength(3);
      expect(members[0].name).toBe("Rahul");
    });

    test("returns [] for empty object", () => {
      expect(getAllMembers({})).toEqual([]);
    });

    test("returns [] for null", () => {
      expect(getAllMembers(null as any)).toEqual([]);
    });

    test("returns [] for non-object", () => {
      expect(getAllMembers(123)).toEqual([]);
    });
  });

  describe("getMembershipEntries", () => {
    test("returns [key, value] pairs", () => {
      const entries = getMembershipEntries(registry);
      expect(entries).toHaveLength(3);
      expect(entries[0]).toEqual(["M001", { name: "Rahul", plan: "Gold", active: true }]);
    });

    test("returns [] for empty object", () => {
      expect(getMembershipEntries({})).toEqual([]);
    });

    test("returns [] for null", () => {
      expect(getMembershipEntries(null as any)).toEqual([]);
    });

    test("returns [] for non-object", () => {
      expect(getMembershipEntries("string")).toEqual([]);
    });
  });

  describe("hasMemberId", () => {
    test("returns true when member exists", () => {
      expect(hasMemberId(registry, "M001")).toBe(true);
    });

    test("returns false when member does not exist", () => {
      expect(hasMemberId(registry, "M999")).toBe(false);
    });

    test("returns false for non-object registry", () => {
      expect(hasMemberId("not object", "M001")).toBe(false);
      expect(hasMemberId(null, "M001")).toBe(false);
    });

    test("returns false for non-string memberId", () => {
      expect(hasMemberId(registry, 123)).toBe(false);
      expect(hasMemberId(registry, null)).toBe(false);
    });
  });

  describe("removeMemberId", () => {
    test("removes existing member and returns true", () => {
      const testRegistry = {
        M001: { name: "Rahul" },
        M002: { name: "Priya" },
      };
      expect(removeMemberId(testRegistry, "M001")).toBe(true);
      expect(testRegistry).not.toHaveProperty("M001");
    });

    test("returns false for non-existent member", () => {
      const testRegistry = { M001: { name: "Rahul" } };
      expect(removeMemberId(testRegistry, "M999")).toBe(false);
    });

    test("returns false for non-object registry", () => {
      expect(removeMemberId("not object", "M001")).toBe(false);
      expect(removeMemberId(null, "M001")).toBe(false);
    });

    test("returns false for non-string memberId", () => {
      expect(removeMemberId(registry, 123)).toBe(false);
    });

    test("registry has fewer keys after removal", () => {
      const testRegistry = { A: 1, B: 2, C: 3 };
      removeMemberId(testRegistry, "B");
      expect(Object.keys(testRegistry)).toHaveLength(2);
    });
  });
});
