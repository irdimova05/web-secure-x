"use server";

import puppeteer from "puppeteer";
import { XSSSchema } from "./models/xss-schema.model";
import { fillLogin } from "@/lib/utils/fill-login.util";
import { openPage } from "@/lib/utils/open-page.util";

export async function submitBruteForceForm(data: XSSSchema) {
  const { page, browser } = await openPage();

  // Navigate the page to a URL
  await page.goto(data.loginUrl, { waitUntil: "networkidle0" });
  await page.waitForSelector(data.loginFieldSelector);

  await fillLogin(page, data, data.password);

  await page.waitForNetworkIdle();
  await page.goto(data.url, { waitUntil: "networkidle0" });
  await page
    .locator(data.fieldSelector)
    .fill("<script>alert('XSS attack success')</script>");
}
