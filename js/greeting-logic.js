import {randomNumber} from "./number-utils.js";



"use strict";

export const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

export function randomGreeting () {
        // picks random greetings element from the greetings array
        const index = randomNumber(0, greetings.length -1);
        return greetings[index];
}

