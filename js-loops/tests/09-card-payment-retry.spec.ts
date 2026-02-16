import { describe, expect, test } from "bun:test";
import { processCardPaymentRetry } from "../src/09-card-payment-retry.ts";

describe("09 - Card Payment Retry Engine (8 pts)", () => {
  describe("Successful payments", () => {
    test("success on first attempt", () => {
      expect(processCardPaymentRetry(["success"])).toEqual({
        attempts: 1,
        success: true,
        totalWaitTime: 0,
      });
    });

    test("fail once then succeed", () => {
      expect(processCardPaymentRetry(["fail", "success"])).toEqual({
        attempts: 2,
        success: true,
        totalWaitTime: 1,
      });
    });

    test("fail twice then succeed", () => {
      expect(processCardPaymentRetry(["fail", "fail", "success"])).toEqual({
        attempts: 3,
        success: true,
        totalWaitTime: 3,
      });
    });

    test("fail three times then succeed", () => {
      expect(processCardPaymentRetry(["fail", "fail", "fail", "success"])).toEqual({
        attempts: 4,
        success: true,
        totalWaitTime: 7,
      });
    });

    test("fail four times then succeed on 5th", () => {
      expect(processCardPaymentRetry(["fail", "fail", "fail", "fail", "success"])).toEqual({
        attempts: 5,
        success: true,
        totalWaitTime: 15,
      });
    });
  });

  describe("All attempts fail", () => {
    test("all 5 attempts fail", () => {
      expect(processCardPaymentRetry(["fail", "fail", "fail", "fail", "fail"])).toEqual({
        attempts: 5,
        success: false,
        totalWaitTime: 15,
      });
    });

    test("more outcomes than max attempts still stops at 5", () => {
      expect(processCardPaymentRetry(["fail", "fail", "fail", "fail", "fail", "success"])).toEqual({
        attempts: 5,
        success: false,
        totalWaitTime: 15,
      });
    });
  });

  describe("Backoff wait time", () => {
    test("1 second after first fail", () => {
      expect(processCardPaymentRetry(["fail", "success"]).totalWaitTime).toBe(1);
    });

    test("1+2 after two fails", () => {
      expect(processCardPaymentRetry(["fail", "fail", "success"]).totalWaitTime).toBe(3);
    });

    test("1+2+4 after three fails", () => {
      expect(processCardPaymentRetry(["fail", "fail", "fail", "success"]).totalWaitTime).toBe(7);
    });

    test("1+2+4+8 after four fails", () => {
      expect(
        processCardPaymentRetry(["fail", "fail", "fail", "fail", "success"]).totalWaitTime,
      ).toBe(15);
    });
  });

  describe("Validation", () => {
    test("empty array returns zeroed object", () => {
      expect(processCardPaymentRetry([])).toEqual({
        attempts: 0,
        success: false,
        totalWaitTime: 0,
      });
    });

    test("non-array returns zeroed object", () => {
      expect(processCardPaymentRetry("fail" as any)).toEqual({
        attempts: 0,
        success: false,
        totalWaitTime: 0,
      });
    });

    test("null returns zeroed object", () => {
      expect(processCardPaymentRetry(null as any)).toEqual({
        attempts: 0,
        success: false,
        totalWaitTime: 0,
      });
    });

    test("undefined returns zeroed object", () => {
      expect(processCardPaymentRetry(undefined as any)).toEqual({
        attempts: 0,
        success: false,
        totalWaitTime: 0,
      });
    });
  });
});
