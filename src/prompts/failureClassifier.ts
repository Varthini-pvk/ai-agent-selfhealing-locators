export const FAILURE_CLASSIFIER_PROMPT = `
You are a Playwright failure classifier.

Classify the failure into one of:
- selector_failure
- assertion_failure
- timeout_failure
- network_failure
- unknown

Return ONLY valid JSON.

Schema:
{
  "failureType": "string"
}
`;