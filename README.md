<h2>Hello and welcome to my Playwright script for my tech test.</h2>

Before you continue...

If you've seen the film Social Network directed by David Fincher, you may remember the scene of Mark Zuckerberg hacking into Harvard's facebooks and blogging about the process at the same time with an excellent music score.
Well, reading my process is best when listened to the same score - **https://www.youtube.com/watch?v=x5faT66jmG4**

So let's start!

I was tasked to write a Playwright script using Python, JavaScript, or Typescript that simulates adding two items to the basket on huel.com.

I went with Javascript as that's what I'm most familiar with it but would love to have the opportunity to tackle similar tests in Typescript and Python

I had some interesting experiences with Playwright and had to do some tweaks to try and get my testing set up as smooth as possible. After I was happy with the script I then went back and undid the tweaks.

**The tweaks:**

Although the final test is a headless browser I ran my tests ({ headless: false});
So I could see the pathway the script was taking. It also looked like someone was hacking me to order some Huel on my behalf. Obviously this is unethical and I have no plans to put that idea forward to the marketing team, but still a fun thought.

The script automatically closed the browser;
This was frustrating as sometimes I didn't know what was coming next. I tried a few differenet thing but as I wanted to get started, I instead had a chrome private tab open, and followed a long to what the script was doing, I then continued to see find what I needed to do next.

I didn't want to be running more tests than necessary;
So I searched through playwright.config.js and commented out webkit and firefox. I'm a firefox user myseld but there are better dev tools on chrome hence the choice to stick with Chromium.

The website ran slower in the middle of the day when running tests;
That's when I usually had a break to give the website a chance to chill.

Struggling with loading times due to location popups;
I used https://uk.huel.com/ for speed, created my script.
However, after completing the script I edited the code to navigate to https://huel.com as that was the initial website requested in the brief.

**Requirements:**
● Write a Playwright script (~~Python~~, JavaScript, or ~~Typescript~~) that simulates adding two items to the basket on huel.com.

● The script should:
○ Launch a headless browser (Chrome, Chromium, or Firefox) ✔
○ Navigate to the Huel homepage (https://huel.com/) ✔
○ Search for a specific product (e.g., "Complete Protein Powder")✔
○ Add the searched product to the basket using Playwright interactions (e.g., click buttons,
select options)✔
_I had an issue with this part as I was unable to search and enter the next product due to the cross sell page. I got around this by continuing to basket and then searching for the product._
○ Repeat the search and add another product with a different flavor (e.g., search for "Vegan
Protein Bars", choose a flavor)✔
_As this wasn't an item as of yet I searched for Nutrition bars. I had a lot of issues selecting the 12 bar box until I manually tested it myself to realise that **clicking Shop Now on 'Single Huel Complete Nutrition Bar Box' would take me to the main page and not add to my basket**_
● After adding both items, the script should verify that at least two items are present in the basket.✔
_This took me a while, I ended up selecting CartMixAndMatchBundle\_\_items to confirm item count_

**Before you go...**

Orignally I wrote multiple async function to tackle each tasks. Later, I realised that for such a simple task I should run one test.

I originally wanted to leave the cookie pop up but it seemed the script didn't allow me to click "continue" after picking a product so I went through my code and added the scrip to accept cookes almost as soon as the page loaded.
