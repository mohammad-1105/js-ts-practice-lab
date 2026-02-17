import { describe, expect, test } from "bun:test";
import { validateSignupForm } from "../src/11-signup-form-validator.ts";

describe("11 - Signup Form Validator (9 pts)", () => {
  const validForm = {
    name: "Alex Parker",
    email: "alex@gmail.com",
    phone: "9876543210",
    age: 20,
    zipCode: "941052",
    state: "California",
    agreeTerms: true,
  };

  describe("All valid input", () => {
    test("Completely valid form returns isValid true with empty errors", () => {
      expect(validateSignupForm(validForm)).toEqual({ isValid: true, errors: {} });
    });
  });

  describe("Name validation", () => {
    test("Empty name gives error", () => {
      const result = validateSignupForm({ ...validForm, name: "" });
      expect(result!.isValid).toBe(false);
      expect(result.errors.name).toBe("Name must be 2-50 characters");
    });

    test("Single character name gives error", () => {
      const result = validateSignupForm({ ...validForm, name: "R" });
      expect(result.errors.name).toBe("Name must be 2-50 characters");
    });

    test("Name with only spaces (after trim) gives error", () => {
      const result = validateSignupForm({ ...validForm, name: "   " });
      expect(result.errors.name).toBe("Name must be 2-50 characters");
    });

    test("Name with exactly 2 characters is valid", () => {
      const result = validateSignupForm({ ...validForm, name: "AB" });
      expect(result.errors.name).toBeUndefined();
    });

    test("Name with 50 characters is valid", () => {
      const result = validateSignupForm({ ...validForm, name: "A".repeat(50) });
      expect(result.errors.name).toBeUndefined();
    });

    test("Name with 51 characters gives error", () => {
      const result = validateSignupForm({ ...validForm, name: "A".repeat(51) });
      expect(result.errors.name).toBe("Name must be 2-50 characters");
    });
  });

  describe("Email validation", () => {
    test("Email without @ gives error", () => {
      const result = validateSignupForm({ ...validForm, email: "alexgmail.com" });
      expect(result.errors.email).toBe("Invalid email format");
    });

    test("Email without . after @ gives error", () => {
      const result = validateSignupForm({ ...validForm, email: "alex@gmailcom" });
      expect(result.errors.email).toBe("Invalid email format");
    });

    test("Valid email passes", () => {
      const result = validateSignupForm({ ...validForm, email: "test@example.co.in" });
      expect(result.errors.email).toBeUndefined();
    });

    test("Email with multiple @ gives error", () => {
      const result = validateSignupForm({ ...validForm, email: "test@@example.com" });
      expect(result.errors.email).toBe("Invalid email format");
    });
  });

  describe("Phone validation", () => {
    test("Phone with less than 10 digits gives error", () => {
      const result = validateSignupForm({ ...validForm, phone: "98765" });
      expect(result.errors.phone).toBe("Invalid US phone number");
    });

    test("Phone starting with 5 gives error", () => {
      const result = validateSignupForm({ ...validForm, phone: "5876543210" });
      expect(result.errors.phone).toBe("Invalid US phone number");
    });

    test("Phone starting with 9 is valid", () => {
      const result = validateSignupForm({ ...validForm, phone: "9876543210" });
      expect(result.errors.phone).toBeUndefined();
    });

    test("Phone starting with 6 is valid", () => {
      const result = validateSignupForm({ ...validForm, phone: "6123456789" });
      expect(result.errors.phone).toBeUndefined();
    });

    test("Phone with letters gives error", () => {
      const result = validateSignupForm({ ...validForm, phone: "98765abcde" });
      expect(result.errors.phone).toBe("Invalid US phone number");
    });

    test("Phone with 11 digits gives error", () => {
      const result = validateSignupForm({ ...validForm, phone: "98765432101" });
      expect(result.errors.phone).toBe("Invalid US phone number");
    });
  });

  describe("Age validation (with coercion)", () => {
    test("Age as string number gets converted via parseInt", () => {
      const result = validateSignupForm({ ...validForm, age: "22" });
      expect(result.errors.age).toBeUndefined();
    });

    test("Age 15 (too young) gives error", () => {
      const result = validateSignupForm({ ...validForm, age: 15 });
      expect(result.errors.age).toBe("Age must be an integer between 16 and 100");
    });

    test("Age 16 is valid", () => {
      const result = validateSignupForm({ ...validForm, age: 16 });
      expect(result.errors.age).toBeUndefined();
    });

    test("Age 100 is valid", () => {
      const result = validateSignupForm({ ...validForm, age: 100 });
      expect(result.errors.age).toBeUndefined();
    });

    test("Age 101 gives error", () => {
      const result = validateSignupForm({ ...validForm, age: 101 });
      expect(result.errors.age).toBe("Age must be an integer between 16 and 100");
    });

    test('Age "abc" gives error (isNaN)', () => {
      const result = validateSignupForm({ ...validForm, age: "abc" });
      expect(result.errors.age).toBe("Age must be an integer between 16 and 100");
    });

    test("Age 25.5 (not integer) gives error", () => {
      const result = validateSignupForm({ ...validForm, age: 25.5 });
      expect(result.errors.age).toBe("Age must be an integer between 16 and 100");
    });
  });

  describe("ZIP code validation", () => {
    test("ZIP code starting with 0 gives error", () => {
      const result = validateSignupForm({ ...validForm, zipCode: "012345" });
      expect(result.errors.zipCode).toBe("Invalid ZIP code");
    });

    test('Valid zipCode "941052" passes', () => {
      const result = validateSignupForm({ ...validForm, zipCode: "941052" });
      expect(result.errors.zipCode).toBeUndefined();
    });

    test("ZIP code with 5 digits gives error", () => {
      const result = validateSignupForm({ ...validForm, zipCode: "12345" });
      expect(result.errors.zipCode).toBe("Invalid ZIP code");
    });

    test("ZIP code with letters gives error", () => {
      const result = validateSignupForm({ ...validForm, zipCode: "40abc1" });
      expect(result.errors.zipCode).toBe("Invalid ZIP code");
    });
  });

  describe("State validation (nullish operators)", () => {
    test("null state gives error", () => {
      const result = validateSignupForm({ ...validForm, state: null });
      expect(result.errors.state).toBe("State is required");
    });

    test("undefined state gives error", () => {
      const result = validateSignupForm({ ...validForm, state: undefined });
      expect(result.errors.state).toBe("State is required");
    });

    test("Empty string state gives error", () => {
      const result = validateSignupForm({ ...validForm, state: "" });
      expect(result.errors.state).toBe("State is required");
    });

    test("Valid state passes", () => {
      const result = validateSignupForm({ ...validForm, state: "Texas" });
      expect(result.errors.state).toBeUndefined();
    });
  });

  describe("agreeTerms (truthy/falsy)", () => {
    test("false gives error", () => {
      const result = validateSignupForm({ ...validForm, agreeTerms: false });
      expect(result.errors.agreeTerms).toBe("Must agree to terms");
    });

    test("0 (falsy) gives error", () => {
      const result = validateSignupForm({ ...validForm, agreeTerms: 0 });
      expect(result.errors.agreeTerms).toBe("Must agree to terms");
    });

    test('"" (falsy) gives error', () => {
      const result = validateSignupForm({ ...validForm, agreeTerms: "" });
      expect(result.errors.agreeTerms).toBe("Must agree to terms");
    });

    test("null (falsy) gives error", () => {
      const result = validateSignupForm({ ...validForm, agreeTerms: null });
      expect(result.errors.agreeTerms).toBe("Must agree to terms");
    });

    test('"yes" (truthy) is valid', () => {
      const result = validateSignupForm({ ...validForm, agreeTerms: "yes" });
      expect(result.errors.agreeTerms).toBeUndefined();
    });

    test("1 (truthy) is valid", () => {
      const result = validateSignupForm({ ...validForm, agreeTerms: 1 });
      expect(result.errors.agreeTerms).toBeUndefined();
    });
  });

  describe("Multiple errors", () => {
    test("Multiple invalid fields produce multiple errors", () => {
      const result = validateSignupForm({
        name: "",
        email: "bad",
        phone: "123",
        age: 10,
        zipCode: "0123",
        state: null,
        agreeTerms: false,
      });
      expect(result!.isValid).toBe(false);
      expect(Object.keys(result.errors).length).toBe(7);
    });
  });
});
