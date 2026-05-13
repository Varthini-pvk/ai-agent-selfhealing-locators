# Day 2 — AI Failure Classifier

Built a simple AI-powered Playwright failure classifier using:

TypeScript
OpenAI SDK
Zod validation
Structured prompting

Input:

Playwright failure log

Output:

{
  "failureType": "selector_failure"
}
## 1. Structured Outputs

Learned why AI systems should return machine-readable JSON instead of free-form text.

Example:

```json
{
  "failureType": "selector_failure"
}
```

---

## 2. Deterministic Prompting

Learned how to constrain LLM outputs using:
- explicit instructions
- allowed categories
- JSON schema expectations

This improves:
- consistency
- predictability
- automation reliability

---

## 3. Temperature

Used:

```ts
temperature: 0
```

Learned:
- low temperature → stable outputs
- high temperature → creative/random outputs

AI agents usually prefer low temperature.

---

## 4. System vs User Prompts

Learned instruction hierarchy:

```txt
System Prompt
    ↓
User Prompt
```

Used system prompts to define agent behavior.

---

## 5. Schema Validation with Zod

Validated LLM responses using Zod.

Example:

```ts
z.object({
  failureType: z.enum([...])
})
```

Learned:
- runtime validation
- type safety
- fail-fast architecture

---

## 6. Type Inference

Learned:

```ts
z.infer<typeof schema>
```

to derive TypeScript types directly from schemas.

---

## 7. Environment Variable Management

Built centralized configuration using:
- `.env`
- `dotenv`
- `env.ts`

Implemented fail-fast config validation.

---

## 8. ESM / NodeNext Modules

Learned modern Node.js module system concepts:
- ESM
- NodeNext
- import/export
- import.meta.url
- path handling

---

## 9. tsx vs ts-node

Learned:
- `tsx` simplifies ESM execution
- `ts-node` + NodeNext can be complex
- modern projects often separate:
  - execution
  - type checking
  - builds

---

## 10. Error Handling Architecture

Implemented layered error handling:
- agent-level logging
- application-level error handling
- rethrowing strategy

---

# Architecture Learned

Current project structure:

```txt
src/
 ├── agents/
 ├── prompts/
 ├── logs/
 ├── workflows/
 ├── tools/
 └── index.ts
```

Learned separation of concerns:
- agents → AI reasoning
- prompts → AI instructions
- workflows → orchestration
- tools → external integrations

---

# Files Built

## Failure Classifier Agent

```txt
src/agents/failureClassifier.ts
```

Responsible for:
- calling OpenAI
- parsing responses
- validating schema

---

## Prompt Module

```txt
src/prompts/failureClassifier.ts
```

Contains deterministic system prompt.

---

## Environment Configuration

```txt
config/env.ts
```

Centralized environment variable handling.

---

## Application Entry Point

```txt
src/index.ts
```

Responsible for:
- reading logs
- running workflows
- top-level error handling

---

# Tools & Libraries Used

| Tool | Purpose |
|---|---|
| OpenAI SDK | LLM integration |
| TypeScript | type safety |
| Zod | schema validation |
| dotenv | environment variables |
| tsx | TS runtime execution |

---


# Next Steps

Build safer and more reliable AI outputs using:
- OpenAI structured outputs
- strict schemas
- validation-first design