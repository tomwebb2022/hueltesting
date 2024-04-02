const { chromium } = require("playwright");
// installing playwright for testing purposes.

// Launch headless browser. Notes at bottom to make easy to read.
async function launchBrowser() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  return { browser, page };
}
// variable called browser. await as needed in binding function, chromium is the browser. headless is without GUI. headless set to 'false' so I can view what's going on

// Navigate to Huel homepage
async function navigateToHuel(page) {
  await page.goto("https://huel.com/");
}

// Search for Complete Protein Powder
async function searchProteinBar() {
  const { browser, page } = await launchBrowser();

  await navigateToHuel(page); //find out the difference between these two

  await page.click('[data-testid="IconLink-Search"]');

  // Wait for search bar to load
  await page.waitForSelector('[data-testid="SearchBar__input"]');

  //enter info to search bar
  await page.fill(
    '[data-testid="SearchBar__input"]',
    "Complete Protein Powder"
  );

  await page.press('[data-testid="SearchBar__input"]', "Enter");
  // select protein powder
  await page.click('[class="button"]');
  //choose Mint Chocolate
  await page.click('[data-testid="QuantitySelectorIncrease"]');
  await page.click('[data-testid="QuantitySelectorIncrease"]');
  // add to cart
  const button = await page.$('huel-button:has-text("Continue")');
  await button.click();
  // continue
  await button.click();
  // go back to search
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-testid="IconLink-Search"]'),
  ]);
  await page.waitForSelector('[data-testid="SearchBar__input"]');

  //enter info to search bar
  await page.fill('[data-testid="SearchBar__input"]', "Instant Meal Cup");
}
searchProteinBar();
