

import{test, expect, Locator} from '@playwright/test'
import { log } from 'node:console';

test("Verify_Dropdown_IsSorted", async ({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/');

//find out dropdown element all dropdown element using option from DOM
//dropdown is already not in sorted order in this case
const colordrpdwnoption:Locator=page.locator('#colors>option')
//1st check whether dropdown test contain some extra space or not,if it contain then use map & trim method
console.log(await colordrpdwnoption.allTextContents());

//capture all optionsText from DD 
const colordrpdwnalltext:string[]=(await colordrpdwnoption.allTextContents()).map(text=>text.trim());
console.log(colordrpdwnalltext);


//now store this all dropdown values into 2 diffrent arrays & check whether both are sorted
const originalList:string[]=[...colordrpdwnalltext];
const sortedList:string[]=[...colordrpdwnalltext].sort();

//in arrays sort() is mutable hence we have to use spread operator(...) in above line

console.log("OroginalList", originalList)
console.log("sortedList" ,sortedList);

 expect(originalList).toEqual(sortedList);  


await page.waitForTimeout(4000);

})

test.only("Verify_Dropdown_IsSorted_OrNot", async ({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/');

//find out dropdown element (all dropdown element) using option from DOM
//dropdown is already  in sorted order in this case
const animaldrpdwnoption:Locator=page.locator('#animals>option')

//1st check whether dropdown test contains some extra space or not,if it contain then use map & trim method
console.log(await animaldrpdwnoption.allTextContents());

//capture all optionsText from DD 
const animaldrpdwnalltext:string[]=(await animaldrpdwnoption.allTextContents()).map(text=>text.trim());
console.log(animaldrpdwnalltext);


//now store this all dropdown values into 2 diffrent arrays & check whether both are sorted
const originalList:string[]=[...animaldrpdwnalltext];
const sortedList:string[]=[...animaldrpdwnalltext].sort();

//in arrays sort() is mutable hence we have to use spread operator(...) in above line

console.log("OroginalList", originalList)
console.log("sortedList" ,sortedList);

 expect(originalList).toEqual(sortedList);


await page.waitForTimeout(4000);

})




