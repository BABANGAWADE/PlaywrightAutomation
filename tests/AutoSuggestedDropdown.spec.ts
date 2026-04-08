

import{test,expect} from '@playwright/test'

//launch the url
test("Verify_AutoSuggested_Dropdown", async({page})=>{

await page.goto("https://www.flipkart.com/");

//find out element for search option
await page.locator('input[name="q"]').nth(0).fill("smart");
await page.waitForTimeout(5000);//this is mandatory othrwise it will return 0 value only

//get all suggested options by using ==>ctrl+shift+p---->Enter.....emulate focused page in DOM page
const options= page.locator('ul>li');

//find # count in autosuggedsted DD 
const retunsNumber=await options.count();
console.log(retunsNumber);

//retrive specific index possition value using nth()
// console.log(options.nth(6).innerText());
// await page.waitForTimeout(4000);



//then captured all autosuggested text values
const suggestedText= await options.allTextContents()
console.log(suggestedText);


await page.waitForTimeout(4000);



})