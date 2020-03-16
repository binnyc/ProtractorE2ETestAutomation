import { LoginPage } from '../Pages/Common/Login.po';
import { NavigationLinks } from '../Pages/Common/Navigation.po';

//Global page object usage in this spec
let loginPage = new LoginPage();
let navigationLinksPage = new NavigationLinks();

describe('Testcase: 0006 - Login to the application using a valid user id and password', () => {
    it('User should be on Login Page!', async () => {
      await navigationLinksPage.btnLogin.click();
      await expect(loginPage.txtUserID.isPresent()).toBeTrue;
    });
  
    it('Login with default user id and password', async () => {
      await loginPage.DefaultLogin();
    });

    it('Validate if login is successful, and navigate back to home page', async () => {
      await loginPage.ValidateLoginMessage('You have successfully login into the account.');
      await loginPage.btnClosePopup.click();
      await navigationLinksPage.btnBackToHome.click();
    });
});