import{test, expect} from '@playwright/test'

test("Login Functionality", async function({page}){

//launch the URL
await page.goto('https://demoqa.com/automation-practice-form')

//enter fname
await page.waitForTimeout(3000)
await page.getByPlaceholder('First Name').fill("BOBY")

//enter Lname
await page.waitForTimeout(3000)
await page.getByPlaceholder('Last Name').fill("GAWADE")

//enter Email
await page.waitForTimeout(3000)
await page.getByPlaceholder('name@example.com').fill("gawadebaban95@gmail.com")

//select gender
await page.waitForTimeout(3000)
await page.locator('#gender-radio-1').click()

//enter mobile number
await page.waitForTimeout(3000)
await page.getByPlaceholder('Mobile Number').fill("9923519286")

//click on submit btn
await page.getByRole('button',{name:"Submit"}).click()

//assertion 
await  expect.soft(page.locator("#example-modal-sizes-title-lg")).toHaveText("Thanks for submitting the form")
await expect(page.getByRole("heading",{name:"Thanks for submitting the form"})).toBeVisible()
await expect(page.getByText('Thanks for submitting the form')).toBeVisible()

await page.waitForTimeout(2000)
await page.locator("#closeLargeModal").click()

})