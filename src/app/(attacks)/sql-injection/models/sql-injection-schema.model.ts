import { z } from "zod";
import { loginSchema } from "../../../../lib/models/login-schema.model";

export const SQLInjectionSchema = loginSchema.extend({
  url: z
    .string({
      invalid_type_error: "Невалиден URL адрес.",
      required_error: "Полето е задължително.",
    })
    .url("Невалиден URL адрес.")
    .min(1, "Полето е задължително."),
  password: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
  fieldSelector: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
  submitButtonSelector: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
    })
    .optional(),
  queryType: z.enum(["select", "insert", "update"]),
  resultsString: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
});

export type SQLInjectionSchema = z.infer<typeof SQLInjectionSchema>;
