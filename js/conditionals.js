"use strict";

//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//      You should use an if-else-if-else block to return different messages.




function analyzeColor (color) {
    color = prompt("Give me random color.");
    switch(color) {
        case "red":
            alert("Red is the color of a fine rare steak.");
            break;
        case "blue":
            alert("Blue is the color of the ocean.");
            break;
        case "orange":
            alert("Orange you glad I didn't say orange.");
            break;
        case "yellow":
            alert("Yellow is the color of the sun, dare you look ?");
            break;
        case "green":
            alert("Green is the color of lush and vibrant forests.");
            break;
        case "indigo":
            alert("Indigo is a dark purplish blue.");
            break;
        case "violet":
            alert("Violet looks like purple to me.");
            break;
        default:
            alert("I am not familiar with that color.");
            break;
    }
}
//console.log(analyzeColor("pink"));

//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value

// // Don't change the next two lines!

// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
console.log(analyzeColor(randomColor));
//  * TODO:

//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.

// ********* COMPLETED , AND ADDED TO THE FUNCTION ABOVE *****************

/*
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.


let luckyNumber = [0,1,2,3,4,5];
let randomLuckyNumber = luckyNumber[Math.floor(Math.random() * luckyNumber.length)];
function calculateTotal (randomLuckyNumber, totalAmount, discountedPrice) {
    totalAmount = prompt("What is your total amount?");

if (randomLuckyNumber === 0) {
        return ( totalAmount - 0);
    } else if ( randomLuckyNumber === 1) {
        return ( totalAmount - (totalAmount * .10));
    } else if ( randomLuckyNumber === 2) {
        return ( totalAmount - (totalAmount * .25));
    } else if ( randomLuckyNumber === 3) {
        return (totalAmount - (totalAmount * .35));
    } else if ( randomLuckyNumber === 4) {
        return ( totalAmount - (totalAmount * .50));
    } else {
        return ( totalAmount - totalAmount);
    }
}
console.log(calculateTotal(randomLuckyNumber,));

*/


//let luckyNumber = [0, 1, 2, 3, 4, 5];
let randomLuckyNumber = Math.floor(Math.random() * 6);
let totalAmount = prompt("What is your total?");

console.log(randomLuckyNumber);
function calculateTotal (randomLuckyNumber, totalAmount,discountedPrice) {


    switch(randomLuckyNumber) {
        case 0:
            alert(`With the drawing of a random number ${randomLuckyNumber}, you dont receive a discount.So you have to pay $${totalAmount}.`);
            break;
        case 1:
            alert(`With your lucky number of ${randomLuckyNumber}, the total you then have to pay is $${totalAmount - (totalAmount * .10)}.`);
            break;
        case 2:
            alert(`With your lucky number of ${randomLuckyNumber}, the total you then have to pay is $${totalAmount - (totalAmount * .25)}.`);
            break;
        case 3:
            alert(`With your lucky number of ${randomLuckyNumber}, the total you then have to pay is $${totalAmount - (totalAmount * .35)}.`);
            break;
        case 4:
            alert(`With your lucky number of ${randomLuckyNumber}, the total you then have to pay is $${totalAmount - (totalAmount * .50)}.`);
            break;
        default:
            alert(`WooHoo! You pay absolutely nothing.`);
            break;
    }
}
console.log(calculateTotal(randomLuckyNumber,totalAmount));

//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.

//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.

// // Generate a random number between 0 and 6




/*  I HAD PREVIOUSLY MADE MY FUNCTION TO ALREADY TAKE A USERS INPUT AS WELL AS USING A RANDOM NUMBER. SO JUST CHANGED SOME THINGS AROUND FOR THE BELOW FUNCTION AND SOLUTION:     */
let luckyNumbers = Math.floor(Math.random() * 6);
let billTotal = prompt("What is your bill total?");


function calculateTotals(luckyNumbers, billTotal,discountedPrice) {


    switch(luckyNumbers) {
        case 0:
            alert(`With the drawing of a random number, ${luckyNumbers}, you dont receive a discount.So you have to pay $${billTotal}.`);
            break;
        case 1:
            alert(`With the drawing of a random number, ${luckyNumbers}, your total of $${billTotal}, is now lowered too $${billTotal - (billTotal * .10)}.`);
            break;
        case 2:
            alert(`With the drawing of a random number, ${luckyNumbers}, your total of $${billTotal}, is now lowered too $${billTotal - (billTotal * .25)}.`);
            break;
        case 3:
            alert(`With the drawing of a random number, ${luckyNumbers}, your total of $${billTotal}, is now lowered too $${billTotal - (billTotal * .35)}.`);
            break;
        case 4:
            alert(`With the drawing of a random number, ${luckyNumbers}, your total of $${billTotal}, is now lowered too $${billTotal - (billTotal * .50)}.`);
            break;
        default:
            alert(`WooHoo! You drew the lucky number of ${luckyNumbers}. Therefore you pay absolutely nothing.`);
            break;
    }
}
console.log(calculateTotals(luckyNumbers,billTotal));


//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:

//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive

//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.

function num () {
    let num = prompt("Enter a number:");
    num = parseInt(num);
    if (num % 2 === 0 && num > 0) {
        alert("Your number is even.");
        alert(`Your number plus 100 is ${num + 100}.`);
        alert("Your number is positive");
    } else if (num % 2 === 0 && num < 0) {
        alert("Your number is even.");
        alert(`Your number plus 100 is ${num + 100}.`);
        alert("Your number is negative");
    } else if (!(num % 2 === 1 && num > 0)) {
        if (num % 2 === 1 && num < 0) {
            alert("Your number is odd.");
            alert(`Your number plus 100 is ${num + 100}.`);
            alert("Your number is negative.");
        } else {
            alert("Incorrect input data type.Fix yourself.");
        }
    } else {
        alert("Your number is odd.");
        alert(`Your number plus 100 is ${num + 100}.`);
        alert("Your number is positive.");
    }
}

function numberInput () {

    let question = confirm("Would you like to enter a number?");
    if (question === true) {
        num();
    } else {
        return alert("why dont you want to play?");
    }
}

console.log(numberInput());



if (confirm("would you like to enter a number?")){
    const num = Number(prompt("enter your number:"));

    if (num % 2 === 0) {
        alert("that is an even number");
    } else {
        alert("that is an odd number.");
    }

    alert(`${num} plus 100 is ${num + 100}`);

}

//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved