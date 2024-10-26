import { z } from "zod";
import { loginSchema } from "../../../../lib/models/login-schema.model";

export const bruteForceSchema = loginSchema;

export type BruteForceSchema = z.infer<typeof bruteForceSchema>;
