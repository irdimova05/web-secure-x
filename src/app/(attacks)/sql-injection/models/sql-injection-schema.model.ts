import { z } from "zod";

export const SQLInjectionSchema = z.object({
  url: z
    .string({
      invalid_type_error: "Невалиден URL адрес.",
      required_error: "Полето е задължително.",
    })
    .url("Невалиден URL адрес.")
    .min(1, "Полето е задължително."),
  headers: z
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
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
});

export type SQLInjectionSchema = z.infer<typeof SQLInjectionSchema>;
