/**
 * Chat Message Parser
 *
 * You are building an analytics tool for exported support-chat lines.
 *
 * Export format:
 *   "DD/MM/YYYY, HH:MM - Sender Name: Message text"
 *
 * Rules:
 *   - Extract date from start to ", "
 *   - Extract time from ", " to " - "
 *   - Extract sender from " - " to first ": "
 *   - Extract message text after first ": " and trim it
 *   - wordCount = number of words in text
 *   - Sentiment (case-insensitive):
 *     - If text includes "😂" or ":)" or "haha" => "funny"
 *     - Else if text includes "❤" or "love" or "care" => "love"
 *     - Else => "neutral"
 *     - If both match, "funny" takes priority
 *
 * Validation:
 *   - If input is not a string, return null
 *   - If " - " is missing, return null
 *   - If ": " after sender is missing, return null
 *
 * @param {string} message
 * @returns {{ date: string, time: string, sender: string, text: string, wordCount: number, sentiment: string } | null}
 */
interface ChatMessage {
  date: string;
  time: string;
  sender: string;
  text: string;
  wordCount: number;
  sentiment: string;
}

export function parseChatMessage(message: string): ChatMessage | null {
  // TODO: implement
  return null;
}
