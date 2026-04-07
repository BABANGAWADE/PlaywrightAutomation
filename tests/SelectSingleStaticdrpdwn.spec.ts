

import{test,expect, Locator} from '@playwright/test'
import { log } from 'node:console'

test("Single_Static_Dropdown_Handle",async({page})=>{

    /**
     types of dropdown:-
     1)static drpdwn-->> the dropdown value never be changed
     a)single select drpdwn
     b)multi select drpdwn


     2)dynamic drpdwn--> the value get changing
     a)single select drpdwn
     b)multi select drpdwn

     steps:-
     WHEN DD IS DEVELOPED USING <select> tag
     1) launch the url
     2) locate the dropdown element by writting locator
     3) get the value from the dd using selectOption()

     select the dropdown Using:-

     selectOption().byVisibleText,
     selectOption().by Value Attribute,
     selectOption().By Label Attribute,
     selectOption().By Index
     */

     await page.goto("https://testautomationpractice.blogspot.com/")

     // locate the dd element using locator
     const countrydd= page.locator("#country")
     await page.waitForTimeout(2000)
     await page.locator("#country").selectOption("germany")
     await countrydd.selectOption("germany") //by visible text 

     await page.waitForTimeout(2000)
     await countrydd.selectOption({value:'australia'}) // by using value attribute

     await page.waitForTimeout(2000)
     await countrydd.selectOption({label:'Brazil'}) // by using label(use physical text present)

     await page.waitForTimeout(2000)
     await countrydd.selectOption({index:7});


     //2-now check the number of options in the  dropdown (count)
     const countrydrpdwnoptions:Locator=  page.locator('#country>option');
     await expect.soft(countrydrpdwnoptions).toHaveCount(10);
     
   //now check  any specific options(textvalue) available inside dd it will returns list of array value
     const countrydropdownText:string[]=(await countrydrpdwnoptions.allTextContents()).map(text=>text.trim());
     console.log(countrydropdownText); //returns all DD values in form of array

      expect(countrydropdownText).toContain('India') //check if the array contain 'India'

     //print all DD values, it will print all DD values in output console

     for(const option of countrydropdownText )
     {
        console.log(option)
     }



})

