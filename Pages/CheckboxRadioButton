import { browser, element, by } from 'protractor';

export class CheckboxRadioButtonPage {
    async selectRadioButton(valueToSelect: string) {
        console.log("Button to select is: "+valueToSelect);
        let btnRadioOption = element(by.xpath('//form[@class="ng-pristine ng-valid"]//label[.="'+valueToSelect+'"]'));
        await btnRadioOption.click();
        await expect(btnRadioOption.isEnabled()).toBeTruthy;
        //Another way of validation, and writing to the logs
        btnRadioOption.isSelected().then(radiobuttonSelected => {
                console.log('Radio button selection status: ',radiobuttonSelected);
        });
    }
    async selectCheckBox(chkboxToSelect: string) {
        let chkbox = element(by.xpath('/html/body[@class="ng-scope"]/div[@class="wrapper"]//form[@class="checkboxbtn-form ng-pristine ng-valid"]/ul[@class="list-style-none"]/li[*]//ul[@class="list-style-none"]//label[.="'+chkboxToSelect+'"]'));
        await chkbox.click();
        await expect(chkbox.isEnabled()).toBeTruthy;
    }
}
