"use strict"

myLoopingFunction(3);
myLoopingFunction(10);

function myLoopingFunction(maxIterations) {
    for (let i = 0; i <= maxIterations; i++) {
        console.log("loop iteration i = " + i);
    }
}

console.log("done");


// 2
function showMultiplicationTable (number) {
    for(let i = 0; i <= 10; i++) {
        console.log( `${number} x ` + i + ` = ` + number  * i);
    }
}

console.log(showMultiplicationTable(7));

// 3
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

// 4

// FUNCTION FOR GENERATING A PYRAMID BASED OFF USER INPUT:
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

// example with Doc Rob
function pyramid () {

}

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

// 5
function exercise5 () {
    for (let i = 100; i >= 5 ; i-= 5) {
        console.log(i);
    }
}

console.log(exercise5());

