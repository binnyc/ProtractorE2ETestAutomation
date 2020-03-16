import { browser, element, by, $, $$, protractor, Browser } from 'protractor';

export class ScrollPage {
    //Objects
    txtSearchBox = element(by.xpath('//div[@class="container container-bg-clr ng-scope"]//input[@type="text"]'));
    tblSearchResults = element.all(by.xpath('/html/body/div/div[3]/div/div/div[3]/table'));
    count = this.tblSearchResults.all(by.tagName("tr"));
   
    //Method to perform search by entering specific string
    async EnterSearchValue(searchValue: string) {
        await this.txtSearchBox.sendKeys(searchValue);
    }

    //Validate the number of rows
    async GetRowCount(){
        await this.count.count().then(function(rowCount){
            console.log("Count:"+rowCount) 
          })
       };
}
