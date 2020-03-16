import { browser, element, by } from 'protractor';

export class HomePage {
    //Objects
    btnCustomerLogin = element(by.xpath('//button[.="Customer Login"]'));
    btnBankManagerLogin = element(by.xpath('//button[.="Bank Manager Login"]'));
    
    //Click on Register Link
    async clickCustomerLogin() {
        await this.btnCustomerLogin.click();
    }

    async clickBankManagerLogin() {
        await this.btnBankManagerLogin.click();
    }
}
