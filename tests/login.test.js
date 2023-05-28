import { expect, test } from "@playwright/test";
import { pom } from "../pages/pom.page"

const { updateTestRunStatus } = require('./../testrail');


test("Verify the user can sign in via Phone number.", async ({ page }) => {
    // const testRunName = 'Automated Test Run';
    // const testRunDescription = 'Automated test run description';
    // const testCaseIds = [38, 39, 40]; // Replace with the actual TestRail test case IDs
    // await createTestRun(testRunName, testRunDescription, testCaseIds);

    const pageom = new pom(page)
    await pageom.goToHomePage()
    await pageom.signInButtonH()
    await pageom.numberButton()
    await pageom.changeCountry()
    await pageom.scroll()
    await pageom.chooseUS()
    await page.fill("input[placeholder='Enter your mobile number']", pageom.logNumberAM)
    await page.fill("input[placeholder='Enter your password']", pageom.password)
    await pageom.signInButtonS()
    await pageom.userIcon()
    await pageom.accountSettings()
    const number = page.locator("(//span[text()='Phone Number']/following::input)[1]")
    await expect(number).toHaveValue("+1" + pageom.logNumberAM)

        const testStatus = 'passed'; // Replace with the appropriate test status
        updateTestRunStatus(3, testStatus);
})
// +12183924371
// https://receive-smss.live/messages?n=12183924371

test("Verify the user can sign in via Email address.", async ({ page }) => {
    const pageom = new pom(page)

    await pageom.goToHomePage()
    await pageom.signInButtonH()
    await page.fill("//input[@placeholder='Enter your email address']", pageom.logMail)
    await page.fill("input[placeholder='Enter your password']", pageom.password)
    await pageom.signInButtonS()
    await pageom.userIcon()
    await pageom.accountSettings()
    const mail = page.locator("(//span[text()='Email']/following::input)[1]")
    await expect(mail).toHaveValue(pageom.logMail)
})

test("Verify user can sign in with Google Accounte", async ({ page }) => {
    const pageom = new pom(page)
    await pageom.goToHomePage()
    await pageom.signInButtonH()
    await pageom.googleButton()
    await pageom.checkTerms()
    await page.waitForTimeout(4000)
    await pageom.googleButton()
    const page1Promise = page.waitForEvent('popup')
    const page1 = await page1Promise
    await page1.getByRole('textbox', { name: 'Email or phone' }).fill(pageom.googleMail)
    await page1.getByRole('button', { name: 'Next' }).click()
    await page1.getByRole('textbox', { name: 'Enter your password' }).fill(pageom.googlePassword)
    await page1.getByRole('button', { name: 'Next' }).click()
    await page.waitForTimeout(6000)
    if(page.url() === "https://menu.am/en/auth-phone-verification/false/true"){
        const page3 = await context.newPage()
        await page3.goto("https://anonymsms.com/number/12129458297/")
        const text = (await page3.locator("td:has-text('Your Menu verification code is ')").innerText()).valueOf()
        const sms = text.slice(-5, -1)
        await page.getByRole('spinbutton').first().fill(sms)
        await page.getByRole('button', { name: 'Verify' }).click()
    }else{
        await page.waitForURL("https://menu.am/en")
        await pageom.userIcon()
        await pageom.accountSettings()
        const number = page.locator("(//span[text()='Phone Number']/following::input)[1]")
        const mail = page.locator("(//span[text()='Email']/following::input)[1]")
        await expect(number).toHaveValue(pageom.numberUS)
        await expect(mail).toHaveValue(pageom.googleMail)
    }
    // https://anonymsms.com/number/12129458297/
    // https://menu.am/en/auth-phone-verification/false/true
    // +12129458297
})

test("Verify user can sign in with Facebook", async ({ context, page }) => {
    const pageom = new pom(page)
    await pageom.goToHomePage()
    await pageom.signInButtonH()
    await pageom.facebookButton()
    await pageom.checkTerms()
    await page.waitForTimeout(4000)
    await pageom.facebookButton()
    const page2Promise = page.waitForEvent('popup')
    const page2 = await page2Promise
    await page2.locator('#email').fill('+37499233262')
    await page2.locator('#pass').fill('vsvn0403')
    await page2.getByLabel('Log in').click()
    await page.waitForTimeout(7000)
    if(page.url() === "https://menu.am/en/auth-phone-verification/false/true"){
        const page3 = await context.newPage()
        await page3.goto("https://anonymsms.com/number/380966218950/")
        const text = (await page3.locator("td:has-text('Your Menu verification code is ')").innerText()).valueOf()
        const sms = text.slice(-5, -1)
        await page.getByRole('spinbutton').first().fill(sms)
        await page.getByRole('button', { name: 'Verify' }).click()
    }else{
        await page.waitForURL("https://menu.am/en")
        await pageom.userIcon()
        await pageom.accountSettings()
        const number = page.locator("(//span[text()='Phone Number']/following::input)[1]")
        await expect(number).toHaveValue(pageom.numberUK)
    }
    // +380966218950
    // https://anonymsms.com/number/380966218950/
})
