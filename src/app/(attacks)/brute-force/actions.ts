"use server";

import { BruteForceSchema } from "./models/brute-force-schema.model";

export async function submitBruteForceForm(data: BruteForceSchema) {
  console.log(data);
}
