const { chromium } = require("playwright");
const { test } = require("@playwright/test");
// installing playwright for testing purposes.
test("select 2 items for basket", async () => {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();

  // Navigate to Huel
  await page.goto("https://huel.com/");
  //accept location to relocate to uk.huel.com
  await page.click("a.button.is-success");

  //accept cookies
  await page.waitForSelector("#onetrust-accept-btn-handler");
  await page.click("#onetrust-accept-btn-handler");

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
  await page.click('button[aria-label="Coffee Caramel Increase Quantity"]');
  await page.click('button[aria-label="Salted Caramel Increase Quantity"]');

  //Continue to frequency selection
  await page.waitForSelector('text="Continue"');
  await page.click('text="Continue"');

  // One Time Purchase
  await page.click('text="One Time Purchase"');

  //click continue
  await page.waitForSelector('text="Continue"');
  await page.click('text="Continue"');

  //Continue you to basket due to "Before you go page" stopping the test
  await page.waitForSelector('button:has-text("Continue To Basket")');
  await page.click('button:has-text("Continue To Basket")');

  // search for nutrition bar
  await page.click('[data-testid="IconLink-Search"]');
  await page.waitForSelector('[data-testid="SearchBar__input"]');
  await page.fill('[data-testid="SearchBar__input"]', "nutrition bar");
  await page.click('[data-testid="SearchBar__submit-button"]');

  // Select nutrition bar
  await page.waitForSelector(
    'a.button:has-text("Shop Complete Nutrition Bar")'
  );
  await page.click('a.button:has-text("Shop Complete Nutrition Bar")');

  //Select  Chocolate Caramel
  await page.click('button[aria-label="Chocolate Caramel Increase Quantity"]');
  //click continue
  await page.waitForSelector('text="Continue"');
  await page.click('text="Continue"');
  // One Time Purchase
  await page.click('text="One Time Purchase"');
  //click continue
  await page.waitForSelector('text="Continue"');
  await page.click('text="Continue"');
  //Continue you to basket
  await page.waitForSelector('button:has-text("Continue To Basket")');
  await page.click('button:has-text("Continue To Basket")');

  //console

  console.log("How many items in the basket?");

  // Wait for the CartMixAndMatchBundle__items element to be present
  await page.waitForSelector(".CartMixAndMatchBundle__items");

  // Found CartMixAndMatchBundle__items element in the dev tools and can't seem to find anything else that would help
  const listItems = page.locator(".CartMixAndMatchBundle__items > li");

  // count items
  const itemCount = await listItems.count();

  // Log the count of list items
  console.log(`Number of items in basket: ${itemCount}`);

  //secure checkout to confirm what is in the basket
  await page.waitForSelector('button:has-text("Secure Checkout")');
  await page.click('button:has-text("Secure Checkout")');

  // Close the browser
  await browser.close();
});
//
