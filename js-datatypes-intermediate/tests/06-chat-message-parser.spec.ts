import { describe, expect, test } from "bun:test";
import { parseChatMessage } from "../src/06-chat-message-parser.ts";

describe("06 - Chat Message Parser (9 pts)", () => {
  describe("Basic parsing", () => {
    test("Extracts date correctly", () => {
      const result = parseChatMessage("25/01/2025, 14:30 - Alex: Hello team");
      expect(result.date).toBe("25/01/2025");
    });

    test("Extracts time correctly", () => {
      const result = parseChatMessage("25/01/2025, 14:30 - Alex: Hello team");
      expect(result.time).toBe("14:30");
    });

    test("Extracts sender correctly", () => {
      const result = parseChatMessage("25/01/2025, 14:30 - Alex: Hello team");
      expect(result.sender).toBe("Alex");
    });

    test("Extracts message text correctly", () => {
      const result = parseChatMessage("25/01/2025, 14:30 - Alex: Hello team");
      expect(result.text).toBe("Hello team");
    });

    test("Full parsing of a standard message", () => {
      expect(parseChatMessage("01/12/2024, 09:15 - Taylor Carter: Good morning!")).toEqual({
        date: "01/12/2024",
        time: "09:15",
        sender: "Taylor Carter",
        text: "Good morning!",
        wordCount: 2,
        sentiment: "neutral",
      });
    });
  });

  describe("Word count", () => {
    test("Counts words correctly", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: Kya haal hai team");
      expect(result.wordCount).toBe(4);
    });

    test("Single word message", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: Hello");
      expect(result.wordCount).toBe(1);
    });
  });

  describe("Sentiment detection - funny", () => {
    test("Message with 😂 emoji is funny", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: So funny 😂");
      expect(result.sentiment).toBe("funny");
    });

    test("Message with :) is funny", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: Nice one :)");
      expect(result.sentiment).toBe("funny");
    });

    test('Message with "haha" is funny (case-insensitive)', () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: HAHA that was good");
      expect(result.sentiment).toBe("funny");
    });
  });

  describe("Sentiment detection - love", () => {
    test("Message with ❤ emoji is love", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Taylor: Miss you ❤");
      expect(result.sentiment).toBe("love");
    });

    test('Message with "love" is love', () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Taylor: I love this song");
      expect(result.sentiment).toBe("love");
    });

    test('Message with "care" is love', () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Taylor: We care deeply");
      expect(result.sentiment).toBe("love");
    });
  });

  describe("Sentiment priority", () => {
    test("Funny takes priority over love when both present", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: I love your haha moments");
      expect(result.sentiment).toBe("funny");
    });

    test("Neutral when no keywords found", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: Meeting at 5pm");
      expect(result.sentiment).toBe("neutral");
    });
  });

  describe("Edge cases in parsing", () => {
    test("Message with colon in text body", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Jordan: Time is 5:30 okay?");
      expect(result.sender).toBe("Jordan");
      expect(result.text).toBe("Time is 5:30 okay?");
    });

    test("Sender with spaces in name", () => {
      const result = parseChatMessage("10/01/2025, 10:00 - Alex Carter: Hey");
      expect(result.sender).toBe("Alex Carter");
    });
  });

  describe("Validation", () => {
    test("Non-string input returns null", () => {
      expect(parseChatMessage(123)).toBeNull();
    });

    test("null returns null", () => {
      expect(parseChatMessage(null as any)).toBeNull();
    });

    test('String without " - " returns null', () => {
      expect(parseChatMessage("Hello this is a message")).toBeNull();
    });

    test('String without ": " after sender returns null', () => {
      expect(parseChatMessage("10/01/2025, 10:00 - Jordan says hello")).toBeNull();
    });
  });
});
