import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';

const browser = await puppeteer.launch({ browser: 'firefox' });
const page = await browser.newPage();
await page.goto('https://www.tumblr.com/');
const data = await page.evaluate(async () => window.tumblr.getCssMap());
await browser.close();

await fs.writeFile(`utilities/cssmap.json`, JSON.stringify(data, null, 2));
