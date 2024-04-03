const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");
// installing playwright for testing purposes.
test("select 2 items for basket", async () => {
  const browser = await chromium.launch({ timeout: 0 });

  const page = await browser.newPage();

  // Navigate to Huel
  await page.goto("https://uk.huel.com/");

  // add protein powder
  await page.click('[data-testid="IconLink-Search"]');
  await page.waitForSelector('[data-testid="SearchBar__input"]');
  await page.fill(
    '[data-testid="SearchBar__input"]',
    "complete protein powder",
    "Enter"
  );
  await page.click('[data-testid="SearchBar__input"]');

  await page.press('[data-testid="SearchBar__input"]', "Enter");
  // select protein powder
});
