import { NavigationLinks } from '../Pages/Common/Navigation.po';
import { browser } from 'protractor';
import { CheckboxRadioButtonPage } from '../Pages/CheckboxRadioButton/Checkbox.po';

//Global page object usage in this spec
let navigationLinksPage = new NavigationLinks();
let checkboxRadioButtonPage = new CheckboxRadioButtonPage();


describe('Testcase: 0004 - Validate the radio button/checkbox functionality', () => {
    it('Click on Radio/Checkbox button', async () => {
      await navigationLinksPage.btnRadioCheckbox.click();
    });
  
    it('Select appropriate radio button and validate if it is selected', async () => {
      await checkboxRadioButtonPage.selectRadioButton('Yellow');
    });

    it('Select Haridwar checkbox button and validate if it is selected', async () => {
      await checkboxRadioButtonPage.selectCheckBox("Haridwar");
    });

    it('Select Delhi checkbox button and validate if it is selected', async () => {
      await checkboxRadioButtonPage.selectCheckBox("Delhi");
    });

    it('Navigate back to home page', async () => {
      await navigationLinksPage.btnBackToHome.click();
    });
});