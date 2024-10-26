import puppeteer from "puppeteer";

export async function openPage() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const pages = await browser.pages();
  const page = pages[0];

  return {
    page,
    browser,
  };
}
