
import { test, expect, Locator } from '@playwright/test'
test("Handling_DynamicTable", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");


    //locate Dynamic table element 
    const DynamicTable = page.locator("table[id='taskTable'] tbody");

    await expect(DynamicTable).toBeVisible();

    // from the table we need to capture /select all the rows and count numbers of Rows in table
    //const row=await page.locator("table[id='taskTable'] tbody tr");

    const rows: Locator[] = await DynamicTable.locator("tr").all(); //chaining of locator
    expect(rows).toHaveLength(4)

    //  // all data from table
    // for(const row of rows)
    // {
    //    const allRowsData= await row.locator("td").allInnerTexts();
    //    console.log("Dynamic table all Rows Data :",allRowsData);
       
    // }

   /*
    in above statement used locator chain tric to find numbers of rows present and used all();
    which convert locator into Locator of array
    
    */
    let CPULoad = '';

    for (const row of rows) {
        const browserName = await row.locator("td").nth(0).innerText();
        console.log("browser name is===>",browserName);
        if (browserName === 'Chrome') {
            CPULoad = await row.locator("td", { hasText: '%' }).innerText();
            console.log("CPULoad of Chrome is:-->", CPULoad);
            break;
        }
    }

    // //compare both values
    // let YellowText: string = await page.getByText('CPU load of Chrome process: 3.8%', { exact: true }).innerText();
    // console.log("CPULoad of text value is:", YellowText);

    // if (YellowText.includes(CPULoad)) {
    //     console.log("CPU Load of chrome is equal");
    // }
    // else {
    //     console.log("CPU Load of chrome is not equal");
    // }

     await page.waitForTimeout(8000);  
    



})
