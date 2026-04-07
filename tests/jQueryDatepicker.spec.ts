
import{test, expect} from '@playwright/test'

test("JQueryDatePicker_Handling",async({page})=>{

//Launch the url
await page.goto("https://testautomationpractice.blogspot.com/");

//find the calender input field
const dateInput= page.locator('input[id="datepicker"]');
expect(dateInput).toBeVisible();

// //Approach-1-Fill():-
// await dateInput.fill("08/15/2026"); //MM/DD/YYYY
// await page.waitForTimeout(3000); 

//Approach-2-custom calendar  Date Picker 

//Step-1- Capture Input field and click
await dateInput.click();

//select target dates by storing them into variables with string 

const year="2024"
const month="December"
const date="31"


while(true)
{

    //capture current month and current year from datepicker
    const currentmonth=await page.locator('.ui-datepicker-month').textContent();
    const currentyear=await page.locator('.ui-datepicker-year').textContent();

    if(currentmonth===month && currentyear===year)
    {
        break;
    }
    //future date picker-capture locator for next btn element

    //await page.locator('.ui-datepicker-next').click(); //future 
    await page.locator('.ui-datepicker-prev').click(); // past
}

    //  ********SELECTION OF SPECIFIC DATE**********

    /*capture all dates available in tables by using all().
    all()--->When the locator points to a list of elements, 
    this returns an array of locators, pointing to their respective elements */

    const alldates=await page.locator('.ui-datepicker-calendar td').all();

    for(let dates of alldates) // reading each and every date using (dates) variable
    {
     const dateText=await dates.innerText(); //from every dates we capture text element
     if(dateText===date)  //campare text value with expected date
     {
        await dates.click() //if they are matching go and click on date and break the loop
        break;
     }
    }
    
    
    await page.waitForTimeout(5000);


})
