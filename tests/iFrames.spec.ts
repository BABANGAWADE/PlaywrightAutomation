
import{test,expect, Locator} from '@playwright/test'

test("Handling_Frames",async({page})=>{

    //launch the url
    await page.goto('https://vinothqaacademy.com/iframe/');

    //count total number of frames exists in current page by using length property
    const allframes=page.frames();
    console.log("Total Number of frames are:==>",allframes.length);
    await page.waitForTimeout(3000);

    //locate the frame by using 1st Approach-->page.frameLocator Method/Function
    const employeeframe=page.frameLocator("iframe[name='employeetable']");

    //locate the firstName element from employee  frame & enter text
    await employeeframe.locator("input[id='nameInput']").fill("BOBY");
    await page.waitForTimeout(2000);

    //locate the firstName element from employee  frame & enter text
    await employeeframe.locator("input[id='roleInput']").fill("ENGINEER");
    await page.waitForTimeout(5000);

    //locate the frame by using 1st Approach only-->
    //NOTE:-a)page.frame('name') Method/Function
          //b)page.frame({url:"urllll"})   thsese are not wrokign for me here
    const popupFrame= page.frameLocator("iframe[name='popuppage']");
    await page.waitForTimeout(5000);
     
     
     //locate the AlertBox element from popupFrame & click
     await popupFrame.locator("button[name='alertbox']").click();
     await page.waitForTimeout(3000);

     //locate the register form frame & enter fname,L-name and select radio button
     const registerframe=page.frameLocator("iframe[name='registeruser']");

     //locate the First-name element and enter input text
     const fname=await registerframe.locator('#vfb-5').fill('BOBY');
     await page.waitForTimeout(2000);

     //locate the Last-name element and enter input text
     const lName=await registerframe.locator('#vfb-7').fill('PRINCE');
     

     //locate the Radio button element 

     const radiobtn:Locator=registerframe.locator('#vfb-31-1');
     
     await expect(radiobtn).toBeVisible();
     
     await expect(radiobtn).toBeEnabled();
     await expect(radiobtn).not.toBeChecked();
     radiobtn.click();
     await page.waitForTimeout(2000)
     expect(radiobtn).toBeChecked();

})

test.only("NestedFrame_Handling",async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/');

//locate the element of frame-5 
const Frame5=page.frameLocator("frame[src='frame_5.html']");

//locate input tax field for frame5
const inputfield=await Frame5.locator("input[name='mytext5']").fill("BOBY");
await expect(Frame5.locator("input[name='mytext5']")).toHaveValue('BOBY');
await page.waitForTimeout(3000);

//now locate inner frame 
//const url=Frame5.frameLocator("a[href='https://a9t9.com']");
const url= await Frame5.locator("a[href='https://a9t9.com']").click();
await page.waitForTimeout(3000);

await Frame5.getByText('OCR').hover();
await page.waitForTimeout(3000);



})