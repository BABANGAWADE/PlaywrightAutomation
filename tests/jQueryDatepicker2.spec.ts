import{test, expect} from '@playwright/test'

test("JQueryDatePicker2_Handling",async({page})=>{

//Launch the url
await page.goto("https://vinothqaacademy.com/date-picker-calendar/");

//clik on calender element
await page.locator('div[class="label"]').click();
await page.waitForTimeout(2000);

//select target dates
const year="2027"
const month="December"
const date="31"

//capture current month and current year from datepicker


})