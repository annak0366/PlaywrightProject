import { Page, expect } from "@playwright/test";
import { testData } from "../main/dataFile";
import userData from "../main/loginData.json";
import * as locators from "../main/locators";
const subject = "The button doesn't work";
const search_text = 'bug';

export default class MainRegistrationPage{
    constructor(page) {
        this.page = page;
    }
    async registration(){
        const { loginName, password, firstName, lastName, email } = testData;
        await locators.USER_LOGIN(this.page).type(loginName);
        await locators.USER_PASSWORD(this.page).type(password);
        await locators.USER_PASSWORD_CONFIRMATION(this.page).type(password);
        await locators.USER_FIRST_NAME(this.page).type(firstName);
        await locators.USER_LAST_NAME(this.page).type(lastName);
        await locators.USER_EMAIL(this.page).type(email);
        await locators.SUBMIT_BUTTON(this.page).click();
    }
  
    async login(){
        await locators.LOGIN_PAGE_LOGIN(this.page).type(userData.loginName);
        await locators.LOGIN_PAGE_PASSWORD(this.page).type(userData.password);
        await locators.LOGIN_PAGE_BUTTON(this.page).click();
    }

    async getText() {
        return locators.FLASH_NOTICE(this.page).textContent();
    }
    
    async checkMyAccountElementExists(page){
        const myAccountLink = await locators.LOGIN_MY_ACCOUNT_BUTTON(this.page);
        return myAccountLink !== null;
    }
    async checkLogOutElementExists(page) {
        const myAccountLink = await locators.LOGIN_LOGOUT_BUTTON(this.page);
        return myAccountLink !== null;
    }
    async checkElementText(expectedText) {
        const element = await locators.LOGIN_USER_BUTTON(this.page);
        if (element !== null) {
            const elementText = await element.textContent();
            return elementText === expectedText;
        } else {
            return false; 
        }
    }

    async newArticleCreation(){
        await locators.ISSUES_BUTTON(this.page).click();
        await locators.CREATE_NEW_ISSUE(this.page).click();
        await locators.CREATE_SUBJECT_FIELD(this.page).type(subject);
        const dropdown = await locators.CREATE_STATUS(this.page);
        await dropdown.selectOption({ value: '3' });
        await locators.CREATE_BUTTON(this.page).click();
    }
    async getFlashNotice(page) {
        return await locators.CREATE_FLASH_NOTICE(page);
      }

    async filtration(){
        await locators.ISSUES_BUTTON(this.page).click();
        await locators.FILTER_ADD_FILTER(this.page).selectOption('category_id');
        await locators.FILTER_FIRST_DROPDOWN_LIST(this.page).selectOption('=');  
        const dropdown = await this.page.$('select#values_category_id_1');
        if (dropdown) {
          await dropdown.selectOption('2'); 
        }
        await locators.FILTER_APPLY_BUTTON(this.page).click();
    }

    async checkElementsForText() {
        const elements = await this.page.$$('td.category');
        const texts = [];
        for (const element of elements) {
          const text = await element.textContent();
          if (text !== null) {
            texts.push(text);
          }
        }
        return texts;
      }
    
    async enterSearch() {
        await locators.SEARCH_FIELD(this.page).type(search_text);
    }

    
    async checkAllElementsForBug() {
        await this.page.waitForSelector('span.highlight.token-0');
        const elements = await this.page.$$('span.highlight.token-0');

        for (const element of elements) {
          const text = (await element.innerText()).toLowerCase();
          expect(text).toBe(search_text);
        }
      }
}