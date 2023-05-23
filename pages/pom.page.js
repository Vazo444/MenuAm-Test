// playwright-dev-page.js
const { expect } = require('@playwright/test');

// all numbers is temperery numbers and it can not work after some days
exports.pom = class pom {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page
    this.password = 'menu1234'
    this.logNumberAM = '2183924371'
    this.numberUS = '+12129458297'
    this.numberUK = '+380966218950'
    this.logMail = 'menu1234@yopmail.com'
    this.googleMail = 'menuam1234@gmail.com'
    this.googlePassword = 'Menu1234'
    this.searchInput = "//input[@placeholder='Search Restaurant, Shop, Item']"
  }

  // scroll
  async scroll() {
    const div = 'div[style="position: relative; height: 200px; width: 100%; overflow: auto; will-change: transform; direction: ltr;"]'
    await this.page.$eval(div, (el) => {
        el.scrollTo(0, 10500)
    })
  }

  // resgister.test.js
  async signUpButton() {
    await this.page.click("'Sign Up'")
  }
  async fillRegisterFields() {
    await this.page.fill("//input[@placeholder='55 12 34 56']", this.logNumberAM)
    await this.page.fill("//input[@placeholder='Enter your email address']", this.logMail)
    await this.page.fill("(//input[@placeholder='Enter your password'])[1]", this.password)
    await this.page.fill("(//input[@placeholder='Enter your password'])[2]", this.password)
  }
  async createAccountB() {
    await this.page.click("(//span[text()='Create Account'])[2]")
  }

  // login.test.js
  async goToHomePage() {
    await this.page.goto('https://menu.am/en')
  }
  async signInButtonH() {
    await this.page.click("'Sign In'")
  }
  async signInButtonS() {
    await this.page.click("(//span[text()='Sign In'])[2]")
  }
  async userIcon() {
    await this.page.click("(//button[@data-id='button'])[1]")
  }
  async accountSettings() {
    await this.page.click("//span[text()='Account Settings']")
  }
  async checkTerms() {
    await this.page.click("//span[@class='MuiIconButton-label']//input[1]")
  }
  async googleButton() {
    await this.page.click("'Google'")
  }
  async facebookButton() {
    await this.page.click("'Facebook'")
  }
  async numberButton() {
    await this.page.click('//*[@id="green-bg"]')
  }
  async changeCountry() {
    await this.page.getByRole('button', { name: 'flag +374' }).click()
  }
  async chooseUS() {
    await this.page.click("//span[text()='United States']")
  }

  // cart / favorite.test.js
  async verifyTheAddres() {
    await this.page.getByPlaceholder('Enter your address').fill('yeghishe Charents Street, 4')
    await this.page.getByRole('option', { name: 'Armenia, Yerevan, Yeghishe Charents Street, 4', exact: true }).click()
    await this.page.click("//span[text()='Confirm']")
  }
  async chooseRestaurant() {
    await this.page.click("//img[@alt='Muchacho']")
  }
  async cartIconItem() {
    await this.page.locator('div:nth-child(2) > div:nth-child(2) > div > .MuiPaper-root > .MuiCardContent-root > div:nth-child(2) > div:nth-child(2) > svg').first().click()
  }
  async cartIconNav() {
    await this.page.click("//button[@aria-label='basket']")
  }
  async likeIcon() {
    await this.page.click("(//span[@data-id='favoriteIcon'])[1]")
  }
  async favoritePage() {
    await this.page.click("(//span[contains(@class,'MuiTypography-root MuiListItemText-primary')])[2]")
  }
  async removeLikeIcon() {
    await this.page.click("//span[@data-id='favoriteIcon']")
  }

  // signOut.test.js
  async signOutButton() {
    await this.page.click("'Sign Out'")
  }

  // resetPassword.test.js
  async forgotPasswordButton() {
    await this.page.click("//a[contains(text(),'Forgot Password?')]")
  }
  async sendVeryficationCodeB() {
    await this.page.click("//span[text()='Send verification code']")
  }
  async verificationButton() {
    await this.page.click("//span[text()='Verify']")
  }
  async newPassword() {
    await this.page.fill("//input[@placeholder='New Password']", 'menu1234')
    await this.page.fill("//input[@placeholder='Confirm Password']", 'menu1234')
    await this.page.click("(//span[text()='Confirm Password'])[2]")
  }
  async fillNumber() {
    await this.page.fill("//input[@placeholder='55 12 34 56']", this.logNumberAM)
  }
}