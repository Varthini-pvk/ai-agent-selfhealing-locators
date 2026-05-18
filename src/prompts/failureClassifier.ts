// src/prompts/classify-prompt.ts

export function buildFailureClassificationPrompt(
): string {
  return `
You are a Playwright test failure classifier.

Classify the failure into EXACTLY one category.

Categories:

1. selector_failure
Failures related to locating or interacting with elements.

Examples include:
- element not found
- locator mismatch
- stale selector
- strict mode violation
- DOM structure changed
- selector resolved to no element

2. timeout
Failures caused by operations exceeding allowed time limits.

Examples include:
- waitFor timeout
- navigation timeout
- test timeout
- element never became visible in time
- request exceeded timeout duration

3. assertion_failure
Failures where the test executed successfully but validation/assertion failed.

Examples include:
- expected text mismatch
- value mismatch
- visibility assertion failed
- API response assertion mismatch
- count assertion failed

4. backend_failure
Failures caused by server, API, database, or network issues.

Examples include:
- HTTP 5xx errors
- API failure responses
- database unavailable
- authentication service failure
- network connection issues

5. unknown
Use this category only when the failure does not clearly match any other category.

Field rules:

- failureType:
  Must be one of the defined categories.

- confidence:
  A number between 0 and 1 indicating classification certainty.
  Use higher values when the failure clearly matches a category.

- reason:
  A short technical reason based only on the failure log.
  Maximum 1 sentence.

Rules:
- Return ONLY valid JSON
- Do not explain outside JSON
- Do not use markdown
- Choose exactly one category

JSON format:
{
  "failureType": string,
  "confidence": number,
  "reason": string
}
`;
}