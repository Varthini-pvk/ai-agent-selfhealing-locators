# AI Test Fix Agent

An autonomous AI-powered test repair agent built using TypeScript, OpenAI SDK, Playwright, and Git automation.

The long-term goal of this project is to automatically analyze failed Playwright test results, identify selector-related failures using LLM reasoning, repair broken selectors, rerun tests, and generate pull requests with fixes.

---

# Goals

- Learn AI agent engineering hands-on
- Understand orchestration and tool calling
- Build autonomous testing workflows
- Explore Playwright + AI integrations
- Build production-style TypeScript architecture

---

# Current Status

🚧 Project Initialization Phase

Today the foundational project structure was created.

---

# Project Structure

```txt
ai-test-fix-agent/
│
├── src/
│   ├── agents/
│   ├── tools/
│   ├── prompts/
│   ├── workflows/
│   └── index.ts
│
├── tests/
├── package.json
├── tsconfig.json
└── README.md