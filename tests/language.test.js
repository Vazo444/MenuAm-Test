import { test } from "@playwright/test";
import { pom } from "../pages/pom.page";

test("Verify user can change the language", async ({ page }) => {
    const pageom = new pom(page)
    await pageom.goToHomePage()
    await page.click("//button[@data-id='languages']")
    await page.click("(//li[contains(@class,'MuiButtonBase-root MuiListItem-root')]/following-sibling::li)[1]")
    await page.click("//button[@data-id='languages']")
    await page.click("//ul[@data-id='language-list']//li[1]")
})