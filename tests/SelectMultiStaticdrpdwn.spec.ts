import{test ,expect, Locator} from '@playwright/test'
test("Multi_Select_Dropdown",async({page})=>{

    //launch the url
    await page.goto("https://testautomationpractice.blogspot.com/");

    //find out the element using locator
    const colordd=  page.locator('#colors') // store element
    await page.locator('#colors').selectOption(['Red','Blue','Green']); //by visible text()
    await page.waitForTimeout(5000);

    await page.locator('#colors').selectOption([{value:'yellow'},{value:'red'},{value:'white'}]);
    //by using value attribute
    await page.waitForTimeout(4000)

    await page.locator('#colors').selectOption([{label:'Green'},{label:'Yellow'}]) //using label attribute
    await page.waitForTimeout(4000)

    await page.locator('#colors').selectOption([{index:5},{index:6}]) // using Index position white- green 
    await page.waitForTimeout(4000)

    //check number of options in the dd i.e count

    const colordrpdwnOptions:Locator = page.locator('#colors>option')
    await expect.soft(colordrpdwnOptions).toHaveCount(7)

    

    //now check  any specific options(textvalue) available inside dd it will returns list of array value
    const colordrpdwntext:string[]=(await colordrpdwnOptions.allTextContents()).map(text=>text.trim())
    console.log(colordrpdwntext)
    expect(colordrpdwntext).toContain('Green');

    //print all color dd value in output console
    for(const option of colordrpdwntext)
    {
        console.log(option)
    }













    



})