"use strict"

// prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

function randomNumberFromUser() {
    let guess = prompt("enter an odd number from 1 - 50");
    guess = parseInt(guess);
    for (let i = 1; i <= 50; i++) {
        if (guess < 1 || guess > 50 || guess % 2 === 0) {
           prompt("please enter a valid odd number between 1 to 50");
            guess = 0;
            break;
        }
        return guess;
    }
}

// enter loop until user gets odd number

console.log(randomNumberFromUser());



// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


// function oddNumberContinue () {
//     let input = prompt("Enter an odd number between 1 - 50.");
//     input = parseInt(input);
//     for (let i = 1; i <= 50; i++) {
//         if (i === input || i % 2 === 0) {
//             continue;
//         }
//         console.log(`Here is an odd number: ` + i);
//     }
// }
//
// oddNumberContinue();


// } if (input != Number || input % 2 !== 0) {
//     prompt("Wrong! input a valid odd number.");
// }
//



// function getOddNumber() {
//     let input = prompt("Enter a number from 1 - 50");
//     input = parseInt(input);
//     if (input < 1 || input > 50 || input % 2 === 0) {
//         console.log("please enter a valid odd number from 1 to 50");
//         input = 0;
//     }
//     return input;
// }
// getOddNumber();



// example with BILLY

// created isEven function to use within our loop
function isEven (num) {
    return num % 2 === 0;
}

// create a variable to hold int for number entered
let userNum;
// do while loop while(true)
do {
    //prompt user for input and parse it in to an int
    userNum = parseInt(prompt(`Please enter an odd number between 1 - 49`));

    // if a number is even, alert the user and continue
    if (isEven(userNum)) {
        alert(`${userNum} is even. Please enter an odd number`);
        continue;
    }



// if a number is less than 1 or greater than 49, alert the user and continue
if(userNum < 1 || userNum > 49){
    alert(`${userNum} is out of bounds. Please enter a number between 1 and 49`)
    continue;
}

//if a number is not finite, alert the user and continue
if(!isFinite(userNum)) {
    alert(`${userNum} is not a number. Please enter a valid number.`)
    continue;
}

break;
}while(true);