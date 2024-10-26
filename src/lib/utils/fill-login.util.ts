import { Page } from "puppeteer";
import { LoginSchema } from "../models/login-schema.model";

export async function fillLogin(
  page: Page,
  data: LoginSchema,
  password: string
) {
  await page.locator(data.loginFieldSelector).fill(data.loginName);
  await page.locator(data.passwordFieldSelector).fill(password);

  await page.locator(data.loginButtonSelector).click();
}
