import{test,expect, chromium} from '@playwright/test'

//launch the url
//HANDLING  NEW WINDOW PAGE BY USING (context.waitForEvent('page'))

test("Handling_NewPages",async({})=>{

//we need to create own browser
const browser= await chromium.launch();

//create own context
const context=await browser.newContext();

//create own page
const parentpage=await context.newPage();

await parentpage.goto('https://testautomationpractice.blogspot.com/');

//this 2 statement should go parallally hence using Promise.All()method below
// context.waitForEvent('page');
// parentpage.getByRole('button',{name:'New Tab'}).click(); //open new page/new tab

const [newChildPage]= await Promise.all([context.waitForEvent('page'),parentpage.getByRole('button',{name:'New Tab'}).click()]);

//Get all the pages available
const allpages=context.pages();
console.log("number of pages available are:",allpages.length);
await newChildPage.waitForTimeout(2000);

//switches between pages
//Approach-1(direct using context)
console.log("Title of Parent page:",await allpages[0].title());
console.log("Title of Child page:",await allpages[1].title());

//Approach-2nd-alternative
console.log("Title of Parent page:",await parentpage.title());
console.log("Title of Child page:",await newChildPage.title());

await newChildPage.locator('class="descriptionwrapper"');
expect(newChildPage.locator('class="descriptionwrapper"')).toHaveText("Software Testing & Automation Tutorials")

})