import { test } from "@playwright/test"
import { pom } from "../pages/pom.page"


test("Verify user can Sign Out ", async ({ page }) => {
    const pageom = new pom(page)
    const { loginExport } = require("./../exportFiles/loginExport")
    await loginExport({ page })
    await pageom.userIcon()
    await pageom.signOutButton()
    await page.waitForURL("https://menu.am/en")
})