
import{test, expect, Locator} from '@playwright/test'

test("Verify_RadioButtonsActions",async({page})=>{


    //Verify_MailRadioButton
    await page.goto('https://testautomationpractice.blogspot.com/');

     const MailRadioBtn :Locator= page.locator('#male'); //stored the btn value

     await expect(page.locator('#male')).toBeVisible(); //check btn is Visible

     await expect(page.locator('#male')).toBeEnabled(); //check btn is enabled 
     await page.waitForTimeout(2000);

     await expect (page.locator('#male')).not.toBeChecked();//checked whether btn check or not

    //  await page.locator('#male').click();
    //  await page.waitForTimeout(2000);

    
     await page.locator('#male').check(); // check whether check or selected the btn if not then select it
     await page.waitForTimeout(2000);

     await expect (page.locator('#male')).toBeChecked();
     await page.waitForTimeout(6000);

     
     //Verify_FemailRadioButton

     const FemailRadioBtn:Locator=page.getByRole("radio",{name:'Female'});
     expect(FemailRadioBtn).toBeVisible();
     expect(FemailRadioBtn).toBeEnabled();
     expect(FemailRadioBtn).not.toBeChecked();
     await page.waitForTimeout(2000);

     await page.getByRole("radio",{name:'Female'}).check();
     await page.waitForTimeout(2000);

     expect(FemailRadioBtn).toBeChecked();


})

    test.only("Verify_CheckBoxes_Functionality",async ({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

        //select any specific checkbox-->Monday
        const Mondaycheckbox:Locator= page.getByLabel('Monday'); //locate the element 1st
        expect(Mondaycheckbox).toBeVisible();
        expect(Mondaycheckbox).toBeEnabled();
        expect(Mondaycheckbox).not.toBeChecked();
        await Mondaycheckbox.check();
        expect(Mondaycheckbox).toBeChecked();
        await page.waitForTimeout(3000);

        /*
        select all the checkboxes and assert each
        step-1:-
        store all labels into the string array
        captured  checkboxes and found how may are theres by using below script

        */
       const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
       //days.map= ArraysName.Map & then passing index as an argument
       // in below line index is representing for all days 
       const checkboxes:Locator[]=days.map(index=> page.getByLabel(index));
       expect(checkboxes.length).toBe(7);

       //now select all checkboxes  by using for of loop

       for(const checkbox of checkboxes)
       {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
       }
        await page.waitForTimeout(7000);

        //uncheck last 3 checkboxes from all 7 cheked checkboxes

        for(const checkbox of checkboxes.slice(-3))
             {
                await checkbox.uncheck();
                await expect(checkbox).not.toBeChecked();
             }

             await page.waitForTimeout(7000);


             // toggle scenarios-->  if checkbox is already checked then uncheck them & already unchecked then check them

             for(const checkbox of checkboxes)
             {
                if(await checkbox.isChecked())
                {
                    await checkbox.uncheck();
                    await expect(checkbox).not.toBeChecked();
                }
                 else 
                {
                        await checkbox.check();
                        await expect(checkbox).toBeChecked();

                    }
             }

             //Randomly select check boxes by index positions===here im selecting [1,3,6]

             const indexes:number[]=[1,3,6]
             for(const i of indexes)
             {
                await checkboxes[i].check();
                await expect(checkboxes[i]).toBeChecked();

             }

             await page.waitForTimeout(6000);

 
    })