/**
 * Student Report Card Generator
 *
 * You are building a school analytics service that generates per-student summaries.
 *
 * Rules:
 *   - student format: { name: "Alex", marks: { math: 85, science: 92 } }
 *   - Compute:
 *     - totalMarks: sum of all marks
 *     - percentage: rounded to 2 decimals
 *     - grade: A+ (>=90), A (>=80), B (>=70), C (>=60), D (>=40), F (<40)
 *     - highestSubject: subject with highest marks
 *     - lowestSubject: subject with lowest marks
 *     - passedSubjects: marks >= 40
 *     - failedSubjects: marks < 40
 *     - subjectCount: total subjects
 *
 * Validation:
 *   - If student is not an object or is null, return null
 *   - If student.name is not a non-empty string, return null
 *   - If student.marks is not a non-empty object, return null
 *   - If any mark is not a number in [0, 100], return null
 *
 * @param student
 * @returns {object | null}
 */

interface Student {
  name: string;
  marks: { [key: string]: number };
}

interface ReportCard {
  name: string;
  totalMarks: number;
  percentage: number;
  grade: string;
  highestSubject: string;
  lowestSubject: string;
  passedSubjects: string[];
  failedSubjects: string[];
  subjectCount: number;
}

export function generateStudentReport(student: Student): ReportCard | null {
  // TODO: implement
  return null;
}
