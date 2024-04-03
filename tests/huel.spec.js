const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");
// installing playwright for testing purposes.
test("select 2 items for basket", async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  // Navigate to Huel
  await page.goto("https://uk.huel.com/");

  // add protein powder
  await page.click('[data-testid="IconLink-Search"]');
  await page.waitForSelector('[data-testid="SearchBar__input"]');
  await page.fill(
    '[data-testid="SearchBar__input"]',
    "complete protein powder"
  );
  await page.press('[data-testid="SearchBar__input"]', "Enter");
  //Select powder
  await page.click('a.button:has-text("Shop Powder")');
  // add coffee caramel
  await page.click(
    'button[aria-label="Coffee Caramel Increase Quantity"]',
    '[data-testid="QuantitySelectorIncrease"]'
  );
  await page.click(
    'button[aria-label="Salted Caramel Increase Quantity"]',
    '[data-testid="QuantitySelectorIncrease"]'
  );
  // accepted cookies as it prevented the ability to continue later on in the test
  await page.waitForSelector("#onetrust-accept-btn-handler");
  await page.click("#onetrust-accept-btn-handler");

  await page.waitForSelector('text="Continue"');
  await page.click('text="Continue"');
});
