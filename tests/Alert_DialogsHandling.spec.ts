import{test,expect} from '@playwright/test'

test("SimpleAlert_DialogHandling",async({page})=>{

await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');

//register the dialog handler before clicking on button
page.on('dialog',async(dialog)=>{

    //check what type of dialog it is
 console.log("Type of alert is---",dialog.type());
 expect(dialog.type()).toContain('alert')

// check alert message
console.log("DialogText",dialog.message());
expect(dialog.message()).toContain('I am an alert box!');

//click on OK button of dialog/Alert
dialog.accept();
})

await page.locator('#alertexamples').click();

const dialogText= await page.locator('#alertexplanation').innerText();
console.log("output Text is---", dialogText);
expect(page.locator('#alertexplanation')).toHaveText('You triggered and handled the alert dialog');

})


test("Confirm_Dialog",async({page})=>{

await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');

//register dialog hanlder event
page.on('dialog',async (dialog)=>{

    //check what type of dialog it is
    console.log("Dialog type is==>",dialog.type());
    expect(dialog.type()).toContain('confirm')
    
     console.log("Dialog message_Text is==>",dialog.message());
     expect(dialog.message()).toContain('I am a confirm alert');

     //dialog.accept(); //close the dialog by accepting
     dialog.dismiss();  //close the dialog by dismissing
    
     
})     

await page.locator('#confirmexample').click();

//check output text
const confirmtext=await page.locator('#confirmexplanation').innerText();
console.log("Confirm Dialog outputText is====>",confirmtext);

expect( page.locator('#confirmexplanation')).toHaveText('You clicked OK, confirm returned true.');
//expect(page.locator('#confirmexplanation')).toHaveText('You clicked Cancel, confirm returned false.');


})


//PROMPT DIALOG
test.only("Prompt_DialogHandling",async({page})=>{

await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');

//register Dailog Handler/Event listener
page.on('dialog',(dialog)=>{

//check type of dialog
console.log("Type of Dialog is===>",dialog.type());
 expect(dialog.type()).toContain('prompt');

 //check dialog message
 console.log("Dialog Text is====>",dialog.message());
 expect(dialog.message()).toContain('I prompt you');

//dialog default input value
expect(dialog.defaultValue()).toContain('change me');

//accepting dialog
//dialog.accept("BOBY");

dialog.dismiss();



})
await page.locator('#promptexample').click();

//check output text
console.log(await page.locator("#promptexplanation").innerText());
//expect( page.locator("#promptexplanation")).toHaveText("You clicked OK. 'prompt' returned BOBY");
expect( page.locator("#promptexplanation")).toHaveText("You clicked Cancel. 'prompt' returned null");

})
