import { z } from "zod";

import {
  failureTypes
} from "../types/failure.js";

export const failureClassificationSchema =
  z.object({

    failureType:
      z.enum(failureTypes),

    confidence:
      z.number()
       .min(0)
       .max(1),

    reason:
      z.string()
       .min(1)
  });

export type FailureClassification =
  z.infer<
    typeof failureClassificationSchema
  >;