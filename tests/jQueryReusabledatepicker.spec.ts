
import{test, expect,Locator,Page} from '@playwright/test'


/*to make below all code in  customised way or reuse in better way we need to create one async 
 function and inside the function we need to pass few parameters,like
 (targetYear:string,targetMonth:string,targetDate:string,page:Page,isFuture:boolean)
 and whatever logic that we have implimented that we need to put inside the function it self.
 and do some modification in code,like replace month with->targetMonth & year with->targetYear
 and datw with -->targetDate, and under the main test we need to call this functions by same order of argument

*/

 async function dateSelection (targetYear:string,targetMonth:string,targetDate:string,page:Page,isFuture:boolean)
 {

while(true)
{

    //capture current month and current year from datepicker
    const currentmonth=await page.locator('.ui-datepicker-month').textContent();
    const currentyear=await page.locator('.ui-datepicker-year').textContent();

    if(currentmonth===targetMonth && currentyear===targetYear)
    {
        break;
    }

     if(isFuture)   
    {
    
    await page.locator('.ui-datepicker-next').click(); //future
    } 
    else
    {
    await page.locator('.ui-datepicker-prev').click(); // past

    }    
}
   const alldates=await page.locator('.ui-datepicker-calendar td').all();

    for(let dates of alldates) // reading each and every date using (dates) variable
    {
     const dateText=await dates.innerText(); //from every dates we capture text element
     if(dateText===targetDate)  //campare text value with expected date
     {
        await dates.click() //if they are matching go and click on date and break the loop
        break;
     }
    }
 }

test("Reusable_JQueryDatePicker_Handling",async({page})=>{

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

// //future target date
// const year="2027"
// const month="December"
// const date="31"

//past target date
const year="2024"
const month="December"
const date="31"

//calling funtion and pass all argument with same order
dateSelection(year,month,date,page,false)

const expectedDate="12/31/2024";
await expect(dateInput).toHaveValue(expectedDate);
await page.waitForTimeout(5000);


})
