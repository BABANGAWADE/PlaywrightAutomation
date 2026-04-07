
import{test, expect, Locator} from '@playwright/test'
import { text } from 'node:stream/consumers';

test("Verify_DropdownContains_Duplicates",async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //findout dropdown element for all options
    const colordropdownoption:Locator= page.locator('#colors>option');
    //now capture all text value from dropdown

    const colorallTextoption:string[]=(await colordropdownoption.allTextContents()).map(text=>text.trim());
    console.log(colordropdownoption);

    //now create 2 array

    const Myset=new Set<string>();//this is standard syntax for set array creation

    const duplicates:string[]=[]; //create an empty duplicate array

    //then use for OF loop
    for(const text of colorallTextoption )
    {
      if(Myset.has(text))
      {
        duplicates.push(text);
      }
      else
      {
        Myset.add(text);
      }

    }
    console.log("duplicated element in dropdown are===>  ",duplicates);
    
    expect(duplicates.length).toBe(0);
    await page.waitForTimeout(4000);
}
)
   