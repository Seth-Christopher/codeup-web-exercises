"use strict"


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

console.log(randomNumberFromUser());

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

// output all odd numbers between 1 - 50
// except for number the user inputs

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

