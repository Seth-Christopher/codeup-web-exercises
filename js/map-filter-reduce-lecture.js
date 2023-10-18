"use strict";
// array of random prices that was dropped in slack by Javier
const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// forEach loop is used primarily with arrays
// below we are using a basic function declaration within the forEach method
// forEach takes a function as the argument
// function takes up to 3 arguments
                        // function parameter should typically be named something relative to the array
prices.forEach(function (price, index) {
    console.log(`Item number ${index}: $${price}`);
});


// using the given array below, use the forEach method to loop through the array and console log both the name, and id or index of the character name.

const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];


smashers.forEach(function (smasher, id) {
    console.log(`${smasher} has an ID of ${id}`);
});


// ---------------------------------------------------- 2nd example below using arrow function and creatingElement to dynamically add to HTML page ----------------------------------------------

// create a const variable and use a querySelector to reference "#output from html page
const outputDiv =     document.querySelector("#output");

// below we are using an arrow function to essentially do the same thing. Just remove name function and add Arrow

smashers.forEach((smash, id) => {

// below we createElement to add dynamically to HTML page. This instance we are adding to the paragraph within the <div id= "output"
    const smashP = document.createElement("p");

    // below we call the smashP variable and use .innerText to add what we want to the "p" element on the HTML form
    smashP.innerText = `Character id ${id + 1}: ${smash}`;

    // below we call the original outputDiv variable which is the array of smashers, and use appendChild to actually add the createdElement of (smashP) to the page.
    outputDiv.appendChild(smashP);
});

//====================================================== .map below ===========================

// .map generates a new array by mapping the old values onto the new values
// we name a variable called pricesDoubled and give it the value of prices.map with an arrow function.
const pricesDoubled = prices.map(price => price * 2);

//===== below we create the same pricesDoubled variable and instead of using an arrow function we use a basic function
/* const pricesDoubled = prices.map(function (price) {
     return price * 2;
    });
*/

console.log(pricesDoubled);

//============================= new array of car objects

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];
// below we could create a new array using the .map method, and only select the mileage from the cars array,
const mileages = cars.map(car => car.mileage);


//=================== .filter method

// created a variable called lowMileages with a value that will .filter out all mileages less than < 10000 within the cars array
const lowMileages = cars.filter(car => car.mileage < 10000);

// using forEach to loop through each car less than < 10000 miles that was created with the above variable.
// added an arrow function to the forEach and giving the set of instructions of creating a const variable of carParagraph that we use to document.createElement within the "p" (paragraph) of our HTMl page.
lowMileages.forEach(car => {
    const carParagraph = document.createElement("p");
    // calling the carParagraph variable we now .innerText to dynamically add conent to the HTML page.
    carParagraph.innerText = `I found a ${car.make} ${car.model} with ${car.mileage} miles.`;
    // below we use the outputDiv we originally created at the top of this JS file , which uses a querySelector to specifically select the <div id="output"> and add to the page using the appendChild. The value of appendChild is our carParagraph variable which creates an Element in the "p" (paragraph) portion of the HTML page.
    outputDiv.appendChild(carParagraph);
});