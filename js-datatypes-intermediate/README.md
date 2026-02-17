# TypeScript Data Types Intermediate Lab

Practice TypeScript data types and built-in methods through **12 product-engineering challenges** across fintech, retail, transit, messaging, and analytics workflows.

**Total: 100 points across 12 challenges**

---

## Prerequisites

- [Bun](https://bun.sh/) v1.0+
- [Git](https://git-scm.com/)
- VS Code with [Biome](https://biomejs.dev/) extension.

---

## Getting Started

### 1. Installation

```bash
bun install
```

### 2. Verify everything works

```bash
bun test
```

At the start, tests should fail because all `src/` functions are TODO stubs.

---

## Project Structure

Challenges are in `src/` and tests are in `tests/`.

```text
src/
├── 01-ssn-masker.ts
├── 02-coffee-shop-menu.ts
├── 03-movie-title-formatter.ts
├── 04-sales-tax-calculator.ts
├── 05-transit-pass.ts
├── 06-chat-message-parser.ts
├── 07-student-report-card.ts
├── 08-team-budget-manager.ts
├── 09-food-delivery-order.ts
├── 10-digital-wallet-transactions.ts
├── 11-signup-form-validator.ts
├── 12-train-booking-status.ts
```

---

## How to Solve

### 1. Open a challenge file

Start with `src/01-ssn-masker.ts` and move in numeric order.

### 2. Read the JSDoc/TSDoc

Each file defines:

- business context
- rules and edge cases
- expected input/output interfaces

### 3. Implement the TODO stub

Replace the placeholder with your solution.

```ts
// Before
export function maskSSN(id: string): string {
  // TODO: implement
  return "";
}

// After (example)
export function maskSSN(id: string): string {
  if (!/^\d{12}$/.test(id)) return "INVALID";
  return `XXXX-XXXX-${id.slice(-4)}`;
}
```

### 4. Run tests for one challenge

```bash
bun test -- 01-ssn
```

### 5. Repeat

Fix failures, rerun tests, and move to the next challenge.

### Run all tests

```bash
bun test
```

### Watch mode

```bash
bun test --watch
```

---

## Challenge Map

| #   | File                                | Export                      | Domain                     | Core Concepts                           | Points |
| --- | ----------------------------------- | --------------------------- | -------------------------- | --------------------------------------- | ------ |
| 01  | `01-ssn-masker.ts`                  | `maskSSN`                   | Fintech privacy            | strings, regex, slice, repeat           | 7      |
| 02  | `02-coffee-shop-menu.ts`            | `formatCoffeeMenu`          | Cafe POS                   | arrays, filter, map, join               | 7      |
| 03  | `03-movie-title-formatter.ts`       | `formatMovieTitle`          | Streaming metadata         | trim, split, casing                     | 8      |
| 04  | `04-sales-tax-calculator.ts`        | `calculateSalesTax`         | Retail checkout            | numbers, toFixed, parseFloat            | 8      |
| 05  | `05-transit-pass.ts`                | `generateTransitPass`       | Transit ticketing          | strings, template literals, interfaces  | 8      |
| 06  | `06-chat-message-parser.ts`         | `parseChatMessage`          | Messaging analytics        | parsing, index/slice                    | 9      |
| 07  | `07-student-report-card.ts`         | `generateStudentReport`     | School analytics           | Object.keys/values, reduce              | 9      |
| 08  | `08-team-budget-manager.ts`         | `summarizeTeamBudget`       | Sports ops budgeting       | reduce, grouping, numeric sorts         | 8      |
| 09  | `09-food-delivery-order.ts`         | `buildDeliveryOrder`        | E-commerce checkout        | nested totals, optional properties      | 9      |
| 10  | `10-digital-wallet-transactions.ts` | `analyzeWalletTransactions` | Wallet ledger analytics    | filtering, aggregates                   | 9      |
| 11  | `11-signup-form-validator.ts`       | `validateSignupForm`        | SaaS onboarding            | validation, coercion, optional chaining | 9      |
| 12  | `12-train-booking-status.ts`        | `processTrainBooking`       | Reservation status service | complex interfaces, mapping             | 9      |

---

## Submission Workflow

1. Run all tests: `bun test`
2. Run checks: `bun run check`
3. Commit: `git commit -am "Complete datatypes intermediate lab"`
4. Push: `git push`

---

## Tips

- **Interfaces are key**: Adhere to `Transaction`, `Passenger`, `OrderSummary` interfaces defined in the files.
- **Type Safety**: TypeScript will catch many errors before you run code. Use it to your advantage.
- **Null Safety**: Many functions return `Object | null`. Handle the `null` cases explicitly.
