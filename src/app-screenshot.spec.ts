import { toMatchImageSnapshot } from "jest-image-snapshot";
import puppeteer from "puppeteer";

jest.setTimeout(100000);
expect.extend({ toMatchImageSnapshot });

describe("App screenshot", () => {
  it("looks alright", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    const screenshot = await page.screenshot();
    await browser.close();
    expect(screenshot).toMatchImageSnapshot();
  });
});
