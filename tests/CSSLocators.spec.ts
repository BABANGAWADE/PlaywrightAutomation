

import{test,expect} from '@playwright/test'

test("demo_Tricentic_Search_Functionality",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

//verify search field by using CSS-ID attribute

await page.waitForTimeout(2000)
await page.locator('input#small-searchterms').fill('Mobile')
await expect(page.locator('input#small-searchterms')).toBeVisible()




})