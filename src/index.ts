import puppeteer from "puppeteer";
import path from "path";
import { random } from "lodash";
import dayjs from "dayjs";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    //"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto(
    `https://s.yimg.com/nb/tw_stock_frontend/scripts/TseChart/TseChart.eb1b267900.html?sid=TSE`
  );
  await page.screenshot({
    path: path.resolve(
      `./screenshots/${dayjs().format("YYYY-MM-DD HH:mm:ss")}.png`
    ),
  });
  await page.close();
})();
