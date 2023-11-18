import { test, expect, beforeEach } from "@playwright/test";
import mainRegistrationPage from "../pages/mainPage";
import { testData } from "../main/dataFile";
import userData from "../main/loginData.json";

test("Registration test_case 001", async ({ page}) => {
    const main = new mainRegistrationPage(page);
    const { email } = testData;
    await page.goto('/account/register');
    await main.registration();
    await expect(await main.getText())
        .toContain(`Account was successfully created. An email containing the instructions to activate your account was sent to ${email}`);
})

test("Login test_case 002", async ({ page}) => {
    const main = new mainRegistrationPage(page);
    await page.goto('/login');
    await main.login();
    expect(await main.checkMyAccountElementExists(page)).toBe(true);
    expect(await main.checkLogOutElementExists(page)).toBe(true);
    const isUserActive = await main.checkElementText(userData.loginName);
    expect(isUserActive).toBe(true);
})

test("Filtration test_case 003", async ({ page}) => {
    const main = new mainRegistrationPage(page);
    await page.goto('/');
    await main.filtration();
    const texts = await main.checkElementsForText();
    texts.forEach((text) => expect(text).toBe('Issues'));

})

// const subject = "The button doesn't work"
test("Creating test_case 004", async ({ page}) => {
    const main = new mainRegistrationPage(page);
    await page.goto('/login');
    await main.login();
    await page.goto('/');
    await main.newArticleCreation();
    const flashNotice = await main.getFlashNotice(page);
    await expect(await flashNotice.isVisible()).toBe(true);

})


const search_text = 'bug';
test("Searching test_case 005", async ({ page}) => {
    const main = new mainRegistrationPage(page);
    await page.goto('/');
    await main.enterSearch();
    const keyboard = page.keyboard;
    await keyboard.press('Enter');
    await main.checkAllElementsForBug();
})