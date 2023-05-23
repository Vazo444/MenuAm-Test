const { test } = require("@playwright/test");
const { pom } = require("../pages/pom.page");

module.exports = {
  loginExport: async ({ page }) => {
    const pageom = new pom(page)
    await pageom.goToHomePage()
    await pageom.signInButtonH()
    await page.click('//*[@id="green-bg"]')
    await pageom.changeCountry()
    await pageom.scroll()
    await pageom.chooseUS()
    await page.fill("input[placeholder='Enter your mobile number']", pageom.logNumberAM)
    await page.fill("input[placeholder='Enter your password']", pageom.password)
    await pageom.signInButtonS()
  }
};