import { browser, element, by } from 'protractor';

export class NavigationLinks {
    //Am using different element properties just to show what could be leveraging different element properties
    btnCalculator = element(by.linkText('Calculator'));
    btnLogin = element(by.css('div:nth-of-type(2) > .col-sm-12 > .button-area-line > a:nth-of-type(1)'));
    btnDropDown = element(by.xpath('//div[@class="content-wraper"]//a[@href="http://www.helpingtesters.com/practice/protractor/dropdown.php"]'));
    btnGrid = element(by.linkText('Grid'));
    btnScrollSearch = element(by.linkText('Scroll & Search'));
    btnSocialAccount = element(by.partialLinkText('Social Account'));
    btnRadioCheckbox = element(by.linkText('Radoi button/Checkbox'));
    btnQuitSmoking = element(by.linkText('Quit Smoking Project'));
    btnBackToHome = element(by.linkText('< Back to Protractor Practice Application'));
}