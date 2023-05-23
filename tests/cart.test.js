import { test } from "@playwright/test";
import { pom } from "../pages/pom.page";

test("Verify the user can use 'Cart' functionality.", async ({ page }) => {
    const pageom = new pom(page)
    const { loginExport } = require("../exportFiles/loginExport")
    await loginExport({ page })
    await pageom.verifyTheAddres()
    await pageom.chooseRestaurant()
    await pageom.cartIconItem()
    await pageom.cartIconNav()
    await page.click("//button[text()='+']")
    await page.click("//button[text()='-']")
    await page.click("//button[text()='-']")
})

test("Verify user can Remove all carted items", async ({ page }) => {
    const pageom = new pom(page)
    const { loginExport } = require("../exportFiles/loginExport")
    await loginExport({ page })
    await pageom.verifyTheAddres()
    await pageom.chooseRestaurant()
    await pageom.cartIconItem()
    await pageom.cartIconNav()
    await page.getByText('Remove All').click();
    await page.getByRole('button', { name: 'Remove' }).click()
})

