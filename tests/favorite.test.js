import { test } from "@playwright/test"
import { pom } from "../pages/pom.page"


test("Verify user can not add items to Favorite in Logged out state. ", async ({ page }) => {
    const pageom = new pom(page)
    await pageom.goToHomePage()
    await pageom.chooseRestaurant()
    await pageom.likeIcon()
    await pageom.signInButtonS()
    await page.waitForURL("https://menu.am/en/auth-sign-in")
})

test("Verify user can add items to Favorite.", async ({ page }) => {
    const pageom = new pom(page)
    const { loginExport } = require("../exportFiles/loginExport")
    await loginExport({ page })
    await pageom.chooseRestaurant()
    await pageom.likeIcon()
    await pageom.userIcon()
    await pageom.favoritePage()
})

test("Verify user can remove items from Favorite.", async({ page }) => {
    const pageom = new pom(page)
    const { loginExport } = require("../exportFiles/loginExport")
    await loginExport({ page })
    await pageom.userIcon()
    await pageom.favoritePage()
    await pageom.removeLikeIcon()
    // In this stage are some updates and we need to pay 10dram for watching our favorite items
})