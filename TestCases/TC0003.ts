import { DropdownPage } from '../Pages/DropDown/Dropdown.po';
import { NavigationLinks } from '../Pages/Common/Navigation.po';

//Global page object usage in this spec
let dropdownPage = new DropdownPage();
let navigationLinksPage = new NavigationLinks();
let countryToSelect = 'India';

describe('Testcase: 0003 - Select value from the dropdown page, and validate the selection', () => {
    it('Click on Dropdown button', async () => {
      await navigationLinksPage.btnDropDown.click();
    });
  
    it('Select Country value from the dropdown', async () => {
      await dropdownPage.selectCountry(countryToSelect);
      await dropdownPage.btnSubmit.click();
    });

    it('Validate selected country', async () => {
      await dropdownPage.ValidateCountrySelectionMessage(countryToSelect);
    });

    it('Navigate back to home page', async () => {
      await navigationLinksPage.btnBackToHome.click();
    });
});