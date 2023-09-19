"use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Christopher", "Alexander", "Avonye", "James"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
        console.log('The first name is: ' + names[0]);
    // The first name is: Christopher

    console.log('The second name is: ' + names[1]);
    // The second name is: Alexander

    console.log('The third name is: ' + names[2]);
    // The third name is: Avonye

    console.log('The fourth name is: ' + names[3]);
    // The fourth name is: James


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

/**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // loop through the array and log the values
    names.forEach(name => console.log(`Here is the name of a Fallen Comrade: ${name}.`));

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array

     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first (array){
        return array[0];
    }
    function second (array){
        return array[1];
    }

    function last (array){
        return array[array.length -1]
    }

    // below are logs to see if code above works
console.log(first(["james", "seth", "alex"]));
console.log(second(["james", "seth", "alex"]));

console.log(last(names));
