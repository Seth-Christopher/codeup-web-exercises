"use strict";

// WHILE LOOP

// let i = 1; // initialization
// while(i <= 10) { // test
//     console.log("help me: " + i);
//     i++;  // update
// }



// // DO WHILE
// do {
//     console.log(`while loop iteration #` + i);
//     i++;
// } while (i < 10);

/*
example with guessing game

let answer = Math.floor(Math.random() * 11);
let answer = 7;
let guess = 0;
while (guess !== answer) {
    guess = parseInt(prompt("Enter a number from 1 - 10"));
    if(guess !== answer) {
        console.log("Wrong!!");
    }
}
console.log("you guessed it");
*/
// guessing game with better syntax
let answer = 7;
// loop until the user guesses the number
while(true) {
    // get a guess from the user
    let guess = getGuessFromUser()

    // stop the loop if the user guesses the answer
    if(guess === answer) {
        console.log("you guess it!");
        break;
    }

    // you guessed wrong
    console.log("Wrong!");
}

function getGuessFromUser() {
    let guess = prompt("enter a number from 1 - 10");
    guess = parseInt(guess);
    if(guess < 1 || guess > 10) {
        console.log("please enter a number from 1 to 10");
        guess = 0;
    }
    return guess;
}


// FOR LOOP:
// initialization // test // update
for(let i = 0; i < 10; i++) {
    console.log("for loop: " + i)
}

// LOOPS WITH BREAK

for(let i = 0; i < 10; i++) {
    if(i > 5) {
        break;
    }
    console.log("for loop: " + i);
}

// LOOPS WITH CONTINUE
for(let i = 0; i < 10; i++) {
    if(i > 5) {
        console.log("skipping rest of loop iteration");
        continue;
    }
}

for (let i = 1; i < 100; i++) {

    if (i % 2 !== 0) { // if i is odd
        // number isn't even
        // odd numbers aren't as cool
        // skip  the rest of the loop and continue with the next iteration
        continue;
    }
    console.log(`here is a lovely even number: ` + i);
}


