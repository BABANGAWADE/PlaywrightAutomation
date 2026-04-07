

import { test, expect } from '@playwright/test'

test("UploadFiles", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

    //click on Generate and Download Text File
    await page.locator("button[id='generateTxt']").click();

    //click on download Text Link
    // await page.waitForEvent('download');
    // await page.locator("a[id='txtDownloadLink']").click(); 

    //this will create the download event,that we need to capture or listen that event
    // using page.witForEvent('download')

    //to run all statement together or parallely we need to use Promise.all();
    const [download] = await Promise.all([page.waitForEvent('download'), page.locator("a[id='txtDownloadLink']").click()])

    //save the file to the custome location
    const downloadPath = 'downloads/testFile.txt'
    
    await download.saveAs(downloadPath);
    //use saveAs() to download the files
    
    await page.waitForTimeout(4000);
    
    
    //check file exists in folder or not, for that import fs(file system package) from JS/TS
    //const fileExists = fs.existsSync('downloads/testFile.txt')
    
})