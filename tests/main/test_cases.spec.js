import { test, expect } from "@playwright/test";
import mainRegistrationPage from "./mainPage";
import { testData } from "./dataFile";
import userData from "./loginData.json";
import * as locators from "./locators";
test("Registration test_case 001", async ({ page}) => {
    const registration = new mainRegistrationPage(page);
    await page.goto('https://www.redmine.org/account/register');
    const { loginName, password, firstName, lastName, email } = testData; 
    await registration.enterLogin(loginName);
    await expect(await registration.getLoginValue()).toBe(loginName);
    await registration.enterPassword(password);
    const passwordInfo = await registration.getPasswordInfo();
    await expect((passwordInfo).value).toBe(password);
    await expect((passwordInfo).type).toMatch('password');
    await registration.enterConfirmationPassword(password);
    const confirmationInfo = await registration.getPasswordInfo();
    await expect(confirmationInfo.value).toBe(password);
    await expect(confirmationInfo.type).toMatch('password');
    await registration.enterFirstName(firstName);
    await expect(await registration.getFirstName()).toBe(firstName);
    await registration.enterLastName(lastName);
    await expect(await registration.getLastName()).toBe(lastName);
    await registration.enterEmail(email);
    await expect(await registration.getEmail()).toBe(email);
    await registration.clickLoginButton();
    await expect(await registration.getText())
        .toContain(`Account was successfully created. An email containing the instructions to activate your account was sent to ${email}`);
})
test("Login test_case 002", async ({ page}) => {
    const login = new mainRegistrationPage(page);
    await page.goto('https://www.redmine.org/login');
    await login.enterLoginInLoginPage(userData.loginName);
    await expect(await login.getLoginInLoginPage()).toBe(userData.loginName);
    await login.enterPasswordInLoginPage(userData.password);
    await expect((await login.getPasswordINLoginPage()).value).toBe(userData.password);
    await expect((await login.getPasswordINLoginPage()).type).toMatch('password');
    await login.clickButtonInLoginPage();
    expect(await login.checkMyAccountElementExists(page)).toBe(true);
    expect(await login.checkLogOutElementExists(page)).toBe(true);
    const isUserActive = await login.checkElementText(page, userData.loginName);
    await expect(isUserActive).toBe(true);
})
test("Filtration test_case 003", async ({ page}) => {
    const filter = new mainRegistrationPage(page);
    await page.goto('https://www.redmine.org/');
    await filter.clickIssuesButton();
    await filter.clickCategoryButton();
    await filter.checkLabelPresence();
    await filter.checkSelectElementsExist();
    await filter.selectIsOption();
    await filter.selectIssuesValue();
    await filter.clickApplyButton();
    const texts = await filter.checkElementsForText('Issues');
    if (texts !== undefined) {
        for (const text of texts) {
            expect(text).toBe('Issues');
        }
    }
})
const subject = "The button doesn't work"
test("Creating test_case 004", async ({ page}) => {
    const create = new mainRegistrationPage(page);
    await page.goto('https://www.redmine.org/login');
    await create.enterLoginInLoginPage(userData.loginName);
    await create.enterPasswordInLoginPage(userData.password);
    await create.clickButtonInLoginPage();
    await page.goto('https://www.redmine.org/');
    await create.clickIssuesButton();
    await create.clickNewIssuesButton();
    await create.enterSubject(subject);
    await expect(await create.getSubjectValue()).toBe(subject);
    await create.clickStatus();
    await create.clickCreateButton();
    const flashNotice = await locators.CREATE_FLASH_NOTICE(page);
    await expect(flashNotice).toBeVisible();
})
const search_text = 'bug';
test("Searching test_case 005", async ({ page}) => {
    const search = new mainRegistrationPage(page);
    await page.goto('https://www.redmine.org/');
    await search.enterSearch(search_text);
    await expect(await search.getSearchFieldValue()).toBe(search_text);
    const keyboard = page.keyboard;
    await keyboard.press('Enter');
    await search.checkAllElementsForBug();
})
