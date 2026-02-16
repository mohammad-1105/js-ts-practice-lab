import { describe, expect, test } from "bun:test";
import { buildRoadTripPlaylist } from "../src/04-road-trip-playlist.ts";

describe("04 - Road Trip Playlist Builder (8 pts)", () => {
  describe("Basic playlist building", () => {
    test("All songs fit within limit", () => {
      expect(buildRoadTripPlaylist([100, 200, 150], 500)).toEqual({ count: 3, totalDuration: 450 });
    });

    test("Stops when next song would exceed limit", () => {
      expect(buildRoadTripPlaylist([240, 180, 300, 200], 600)).toEqual({
        count: 2,
        totalDuration: 420,
      });
    });

    test("First song itself exceeds limit", () => {
      expect(buildRoadTripPlaylist([500, 200, 100], 300)).toEqual({ count: 0, totalDuration: 0 });
    });

    test("Exactly fills the limit", () => {
      expect(buildRoadTripPlaylist([200, 300], 500)).toEqual({ count: 2, totalDuration: 500 });
    });

    test("Single song that fits", () => {
      expect(buildRoadTripPlaylist([100], 200)).toEqual({ count: 1, totalDuration: 100 });
    });
  });

  describe("Skipping invalid durations", () => {
    test("Skips negative duration songs", () => {
      expect(buildRoadTripPlaylist([100, -50, 200], 400)).toEqual({ count: 2, totalDuration: 300 });
    });

    test("Skips zero duration songs", () => {
      expect(buildRoadTripPlaylist([100, 0, 200], 400)).toEqual({ count: 2, totalDuration: 300 });
    });

    test("Skips string values in songs array", () => {
      expect(buildRoadTripPlaylist([100, "song", 200] as any, 400)).toEqual({
        count: 2,
        totalDuration: 300,
      });
    });

    test("All invalid songs", () => {
      expect(buildRoadTripPlaylist([-10, 0, "abc"] as any, 500)).toEqual({
        count: 0,
        totalDuration: 0,
      });
    });

    test("Skips invalid, then stops at limit", () => {
      expect(buildRoadTripPlaylist([100, -50, 200, 150], 350)).toEqual({
        count: 2,
        totalDuration: 300,
      });
    });
  });

  describe("Validation", () => {
    test("Non-array songs returns zeroed object", () => {
      expect(buildRoadTripPlaylist("songs" as any, 300)).toEqual({ count: 0, totalDuration: 0 });
    });

    test("null songs returns zeroed object", () => {
      expect(buildRoadTripPlaylist(null as any, 300)).toEqual({ count: 0, totalDuration: 0 });
    });

    test("Negative maxDuration returns zeroed object", () => {
      expect(buildRoadTripPlaylist([100, 200], -100)).toEqual({ count: 0, totalDuration: 0 });
    });

    test("Zero maxDuration returns zeroed object", () => {
      expect(buildRoadTripPlaylist([100, 200], 0)).toEqual({ count: 0, totalDuration: 0 });
    });

    test("Non-number maxDuration returns zeroed object", () => {
      expect(buildRoadTripPlaylist([100, 200], "long" as any)).toEqual({
        count: 0,
        totalDuration: 0,
      });
    });
  });
});
