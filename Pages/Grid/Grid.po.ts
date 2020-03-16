import { browser, element, by, $, $$, protractor } from 'protractor';

export class GridPage {

    txtUserName = element(by.name('name'));
    btnClose = element(by.className('close'));
    tblList =  element.all(by.xpath('/html/body/div/div[3]/div/div[1]/div/table'));

    count = this.tblList.all(by.tagName("tr"));

    async ClickUserLink(EmployeeID: string) {
        let linkToSelect = element(by.xpath('/html/body[@class="ng-scope"]//div[@class="container container-bg-clr ng-scope"]//table/tbody/tr[td = "'+EmployeeID+'"]//a[@class="blue-clr link-uc"]'));
        await linkToSelect.click();
    }

    async ValidateUserName(UserName: string){
        await expect<any>(this.txtUserName.getAttribute('value')).toBe(UserName);
    }

    async ClosePopup() {
        this.btnClose.click();
    }

    async ValidateRowCount(expectedRowCount: string) {
        await expect<any>((await this.count.count()).toString()).toEqual(expectedRowCount);
    }

    async GetRowCount(){
        await this.count.count().then(function(rowCount){
            console.log("Count:"+rowCount) 
          })
       };
}
