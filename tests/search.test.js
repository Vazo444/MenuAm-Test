import { test } from "@playwright/test";
import { pom } from "../pages/pom.page";

test("Verify user can Search the 'Restaurants and Shops'", async({ page }) => {
    const pageom = new pom(page)
    await pageom.goToHomePage()
    await page.click(pageom.searchInput)
    await page.fill(pageom.searchInput, 'Ker u sus')
    await page.getByRole('option', { name: 'Ker u sus', exact: true }).click()
    await page.click(pageom.searchInput)
    await page.fill(pageom.searchInput, 'Ker u sus')
    await page.click("//span[text()='Search']")
})