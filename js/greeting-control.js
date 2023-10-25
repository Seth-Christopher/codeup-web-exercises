import * as greets from "./greeting-logic.js";
import { randomGreeting} from "./greeting-logic.js";


"use strict"

function main () {
    document.querySelector("#greet-button").addEventListener("click", greetUser)

}


function greetUser () {
    // 1. grab user name
    const userName = document.querySelector("#greet-name").value;
    // 2. call greeting
    const greeting = randomGreeting() + " " + userName;
    // 3. output greet to greeting paragraph
    document.querySelector("#greeting").innerText = greeting;
}

console.log(randomGreeting());


main();