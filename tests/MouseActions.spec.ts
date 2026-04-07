
import{test, expect} from '@playwright/test'

test("VerifyMouse_hoverAction",async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/#');

//hovering over laptop 'POINT ME'
await page.getByRole('button',{name:'Point Me'}).hover();
await page.waitForTimeout(2000);


//hovering over laptop element
await page.locator('.dropdown-content a:nth-child(2)').hover();



})

test.only("Verify_DoubleClickAction",async({page})=>{

await page.goto('https://vinothqaacademy.com/mouse-event/');

 const doubleclick=await page.locator('#doubleBtn');
 await doubleclick.dblclick();

 await page.waitForTimeout(3000);



 //RightClick

const rightclick= page.getByRole('button',{name:'Right Click Me'});
await rightclick.click({button:'right'});
await page.waitForTimeout(3000)


//Drag-n- Drop

//recomonded
await page.locator('#dragItem').dragTo(page.locator('#dropZone'));

////locator of drag element
const drag=page.locator('#dragItem');

//locator of drop element
const drop=page.locator('#dropZone');

await drag.dragTo(drop);




})