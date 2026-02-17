# TypeScript Conditionals Lab

Master TypeScript conditionals through **12 real-world, story-based challenges**. Each question puts you in a scenario where you need to write the logic using `if/else`, `switch`, ternary operators, and logical operators.

**Total: 166 tests across 12 challenges = 100 points**

---

## Prerequisites

- [Bun](https://bun.sh/) v1.0 or higher
- [Git](https://git-scm.com/)
- A code editor (VS Code recommended) with [Biome](https://biomejs.dev/) extension.

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

You should see **failing tests** — that's expected! Your job is to make them pass.

---

## How to Solve the Challenges

### Step 1 — Open a challenge file

All challenges live in the `src/` folder. Start with `src/01-ticket-pricing.ts` and work your way up.

```text
src/
├── 01-ticket-pricing.ts      ← Start here
├── 02-traffic-light.ts
├── 03-grade-calculator.ts
├── ...
└── 12-season-activity.ts
```

### Step 2 — Read the story and rules

Each file has a detailed JSDoc/TSDoc comment at the top that explains:

- The **story** (a real-world scenario)
- The **rules** your function must follow
- The **parameters** and **return values** (with types!)

### Step 3 — Write your solution

Replace `// your code here` with your implementation:

```ts
// Before
export function getTicketPrice(age: number, isWeekend: boolean): number {
  // your code here
  return -1;
}

// After (example)
export function getTicketPrice(age: number, isWeekend: boolean): number {
  if (age < 0) return -1;

  if (age <= 12) {
    return 8;
  }
  // ... rest of your logic
}
```

### Step 4 — Run the test for that challenge

```bash
bun test -- 01-ticket
```

You can use any part of the filename to match:

```bash
bun test -- 02-traffic
bun test -- 03-grade
```

### Step 5 — Fix and repeat

If tests fail, read the error messages. Fix your code and run the test again.

### Run all tests at once

```bash
bun test
```

### Watch mode (auto re-run on save)

```bash
bun test --watch
```

---

## Challenges

| #   | File                        | Story                     | Concepts                                                | Points |
| --- | --------------------------- | ------------------------- | ------------------------------------------------------- | ------ |
| 01  | `01-ticket-pricing.ts`      | Starlight Cinema          | `if/else if`, age ranges, boolean flag                  | 8      |
| 02  | `02-traffic-light.ts`       | SafeDrive Simulator       | `switch` statement, case-insensitivity                  | 8      |
| 03  | `03-grade-calculator.ts`    | Ms. Parker's Report Cards | `if/else if` chain, bonus logic, validation             | 8      |
| 04  | `04-weather-advice.ts`      | TrailBuddy Hiking App     | Nested conditions, temperature + boolean                | 8      |
| 05  | `05-library-card.ts`        | Maple Town Library        | Logical operators (`&&`), returning objects             | 8      |
| 06  | `06-shipping-calculator.ts` | ShopSwift Online Store    | Multiple factors, free shipping threshold               | 9      |
| 07  | `07-coffee-shop.ts`         | Bean & Brew Cafe          | `switch` + `if`, interfaces                             | 9      |
| 08  | `08-tax-calculator.ts`      | Sam's Freelance Taxes     | Progressive brackets, math + conditionals               | 9      |
| 09  | `09-password-strength.ts`   | SecureApp Signup          | Multiple criteria checks, counting conditions           | 9      |
| 10  | `10-tip-calculator.ts`      | TipEasy Restaurant App    | Rating mapping, rounding, returning objects             | 8      |
| 11  | `11-parking-fee.ts`         | City Central Parking      | `Math.ceil`, rate tiers, daily cap                      | 9      |
| 12  | `12-season-activity.ts`     | WanderLust Travel Planner | Two-step logic (season → activity), compound conditions | 8      |

---

## Submitting Your Work

1. Run all tests: `bun test`
2. Run linter: `bun run check`
3. Commit your work: `git commit -am "Complete conditionals lab"`
4. Push: `git push`

---

## Tips for Success

- **Read the Types**: TypeScript tells you exactly what inputs to expect.
- **Check boundary values**: Tests often check exact boundaries (e.g., age 12 vs 13).
- **Commit often**: Don't wait until you've solved everything to push.
