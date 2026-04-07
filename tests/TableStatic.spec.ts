import { test, expect } from '@playwright/test'

test("StaticTable_Handling", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

    //capture Static table element
    const staticTable = page.locator("table[name='BookTable'] tbody");
    await expect(staticTable).toBeVisible();

    //count numbers of rows in static table including table headers
    const rowsCount = page.locator("table[name='BookTable'] tbody tr");
    //const rowsCount1=staticTable.locator("tr"); 
    /*(this is called chaining of locator, it mean insted using whole locator everytime 
    we can re-use existing locator instance */
    expect(rowsCount).toHaveCount(7) //approach 1, before finding count

    const rowsnumber = await rowsCount.count();
    console.log("Numbers of table rows are:", rowsnumber);
    expect(rowsnumber).toBe(7);  //approach 2,after finding count

    //count numbers of columns/headers in table
    const tableColumn = page.locator("table[name='BookTable'] tbody tr th");
    //const tblclm=rowsCount1.locator("th");  //locator chaining

    await expect(tableColumn).toHaveCount(4);

    const tableNumber = await tableColumn.count();
    console.log("numbers of table Columns are:", tableNumber);
    expect(tableNumber).toBe(4);

    //extract/read specific row data
    const Cell1 = rowsCount.nth(3).locator("td")
    const Cell1Text: string[] = await Cell1.allInnerTexts();
    console.log("All Test Data from Cell-1:", Cell1Text);
    //await expect(Cell1).toHaveText(['Learn Selenium', 'Amit', 'Selenium', '300']);

    //Print All table Cell Data using for of loop
    const allRowdata =await rowsCount.all(); //convert locator into Locator of array,
    // bc  for of loop not working for on locator type of element, it worked on arrays of locator,hence converted

    for(let row of allRowdata)
    {
        const allRowDataTexts= await  row.locator("td").allInnerTexts()
        console.log((allRowDataTexts));
        
    }


})