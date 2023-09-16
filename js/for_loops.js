"use strict"


// basic looping example

myLoopingFunction(3);
myLoopingFunction(10);

function myLoopingFunction(maxIterations) {
    for (let i = 0; i <= maxIterations; i++) {
        console.log("loop iteration i = " + i);
    }
}

console.log("done");


// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable (number) {
    for(let i = 0; i <= 10; i++) {
        console.log( `${number} x   ${i}   =  ${number*i}`);
    }
}

console.log(showMultiplicationTable(7));

// Use a for loop and the functions from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
function exercise3 (number) {
    number = Math.floor(Math.random() * (200 - 20)) + 20;

    for (let i = 0; i < 10; i++) {
        if (number % 2 === 0){
            console.log(`${number} is even`);
        }
        if (number % 2 !== 0) {
            console.log(`${number} is odd.`);
        }
    }
}
console.log(exercise3());

 // solutions with Billy
for (let i = 0; i < 10; i++) {
    let number = getRandomInt(20, 200);
    console.log(`The number is: ${number}`)
    console.log(`Number is even: ${isEven(number)}`);
}



// below are two functions from previous lessons.
function getRandomInt (min, max) {
    return Math.floor(Math.random()) * (max - min) + min;
}
function isEven (num) {
    return num % 2 === 0;
}



// Create a for loop that uses console.log to create the output shown below.

// FUNCTION FOR GENERATING A PYRAMID BASED OFF USER INPUT WITH TWO ERRORS:
function generatePyramid(totalNumberOfRows) {
    if (!Number.isInteger(totalNumberOfRows)) throw new Error("Total number of rows must be an integer."); // throw error if
    if (totalNumberOfRows < 0) throw new Error("Total number of rows cannot be less than zero."); // throw error if

    let output = '';
    for (let i = 1; i < totalNumberOfRows; i++) {
        output += `${i.toString().repeat(i)}\n`;
    }

    return output;
}

console.log(generatePyramid(10));

// FOR LOOP TO GENERATE PYRAMID  `ISAACS SOLUTION`
for (let i = 0; i < 10; i++) {
    let repeatNumber = "" + i;
    console.log(repeatNumber.repeat(repeatNumber));

}

// example with BILLY


for (let i = 1; i <= 9; i++) {
    let str = `${i}`;
    for (let j = 1; j < i; j++) {
        str += i;
    }
    console.log(str);
}

// example with Doc Rob

function numberRow() {
    // output a row in the console that is numNumbers digits long
    // for example numberRow(5)
    // will print 55555
    let output = "";
    for (let i = 0; i < numNumbers; i++) {
        output += numNumbers;
    }
}
/* short weird way of doing the pyramid for loop

const generatePyramids=e=>[...Array(e).keys()].map(e=>(e+"").repeat(e)).join("\n");
console.log(generatePyramids(8))

*/

// create a for loop that decriments by 5 from 100:
function exercise5 () {
    for (let i = 100; i >= 5 ; i-= 5) {
        console.log(i);
    }
}

console.log(exercise5());

