import { Page, expect } from "@playwright/test";
import * as locators from "./locators";

export default class MainRegistrationPage{
    constructor(page) {
        this.page = page;
    }
    async enterLogin(login) {
        await locators.USER_LOGIN(this.page).type(login);
    }
    async enterPassword(password) {
        await locators.USER_PASSWORD(this.page).type(password);
    }
    async enterConfirmationPassword(password) {
        await locators.USER_PASSWORD_CONFIRMATION(this.page).type(password);
    }
    async enterFirstName(name) {
        await locators.USER_FIRST_NAME(this.page).type(name);
    }
    async enterLastName(name) {
        await locators.USER_LAST_NAME(this.page).type(name);
    }
    async enterEmail(email) {
        await locators.USER_EMAIL(this.page).type(email);
    }
    async clickLoginButton() {
        await locators.SUBMIT_BUTTON(this.page).click();
    }
    async getLoginValue() {
        return locators.USER_LOGIN(this.page).inputValue();
    }
    async getPasswordInfo() {
        const passwordField = locators.USER_PASSWORD(this.page);
        return {
            value: await passwordField.inputValue(),
            type: await passwordField.getAttribute('type')
        };
    }
    async getConfirmationInfo() {
        const confirmationField = locators.USER_PASSWORD_CONFIRMATION(this.page);
        return {
          value: await confirmationField.inputValue(),
          type: await confirmationField.getAttribute('type')
        };
    }
    async getFirstName() {
        return locators.USER_FIRST_NAME(this.page).inputValue();
    }
    async getLastName() {
        return locators.USER_LAST_NAME(this.page).inputValue();
    }
    async getEmail() {
        return locators.USER_EMAIL(this.page).inputValue();
    } 
    async getText() {
        return locators.FLASH_NOTICE(this.page).textContent();
    }
    async enterLoginInLoginPage(login) {
        await locators.LOGIN_PAGE_LOGIN(this.page).type(login);
    }
    async enterPasswordInLoginPage(login) {
        await locators.LOGIN_PAGE_PASSWORD(this.page).type(login);
    }
    async getLoginInLoginPage() {
        return locators.LOGIN_PAGE_LOGIN(this.page).inputValue();
    }
    async getPasswordINLoginPage() {
        const passwordField = locators.LOGIN_PAGE_PASSWORD(this.page);
        return {
            value: await passwordField.inputValue(),
            type: await passwordField.getAttribute('type')
        };
    }
    async clickButtonInLoginPage() {
        await locators.LOGIN_PAGE_BUTTON(this.page).click();
    }
    async checkMyAccountElementExists(page){
        const myAccountLink = await locators.LOGIN_MY_ACCOUNT_BUTTON(this.page);
        return myAccountLink !== null;
    }
    async checkLogOutElementExists(page) {
        const myAccountLink = await locators.LOGIN_LOGOUT_BUTTON(this.page);
        return myAccountLink !== null;
    }
    async checkElementText(page, expectedText) {
        const element = await locators.LOGIN_USER_BUTTON(this.page);
        if (element !== null) {
            const elementText = await element.textContent();
            return elementText === expectedText;
        } else {
            return false; 
        }
    }
    async clickIssuesButton() {
        await locators.ISSUES_BUTTON(this.page).click();
    }
    async clickCategoryButton() {
        await locators.FILTER_ADD_FILTER(this.page).selectOption('category_id');
    }
    async checkLabelPresence() {
        await expect(await locators.FILTER_CATEGORY_LABEL(this.page)).toBeTruthy();
    }
    async checkSelectElementsExist() {
        await expect(await locators.FILTER_FIRST_DROPDOWN_LIST(this.page)).toBeTruthy();
        await expect(await locators.FILTER_SECOND_DROPDOWN_LIST(this.page)).toBeTruthy();
    }
    async selectIsOption() {
        await locators.FILTER_FIRST_DROPDOWN_LIST(this.page).selectOption('=');  
    }
    async selectIssuesValue() {
        const dropdown = await this.page.$('select#values_category_id_1');
        if (dropdown) {
          await dropdown.selectOption('2'); 
        }
    }
    async clickApplyButton() {
        await locators.FILTER_APPLY_BUTTON(this.page).click();
    }
    async checkElementsForText(expectedText) {
        const elements = await this.page.$$('td.category');
      
        const texts = [];
        for (const element of elements) {
          const text = await element.textContent();
          if (text !== null) {
            texts.push(text);
            return texts;
          }
        }
    } 
    async enterSearch(text) {
        await locators.SEARCH_FIELD(this.page).type(text);
    }
    async getSearchFieldValue() {
        return locators.SEARCH_FIELD(this.page).inputValue();
    }
    async checkAllElementsForBug() {
        await this.page.waitForSelector('span.highlight.token-0');
        const elements = await this.page.$$('span.highlight.token-0');
      
        for (const element of elements) {
          const text = (await element.innerText()).toLowerCase();
          expect(text).toBe('bug');
        }
      }
    async clickNewIssuesButton() {
        await locators.CREATE_NEW_ISSUE(this.page).click();
    }
    async enterSubject(name) {
        await locators.CREATE_SUBJECT_FIELD(this.page).type(name);
    }
    async getSubjectValue() {
        return locators.CREATE_SUBJECT_FIELD(this.page).inputValue();
    }
    async clickStatus(){
        const dropdown = await locators.CREATE_STATUS(this.page);
        await dropdown.selectOption({ value: '3' });
    }
    async clickCreateButton() {
        await locators.CREATE_BUTTON(this.page).click();
    }
}
