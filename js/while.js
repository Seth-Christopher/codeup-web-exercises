/*
Create a while loop that uses console.log() to create the output shown below.
 2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
65536
*/

// first create a variable to hold a number = 1
let num = 1;
// create a while loop < 65536
while(num < 65536){
    num*=2; // will continue to multiply itself by 2. until num < 65536 is true;
    console.log(num);
}


/*
DO WHILE LOOP

An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;
The output should be similar to the following:

    5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones
*/

function getRandomInt (min, max) {
    return Math.floor(Math.random()) * (max - min) + min;
}


// create a variable to hold a random int between 50 - 100. this is the number of cones she has to sell
let totalCones = getRandomInt(50, 100);

// create another uninitialized variable to hold how many cones a customer will buy
let wantToBuy;

// create a do while(totalCones > 0
do{
    // reassign the wantToBuy variable with a random number 1-5
    wantToBuy = getRandomInt(1,5);
    // if the customer wants to buy fewer or the same number of cones than available
    //log `a customer wants to buy x cones
    // decrement totalCones by how many cones they bought
    if(wantToBuy <= totalCones){
        console.log(`a customer buys ${wantToBuy} cones.`)
        totalCones -= wantToBuy;
    } else{
        // otherwise, log `A customer tries to buy x cones, but you only have x left`
        console.log(`A customer tries to buy ${wantToBuy} cones but you only have ${totalCones} left`)
    }
    console.log(`You now have ${totalCones} cones remaining.`)

    if(totalCones === 0){
        console.log(`You sold all your cones! You can go home now.`)
    }


}while(totalCones > 0)

