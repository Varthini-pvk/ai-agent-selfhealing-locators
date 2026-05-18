import { FailureClassification }
  from "../schemas/failureClassificationSchema.js"

export type ClassifiedFailure = {
    failureSnippet: string;
    classification: FailureClassification;
};