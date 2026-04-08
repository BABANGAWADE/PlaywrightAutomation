import{test,expect, Locator} from '@playwright/test'
//import { count } from 'node:console';

test("Verify_HiddenDropdownValues",async({page})=>{

  //launch the url
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


//Login Steps
await page.locator('input[name="username"]').fill('Admin');
await page.waitForTimeout(3000);
await page.locator('input[name="password"]').fill('admin123');
await page.waitForTimeout(3000);
await page.getByRole('button',{name:'Login'}).click();
await page.waitForTimeout(3000);


//click on PIM BTN

 await page.getByText('PIM',{exact:true}).click();
 await page.waitForTimeout(3000);

 //select Employement status dropdown element 
  await page.locator('form i').first().click(); //index start from 0th
  await page.waitForTimeout(4000);

  //capture all dropdown option and count

  const dropdownOptions:Locator= page.locator('div[role="listbox"] span');
  const numbercount= await dropdownOptions.count();
  console.log("Number of options available inside dropdown is.====>",await dropdownOptions.count());

  //now captured all DropdownText Value 

 const allDrpdwnTextValues=await dropdownOptions.allTextContents();

 console.log("all DropdownText Value are---->", allDrpdwnTextValues)

  expect(allDrpdwnTextValues).toContain('Part-Time Contract');

  





})