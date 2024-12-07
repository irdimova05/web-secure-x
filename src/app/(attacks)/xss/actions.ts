"use server";

import puppeteer from "puppeteer";
import { XSSSchema } from "./models/xss-schema.model";
import { fillLogin } from "@/lib/utils/fill-login.util";
import { openPage } from "@/lib/utils/open-page.util";

export async function submitXSSForm(data: XSSSchema) {
  const { page, browser } = await openPage();

  // Navigate the page to a URL
  await page.goto(data.loginUrl, { waitUntil: "networkidle0" });
  await page.waitForSelector(data.loginFieldSelector);

  await fillLogin(page, data, data.password);

  await page.waitForNetworkIdle();
  await page.goto(data.url, { waitUntil: "networkidle0" });

  await page
    .locator(
      "body > div > main > div > div > section > div > form > div > div:nth-child(1) > input"
    )
    .fill("test");

  const xssText = "XSS attack success";
  let isXSSExecuted = false;

  await page
    .locator(data.fieldSelector)
    .fill(`<script>alert('${xssText}')</script>`);

  await page.locator(data.submitButtonSelector).click();

  page.on("dialog", async (dialog) => {
    if (dialog.message() === xssText) {
      isXSSExecuted = true;
    }
    await dialog.dismiss();
  });

  await page.waitForNetworkIdle();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await browser.close();

  if (!isXSSExecuted) {
    return { status: "Неуспешна атака" };
  }

  return {
    status: "Успешна атака",
  };
}
