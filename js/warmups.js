// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."
//
//     These dots at the end also add to the string length.
//
//     For example, trim("Creating kata is fun", 14) should return "Creating ka..."
//
// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
//
// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
//
// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.
//
// e.g. trim("He", 1) should return "H...", because 1 <= 3
//
// Requested maximum length will be greater than 0. Input string will not be empty.

function trim (str, num) {
    if (str.length <= num) {
        return str;
    } else if ( str.length <= 3 ){
        return str.slice(0, num -3) + "...";
    } else {
        return str.slice(0, num) + "...";
    }
}


console.log(trim("Hel", 2 ));

function trims (str, num) {
    if (str.length < num) {
        return str;
    } else {
        return `${str.substring(0, num -3)}...`;
    }
}


/* Convert Address to Object Warmup
  * write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by space characters, and returns an object with properties streetNumber and streetName
  *
  * examples----
  * >> convertAddressToObject('8646 Sunny Oaks') {streetNumber: '8646', streetName: 'Sunny Oaks'}
  * >> convertAddressToObject('5408 Villa Nuevo') {streetNumber: '5408', streetName: 'Villa Nuevo'}
  */

function addressToObject(address){
    const streetNumber = address.split(' ', 1).toString();
    const indexOfFirstSpace = address.indexOf(' ');
    const streetName = address.substring(indexOfFirstSpace + 1);
    return {
        streetNumber : streetNumber,
        streetName : streetName
    }
}

console.log(addressToObject('5434 KingsLanding Drive'));

// write a function that accepts an array of numeric values and returns the average of those values.

function averageOfArrayNums(arrayOfNums){
    const numNums = arrayOfNums.length;
    let sum = 0;
    for (let i = 0; i < arrayOfNums.length; i++) {
        sum += arrayOfNums[i];
    }
    return sum / numNums;
}

// create a function named isAvgWhole

function isAvgWhole(arrayOfNums){
    return averageOfArrayNums(arrayOfNums) % 1 === 0;
}

// write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property

function totalPets(array){
    let numPets = 0;                         // initialize Accumulator variable
    array.forEach(person => numPets += person.pets);    // loop over array    // add pets to Accumulator

    /* for (let i = 0; i < array.length; i++){         // using for loop instead of forEach
         numPets += array[i].pets;    */

    /* for (const person of array){             // using a for of loop
    *      numPets += person.pets;  */
    return numPets;
}

console.log(totalPets([
    {name: 'Fernando Medoza', pets: 1},
    {name: 'James Bond', pets: 8},
    {name: 'Sarah OcConnor', pets:5},
    {name: 'Brian Dawkins', pets:3}
]));
