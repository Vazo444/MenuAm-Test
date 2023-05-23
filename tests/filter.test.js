import { test } from "@playwright/test";
import { pom } from "../pages/pom.page";


test("Verify user can use the Filter", async({ page }) => {
    const pageom = new pom(page)
    await pageom.goToHomePage()
    await page.click("//span[text()='24/7']")
    await page.click("//span[text()='Breakfast']")
    await page.click("//span[text()='Beer House and Pub']")
    await page.click("(//div[@role='button'])[3]")
    await page.click("(//div[@role='button'])[2]")
    await page.click("//div[@role='button']")
})