 export const failureTypes = [
  "selector_failure",
  "timeout",
  "assertion_failure",
  "backend_failure",
  "unknown"
] as const;

export type FailureType =
  typeof failureTypes[number];