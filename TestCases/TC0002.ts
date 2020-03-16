import { ScrollPage } from '../Pages/Scroll/Scroll.po';
import { NavigationLinks } from '../Pages/Common/Navigation.po';
import { browser } from 'protractor';

//Global page object usage in this spec
let scrollPage = new ScrollPage();
let navigationLinksPage = new NavigationLinks();
let searchText1 = 'Gupta';

describe('Testcase: 0002 - Search for specific string', () => {
  it('Click on Scroll and Search button', async () => {
    await navigationLinksPage.btnScrollSearch.click();
  });

  it('Perform a search using specific string', async () => {
    await scrollPage.EnterSearchValue(searchText1);
  });

  it('Validate number of rows returned with the specified search string', async () => {
    await (scrollPage.GetRowCount());
    await navigationLinksPage.btnBackToHome.click();
  });
});