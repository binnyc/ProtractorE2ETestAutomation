import { browser, element, by, $, $$, protractor } from 'protractor';

export class DropdownPage {
    //Objects
    drpdwnCountry = element(by.model('myCountry'));
    btnSubmit = element(by.id('submit'));
    lblCountrySelectionMsg = element(by.xpath('//div[@class="col-sm-12"]/p[@class="ng-binding ng-scope"]'))

    //Select appropriate value from the dropdown
    async selectCountry(countryToSelect: string) {
        await this.drpdwnCountry.$('[value="' + countryToSelect + '"]').click();
    }

    //Click on Submit button
    async clickSubmitBtn() {
        await this.btnSubmit.click();
    }

    async ValidateCountrySelectionMessage(message: string) {
        let messageText = this.lblCountrySelectionMsg.getAttribute('innerText');
        expect(await messageText).toContain(message);
    }
}
