import { Page } from "@playwright/test"
export default class LoginPage {

    constructor(public page: Page){

    }

    async enterFirstName(email: string) {
        await this.page.locator("#input-email")
            .type(email);
    }

    async enterLastName(password: string) {
        await this.page.locator("#input-password")
            .type(password);
    }

    async clickLoginButton(){
        await this.page.click('input[value="Login"]')
    }
}