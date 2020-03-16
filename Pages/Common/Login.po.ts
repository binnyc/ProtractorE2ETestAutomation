import { browser, element, by } from 'protractor';

export class LoginPage {
    //Objects
    txtUserID = element(by.model('name'));
    txtPassword = element(by.id('password'));
    btnLogin = element(by.xpath('//button[@id="submit"]'));
    btnLogOff = element(by.xpath('//span[text()="Log Off"]'));
    lblLoginMsg = element(by.xpath('//div[@id="myMessage"]//p[@class="ng-binding ng-scope"]'));
    btnClosePopup = element(by.xpath('/html//div[@id="myMessage"]//button[@type="button"]'));

    async setUserID(userID: string) {
        await this.txtUserID.sendKeys(userID);
    }

    async setUserPassword(userPassword: string) {
        await this.txtPassword.sendKeys(userPassword);
    }

    async clickLoginBtn() {
        await this.btnLogin.click();
    }

    //Login using the default user id and password
    async DefaultLogin() {
        browser.getProcessedConfig().then(async () => {
            this.setUserID(browser.params.login.defaultUserID);
            this.setUserPassword(browser.params.login.defaultPassword);
        })
        this.clickLoginBtn();
        expect(await this.btnClosePopup.isPresent()).toBe(true);
    }

    //Method to pass user id and password to login to the application
    async LoginWithUseridAndPwd(userID: string, userPassword: string) {
        this.setUserID(userID);
        this.setUserPassword(userPassword);
        this.clickLoginBtn();
        expect(await this.btnLogOff.isPresent()).toBe(true);
    }

    //Method to validate the popup message for successful login
    async ValidateLoginMessage(message: string) {
        let messageText = this.lblLoginMsg.getAttribute('innerText');
        expect(await messageText).toContain(message);
    }
}
