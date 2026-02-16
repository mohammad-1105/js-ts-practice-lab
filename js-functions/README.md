# TypeScript Functions Lab

Practice modern TypeScript function patterns through **12 Western story-based challenges** covering defaults, arrow functions, closures, callbacks, recursion, higher-order functions, composition, module pattern, and a capstone.

**Total: 100 points across 12 challenges**

---

## Prerequisites

- [Bun](https://bun.sh/) v1.0+
- [Git](https://git-scm.com/)
- VS Code with [Biome](https://biomejs.dev/) extension

---

## Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Run tests

```bash
bun test
```

At the beginning, tests are expected to fail because all `src/` functions are TODO stubs.

---

## Project Structure

```text
src/
├── 01-bagel-shop-order.ts
├── 02-baseball-analytics-arrows.ts
├── 03-office-lunch-plan.ts
├── 04-streaming-studio-factory.ts
├── 05-bike-courier-tracker.ts
├── 06-wedding-rsvp-callbacks.ts
├── 07-winter-recursion-workshop.ts
├── 08-diner-rating-hof.ts
├── 09-color-palette-pure.ts
├── 10-roastery-pipeline-compose.ts
├── 11-holiday-calendar-module.ts
└── 12-city-election-capstone.ts
```

---

## How to Solve

### 1. Start in order

Begin with `src/01-bagel-shop-order.ts` and continue sequentially.

### 2. Read each JSDoc block

Each challenge includes:

- scenario description
- rules and validation
- expected return shape
- hints for implementation strategy

### 3. Replace TODO returns

Implement logic while keeping function signatures and return types unchanged.

### 4. Run focused tests

```bash
bun test -- 01-bagel-shop-order
```

### 5. Repeat and verify

```bash
bun test
```

---

## Challenge Map

| #   | File                               | Story                               | Function Concepts                         | Points |
| --- | ---------------------------------- | ----------------------------------- | ----------------------------------------- | ------ |
| 01  | `01-bagel-shop-order.ts`           | NYC Bagel Shop                      | default params, validation, object return | 7      |
| 02  | `02-baseball-analytics-arrows.ts`  | Baseball Analytics Desk             | arrow functions, derived stats            | 7      |
| 03  | `03-office-lunch-plan.ts`          | Office Meal Subscriptions           | destructuring, rest/spread                | 8      |
| 04  | `04-streaming-studio-factory.ts`   | Streaming Studio Factories          | factory functions, closures               | 8      |
| 05  | `05-bike-courier-tracker.ts`       | Bike Courier Dispatch               | closure state, module-like API            | 8      |
| 06  | `06-wedding-rsvp-callbacks.ts`     | Wedding RSVP Automation             | callbacks, function pipelines             | 8      |
| 07  | `07-winter-recursion-workshop.ts`  | Winter Craft Recursion              | recursive base/step patterns              | 9      |
| 08  | `08-diner-rating-hof.ts`           | Neighborhood Diner Ratings          | higher-order functions                    | 9      |
| 09  | `09-color-palette-pure.ts`         | Design Studio Color Palettes        | pure functions, immutability              | 8      |
| 10  | `10-roastery-pipeline-compose.ts`  | Coffee Roastery Processing Pipeline | composition, `pipe`, `compose`            | 8      |
| 11  | `11-holiday-calendar-module.ts`    | City Holiday Calendar               | module pattern, private state             | 10     |
| 12  | `12-city-election-capstone.ts`     | City Election Simulator             | capstone: closures + callbacks + purity   | 10     |

---

## Tips

- Keep functions pure unless the challenge explicitly needs state.
- Preserve object/array immutability where required.
- For callback and HOF tasks, verify function order carefully.
- Do not edit test files; implement only inside `src/`.
