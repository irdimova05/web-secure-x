import { z } from "zod";

export const loginSchema = z.object({
  loginUrl: z
    .string({
      invalid_type_error: "Невалиден URL адрес.",
      required_error: "Полето е задължително.",
    })
    .url("Невалиден URL адрес.")
    .min(1, "Полето е задължително."),
  loginName: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
  loginFieldSelector: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
  passwordFieldSelector: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
  loginButtonSelector: z
    .string({
      invalid_type_error: "Полето съдържа невалидни данни.",
      required_error: "Полето е задължително.",
    })
    .min(1, "Полето е задължително."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
