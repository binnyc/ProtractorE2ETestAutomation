import { GridPage } from '../Pages/Grid/Grid.po';
import { NavigationLinks } from '../Pages/Common/Navigation.po';
import { browser } from 'protractor';

//Global page object usage in this spec
let gridPage = new GridPage();
let navigationLinksPage = new NavigationLinks();

describe('Testcase: 0005 - Count the number of rows in the table, and click on specific row by Employee ID search in the table', () => {
    it('Navigate to the Grid Page', async () => {
      await navigationLinksPage.btnGrid.click();
    });

    it('Validate number of rows present in the table (10 including the table headers)', async () => {
      await gridPage.tblList;
      await gridPage.GetRowCount();
      await gridPage.ValidateRowCount("10");
    });

    it('Click the View link in the row that contains Employee ID IY1123', async () => {
      await gridPage.ClickUserLink("IY1123");
    });

    it('Validate username in the popup is correct based on the user id selected on the previous page', async () => {
      await gridPage.ValidateUserName("Sanjeev Kumar");
    });

    it('Close the user information popup', async () => {
      await gridPage.ClosePopup();
    });

    it('Navigate back to home page', async () => {
      await navigationLinksPage.btnBackToHome.click();
    });
});