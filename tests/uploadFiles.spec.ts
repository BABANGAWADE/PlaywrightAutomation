import{test,expect} from '@playwright/test'

 //*************UPLOAD SINGLE FILE***************** */

test("Upload_SingleFile",async({page})=>{

    //launch url
    await page.goto("https://testautomationpractice.blogspot.com/");

    //capture locator for element choose file button and use setInputFile() method
    await page.locator('#singleFileInput').setInputFiles('tests/Uploads/HTML.txt');

    //capture locator for upload file button element
    await page.locator("button[type='submit']").first().click();
   
    //capture locator for after file upload text
    const upluadMessage=await page.locator('#singleFileStatus').textContent();
    await expect(upluadMessage).toContain('Single file selected: HTML.txt');

    await page.waitForTimeout(3000);


})
   //*************UPLOAD MULTIPLE FILES***************** */
test.only("Multiple_Fileupload",async({page})=>{

   //launch url
    await page.goto("https://testautomationpractice.blogspot.com/");

    //capture locator for element choose file button and use setInputFile() method
    await page.locator('#multipleFilesInput').setInputFiles(['tests/Uploads/HTML.txt','tests/Uploads/Invite Card-combined.pdf']);

    //capture locator for upload file button element
    await page.getByText('Upload Multiple Files',{exact:true}).click();
   
    //capture locator for after file upload text
    const uploadMessage2=await page.locator('#multipleFilesStatus').textContent();
     expect(uploadMessage2).toContain('HTML.txt');
     expect(uploadMessage2).toContain('Invite Card-combined');
    



})