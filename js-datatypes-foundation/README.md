# TypeScript Data Types Foundation Lab

Master TypeScript built-in methods through **12 real-world, story-based challenges**! From a coffee shop order system to a restaurant combo platter, each problem puts you in a practical scenario where you need to use built-in methods of String, Number, Array, and Object.

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

You should see **failing tests** — that's expected! Your job is to make them pass.

---

## How to Solve the Challenges

### Step 1 — Open a challenge file

All challenges live in the `src/` folder. Start with `src/01-coffee-order.ts`.

```text
src/
├── 01-coffee-order.ts           ← Start here
├── 02-border-maker.ts
├── ...
└── 12-combo-platter.ts
```

### Step 2 — Read the JSDoc/TSDoc

Each file has detailed comments explaining the story, rules, parameters, and return types.

### Step 3 — Write your solution

Replace `// your code here` with your implementation:

```ts
// Before
export function getCoffeeOrderLength(order: string): number {
  // your code here
  return -1;
}

// After
export function getCoffeeOrderLength(order: string): number {
  return order.trim().length;
}
```

### Step 4 — Run tests

```bash
bun test -- 01-coffee
```

### Run all tests

```bash
bun test
```

### Watch mode

```bash
bun test --watch
```

---

## Challenges

| #   | Challenge                | File                        | Concept                                                           | Points |
| --- | ------------------------ | --------------------------- | ----------------------------------------------------------------- | ------ |
| 01  | Coffee Shop Order System | `01-coffee-order.ts`        | String Basics: length, toUpperCase, toLowerCase, trim, includes   | 7      |
| 02  | Decorative Border Maker  | `02-border-maker.ts`        | String Transform: slice, split, join, replace, repeat             | 7      |
| 03  | Taxi Fare Calculator     | `03-taxi-meter.ts`          | Number & Math: parseFloat, parseInt, toFixed, Math.ceil           | 8      |
| 04  | Grocery Shopping Cart    | `04-grocery-cart.ts`        | Array Basics: push, pop, shift, unshift, indexOf, includes        | 8      |
| 05  | Train Coach Finder       | `05-train-coach.ts`         | Array Search: find, findIndex, some, every, filter                | 8      |
| 06  | Store Billing System     | `06-store-bill.ts`          | Array Transform: map, filter, reduce, sort, join                  | 9      |
| 07  | Membership Registry      | `07-membership-registry.ts` | Object Basics: Object.keys, Object.values, Object.entries         | 9      |
| 08  | Restaurant Menu Builder  | `08-menu-builder.ts`        | Object Transform: Object.assign, Object.freeze, spread            | 8      |
| 09  | Postcard Writer          | `09-postcard-writer.ts`     | String Advanced: template literals, startsWith, endsWith          | 9      |
| 10  | Zipcode Type Checker     | `10-zipcode-checker.ts`     | Type Checking: typeof, Number.isInteger, Number.isNaN             | 9      |
| 11  | Parcel Delivery Service  | `11-parcel-service.ts`      | JSON & Conversion: JSON.parse, JSON.stringify, String(), Number() | 9      |
| 12  | Restaurant Combo Platter | `12-combo-platter.ts`       | Mixed Methods Capstone                                            | 9      |

---

## Submitting Your Work

1. `bun test`
2. `bun run check`
3. `git commit -am "Complete datatypes foundation lab"`
4. `git push`

---

## Tips for Success

- **Return types matter**: TypeScript ensures you return exactly what is expected.
- **Handle edge cases**: The type definitions often assume valid inputs, but tests might throw invalid runtime data at you. Add checks if needed.
