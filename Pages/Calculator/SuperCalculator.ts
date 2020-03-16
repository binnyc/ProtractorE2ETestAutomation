import { browser, element, by } from 'protractor';

export class SuperCalculatorPage {
    //Objects
    txtFirstValue = element(by.model('first'));
    btnBankManagerLogin = element(by.xpath('//button[.="Bank Manager Login"]'));
    
    //Click on Register Link
    async setFirstValue(firstValue: string) {
            await this.txtFirstValue.sendKeys(firstValue);
        }

    async clickBankManagerLogin() {
        await this.btnBankManagerLogin.click();
    }
}
