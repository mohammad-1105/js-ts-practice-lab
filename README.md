# JS/TS Practice Labs 🚀

A collection of practice labs for mastering JavaScript and TypeScript logic, data types, and algorithms. Note: This repository has been migrated to **TypeScript** and **Bun**.

## 🛠️ Tech Stack

- **Runtime:** [Bun](https://bun.sh/) (v1.3.9+)
- **Language:** TypeScript
- **Formatter/Linter:** [Biome](https://biomejs.dev/)

## 📂 Labs Overview

This monorepo contains three graduated labs:

1.  **[js-conditionals](./js-conditionals)**: Basic control flow, if/else, switch, and logic.
2.  **[js-datatypes-foundation](./js-datatypes-foundation)**: Core string, number, array, and object manipulation.
3.  **[js-datatypes-intermediate](./js-datatypes-intermediate)**: Real-world data parsing, validation, and complex transformations.

## 🚀 Getting Started

### Prerequisites

- Install Bun: `curl -fsSL https://bun.sh/install | bash`
- VS Code (recommended) with **Biome** and **Bun** extensions.

### Installation

Install dependencies from the root directory:

```bash
bun install
```

## 🧪 Running Tests

You can run tests for specific labs or the entire workspace.

**Run All Tests:**

```bash
bun test
```

**Run Tests for a Specific Lab:**

```bash
bun test --filter js-conditionals
# OR
cd js-conditionals && bun test
```

## 🧹 Code Quality

We use Biome for formatting and linting.

```bash
# Format and Lint all files
bun run check

# Fix auto-fixable issues
bun run check --apply
```
