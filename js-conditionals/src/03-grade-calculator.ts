/**
 * 📝 Ms. Parker's Report Cards
 *
 * Ms. Parker teaches 8th-grade science and needs help converting
 * percentage scores into letter grades for report cards. She also
 * rewards students who earned extra credit by adding 5 bonus points
 * to their score — but the final score can never go above 100.
 *
 * Grading Scale:
 *   - 90–100 → "A"
 *   - 80–89  → "B"
 *   - 70–79  → "C"
 *   - 60–69  → "D"
 *   - 0–59   → "F"
 *
 * Rules:
 *   - Check validity FIRST: if the original score is less than 0
 *     or greater than 100, return "INVALID"
 *   - If hasExtraCredit is true, add 5 points AFTER validation
 *     (cap the result at 100)
 *   - Then determine the letter grade from the adjusted score
 *
 * @param score - The student's percentage score (0-100)
 * @param hasExtraCredit - Whether the student has extra credit
 * @returns The letter grade or "INVALID"
 */
export function calculateGrade(score: number, hasExtraCredit: boolean): string {
  if (typeof score !== "number" || score < 0 || score > 100) return "INVALID";

  const adjustedScore = hasExtraCredit ? Math.min(score + 5, 100) : score;

  if (adjustedScore >= 90) return "A";
  if (adjustedScore >= 80) return "B";
  if (adjustedScore >= 70) return "C";
  if (adjustedScore >= 60) return "D";
  return "F";
}
