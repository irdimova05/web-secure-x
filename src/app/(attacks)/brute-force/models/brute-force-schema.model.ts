import { z } from "zod";
import { loginSchema } from "../../../../lib/models/login-schema.model";

export const bruteForceSchema = loginSchema.extend({
  resultsString: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
});

export type BruteForceSchema = z.infer<typeof bruteForceSchema>;
