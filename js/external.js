alert("Hello! Welcome to my website.");



let favColor = prompt("What is your favorite color?");

let responseToFavColor = (`Great, ${favColor} is my favorite color as well! `);

alert(responseToFavColor);

// exercise 3 Working with Data Types, Operators and Variables

// movies question:

let littleMermaid = prompt("How many days do you plan on renting the Little Mermaid?");
let brotherBear = prompt("How many days do you plan on renting Brother Bear?");
let hercules = prompt("How many days are you renting Hercules for?");

let pricePerMovie = 3;

let totalForMermaid = littleMermaid * pricePerMovie;
let totalForBB = brotherBear * pricePerMovie;
let totalForHercules = hercules * pricePerMovie;

if (littleMermaid == 0){
    alert("So not renting the Little Mermaid, got it.");
} else { alert(`Ok renting the Little Mermaid will cost you ${totalForMermaid} dollars if you decide to rent for ${littleMermaid} days. `);
}
if (brotherBear == 0){
    alert("So not renting Brother Bear, got it.");
} else { alert(`Renting Brother Bear will cost you ${totalForBB} dollars if you decide to rent for ${brotherBear} days. `);
}
if (hercules == 0){
    alert("So not renting Hercules, got it.");
} else { alert(`And renting Hercules will cost you ${totalForHercules} dollars if you decide to rent for ${hercules} days. `);
}




// payment question:


let google = (prompt("How many hours did you work this week for Google?")) * 400;
let amazon = (prompt("How many hours did you work this week for Amazon?")) * 380;
let facebook = (prompt("How many hours did you work this week for Facebook?")) * 350;

let totalPay = google + amazon + facebook;

alert(`You will earn ${google} dollars this pay period for your time at Google.`);
alert(`You will earn ${amazon} dollars this pay period for your time at Google.`);
alert(`You will earn ${facebook} dollars this pay period for your time at Facebook.`);

alert(`You would bring $${totalPay} dollars total!`);



// student enrollment question:

let classNotFull = confirm("Is there room in the class you are trying to join?");
let classConflict = confirm("Is the schedule conflicting at all?");
let enrolled = classNotFull && classConflict;


if (enrolled === true) {
    alert("Lucky for you, we can still get you into the class.");
} else {
    alert("Im sorry it wont work out for you");
}


// product offer question:

let personBoughtMoreThanTwo = confirm("Did the person buy more than two items?");
let offerHasExpired = confirm("Has the offer expired?")
let premiumMember = confirm("Is the person a premium member ");

let productOfferCanBeApplied = (personBoughtMoreThanTwo || premiumMember) && !offerHasExpired;


alert(`It is ${productOfferCanBeApplied} that we can apply the offer.`)