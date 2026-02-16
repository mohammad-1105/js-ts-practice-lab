# TypeScript Loops Lab

Master TypeScript loops through **12 Western story-based challenges** across cafes, sports, travel, logistics, and reservation systems.

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

### 2. Verify setup

```bash
bun test
```

At the start, tests should fail because all `src/` functions are TODO stubs.

---

## Project Structure

```text
src/
├── 01-coffee-cart-revenue.ts
├── 02-baseball-scoreboard.ts
├── 03-city-taxi-meter.ts
├── 04-road-trip-playlist.ts
├── 05-farmers-market-bill.ts
├── 06-holiday-lights-plan.ts
├── 07-soccer-league-table.ts
├── 08-installment-payoff.ts
├── 09-card-payment-retry.ts
├── 10-pizza-batch-processor.ts
├── 11-star-diamond-pattern.ts
└── 12-rail-reservation-system.ts
```

---

## How to Solve

### 1. Open a challenge file

Start with `src/01-coffee-cart-revenue.ts` and continue in order.

### 2. Read the JSDoc/TSDoc

Each file includes:

- business scenario
- loop constraints
- validation rules
- examples and hints

### 3. Implement the TODO stub

Replace the placeholder return value with your solution.

```ts
// Before
export function calculateCoffeeCartRevenue(customers: number): CoffeeCartSummary {
  // your code here
  return { totalCups: 0, totalRevenue: 0 };
}

// After (example)
export function calculateCoffeeCartRevenue(customers: number): CoffeeCartSummary {
  if (!Number.isInteger(customers) || customers <= 0) {
    return { totalCups: 0, totalRevenue: 0 };
  }

  let totalRevenue = 0;
  for (let i = 1; i <= customers; i++) {
    totalRevenue += i % 3 === 0 ? 6 : 4;
  }

  return { totalCups: customers, totalRevenue };
}
```

### 4. Run tests for one challenge

```bash
bun test -- 01-coffee-cart
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

| #   | File                              | Story                              | Loop Concepts                              | Points |
| --- | --------------------------------- | ---------------------------------- | ------------------------------------------ | ------ |
| 01  | `01-coffee-cart-revenue.ts`       | Downtown Coffee Cart               | `for`, modulo, accumulator                 | 7      |
| 02  | `02-baseball-scoreboard.ts`       | Weekend Baseball Scoreboard        | `for`, `break`, multi-counters             | 7      |
| 03  | `03-city-taxi-meter.ts`           | City Taxi Meter                    | `while`, tiered pricing, `Math.ceil`       | 8      |
| 04  | `04-road-trip-playlist.ts`        | Road Trip Playlist Builder         | `while`, lookahead stop rule, skips        | 8      |
| 05  | `05-farmers-market-bill.ts`       | Farmers Market Billing             | `for...of`, lookup object, array building  | 8      |
| 06  | `06-holiday-lights-plan.ts`       | Holiday Lights Budget Planner      | `for...of` + `while`, trimming to budget   | 8      |
| 07  | `07-soccer-league-table.ts`       | Soccer League Standings            | `for`, object accumulator, sorting          | 9      |
| 08  | `08-installment-payoff.ts`        | Phone Installment Payoff           | `while`, accumulators, infinite-loop guard | 9      |
| 09  | `09-card-payment-retry.ts`        | Card Payment Retry Engine          | `do...while`, exponential backoff          | 8      |
| 10  | `10-pizza-batch-processor.ts`     | Pizza Kitchen Batch Processing     | `do...while`, batching, queue-like loop    | 8      |
| 11  | `11-star-diamond-pattern.ts`      | Winter Festival Star Pattern       | nested `for` loops, pattern generation     | 10     |
| 12  | `12-rail-reservation-system.ts`   | Intercity Rail Reservation System  | nested loops, mutation, multi-pass logic   | 10     |

---

## Submission Workflow

1. Run all tests: `bun test`
2. Run checks: `bun run check`
3. Commit: `git commit -am "Complete loops lab"`
4. Push: `git push`

---

## Tips

- Follow each file's return type exactly.
- Boundary values are heavily tested.
- Some problems require specific loop styles (`for`, `while`, `do...while`, `for...of`).
- Keep your solution inside `src/`; do not edit tests.
