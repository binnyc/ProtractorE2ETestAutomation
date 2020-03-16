import { SuperCalculatorPage } from '../Pages/Calculator/SuperCalculator';
import { HomePage } from '../Pages/Common/Home.po';
import { LoginPage } from '../Pages/Common/Login.po';
import { NavigationLinks } from '../Pages/Common/Navigation.po';

//Global page object usage in this spec
let loginPage = new LoginPage();
let homePage = new HomePage();
let navigationLinksPage = new NavigationLinks();
let superCalculatorPage = new SuperCalculatorPage();

describe('Testcase: 0001 - Verify various navigation buttons on the Home Page', () => {
  it('Verify click on Calculator button, and get back to the home page', async () => {
    await navigationLinksPage.btnCalculator.click();
    await navigationLinksPage.btnBackToHome.click();
  });

  it('Verify click on DropDown button, and get back to the home page', async () => {
    await navigationLinksPage.btnDropDown.click();
    await navigationLinksPage.btnBackToHome.click();
  });

  it('Verify click on Grid button, and get back to the home page', async () => {
    await navigationLinksPage.btnGrid.click();
    await navigationLinksPage.btnBackToHome.click();
  });

  it('Verify click on Login button, and get back to the home page', async () => {
    await navigationLinksPage.btnLogin.click();
    await navigationLinksPage.btnBackToHome.click();
  });

  it('Verify click on Quit Smoking button, and get back to the home page', async () => {
    await navigationLinksPage.btnQuitSmoking.click();
    await navigationLinksPage.btnBackToHome.click();
  });

  it('Verify click on Radio & Checkbox button, and get back to the home page', async () => {
    await navigationLinksPage.btnRadioCheckbox.click();
    await navigationLinksPage.btnBackToHome.click();
  });

  it('Verify click on Scroll & Search button, and get back to the home page', async () => {
    await navigationLinksPage.btnScrollSearch.click();
    await navigationLinksPage.btnBackToHome.click();
  });

  it('Verify click on Social Account button, and get back to the home page', async () => {
    await navigationLinksPage.btnSocialAccount.click();
    await navigationLinksPage.btnBackToHome.click();
  });
});
