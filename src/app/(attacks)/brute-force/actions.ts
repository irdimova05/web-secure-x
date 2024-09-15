"use server";

import { BruteForceSchema } from "./models/brute-force-from.model";

export async function submitBruteForceForm(data: BruteForceSchema) {
  console.log(data);
}
