
import {test,expect} from '@playwright/test'

test("Login to application with Valid Credentials", async function({page}) {
  
    //launch the url
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    //by using css selector
    //await page.locator("#username").fill("username")

    //enter text into the username field by using playwright specific getByLabel locator
    await page.getByLabel("Username ").fill("student")
     /*Check if the value we entered into the username field is actually entered or not by using 
     toHaveValue().this is an aeertion method used to check if an INPUT field is 
     having the value as "usrname"
    */

     await expect.soft(page.getByLabel("Username ")).toHaveValue("student")

    //enter the text into the password field by using playwright specific getByLabel locator
    await page.getByLabel("Password ").fill("Password123")
    await expect(page.getByLabel("Password ")).toHaveValue("Password123")

    //click on submit button
    await page.getByRole("button",{name:"Submit"}).click()


//validation on successfully page
//validation of new url
await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")

//validation of successfully logged in msg

await expect(page.getByRole("heading", {name:"Logged In Successfully"})).toBeVisible()

//validation of logOut btn
await expect(page.getByRole("button", {name:"Log out"})).toBeVisible()

})



