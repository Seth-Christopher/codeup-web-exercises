/* Write a function named sumOfStringLengths that accepts an array of strings. The function returns the sum of the lengths of all the strings in the array.
console.log(sumOfStringLengths([""])); // outputs 0
console.log(sumOfStringLengths(["the", "big", "pizza"])); // outputs 11 */
function sumOfStringLengths (strings) {
    const sum = strings.join('');
    {
        console.log(sum.length);
    }
}
/* Write a function named findTheFirstNumber that accepts an array of any types and returns the index of the first element in the array that is a number. Use your isNumber function from problem 1. Return -1 if no number is in the array.
console.log(findTheFirstNumber(["the", "big", 3, "pizza"])); // outputs 2
console.log(findTheFirstNumber(["the", "big", "pizza"])); // outputs -1
console.log(findTheFirstNumber([1, "x", 2, "y"])); // outputs 0 */


/* Write a function called makePerson that accepts two strings and a number as parameters and returns an object where the first string is the object's firstname field, the second string is the object's lastname field, and the number is the object's age field.
console.log(makePerson("bob", "smith", 42));
// outputs { firstname: 'bob', lastname: 'smith', age: 42 } */

/* Write a function named getFullName that accepts an object with the fields firstname and lastname. The function returns a concatenation of the firstname and lastname fields with a space between them.
console.log(getFullName({
    firstname: "Bob",
    lastname: "smith"
})); // outputs Bob smith

console.log(getFullName({
    firstname: "RAGNAR",
    lastname: "Jonez",
    age: 42
})); // outputs RAGNAR Jonez
*/

/* Write a function called getAverageAge that accepts an array of objects. Each object has an age field. The function returns the average of all the ages in the array's objects. You may assume that no array will be empty and that all objects have an age field that is a number.
console.log(getAverageAge([
    {
        age: 20
    },
    {
        firstname: "bob",
        age: 42
    }
])); // outputs 31*/

/* Write a function called findShortestFullName that accepts an array of objects. Each object has the fields firstname and lastname. The function returns the full name that has the shortest length. A full name is the concatenation of firstname and lastname fields with a space between them. If more than one full name have the same shortest length, your function will return the FIRST full name that has the shortest length. You may assume that no array will be empty and that all objects have firstname and lastname fields that are strings. Use your getFullName function from problem 4.
console.log(findShortestFullName([
    {
        firstname: "ragnar",
        lastname: "smith",
        age: 42
    },
    {
        firstname: "tom",
        lastname: "cat"
    },
    {
        firstname: "sue",
        lastname: "xyz"
    }
])); // outputs tom cat */

/* Write a function called getLengthOfWords that takes a string and returns the total number of characters of the words in the string. A "word" is defined as non-whitespace characters separated from other words by a space. Use your sumOfStringLengths function from problem 2.
console.log(getLengthOfWords("the quick brown fox")); // outputs 16
console.log(getLengthOfWords("1 fish 2 fish red fish blue fish")); // outputs 25 */


// <!---------- ACTUAL TEST TAKEN BELOW----------->


/*
1.
Write a function named checkForNumber that accepts an argument and returns a string 'number' or "not a number" based on whether the input is a number.

checkForNumber(-1) // "number"
checkForNumber(0) // "number"
checkForNumber(6) // "number"
checkForNumber() // "not a number"
checkForNumber("hello") // "not a number"
checkForNumber("777") // "not a number"



2.
Write a function named evenOrOdd that returns the string "even" or "odd" when passed a numeric argument. The resulting string should represent whether the number is even or odd.

evenOrOdd(20) // "even"
evenOrOdd(0) // "even"
evenOrOdd(-28) // "even"
evenOrOdd("22") // "even"
evenOrOdd(5) // "odd"
evenOrOdd(-93) // "odd"
evenOrOdd("37") // "odd"


3.
Write a function named doubleTheElements that accepts an array of numbers and returns an array with double the value of each number. You can EITHER create and return a completely new array that stores the doubled elements, or you can double the elements in the array parameter and simply return the parameter.

doubleTheElements([7, 8, 9, 10]) // [14, 16, 18, 20]
doubleTheElements([1, 2, 3]) // [2, 4, 6]
doubleTheElements([9, -9, 9.2]) // [18, -18, 18.4]


4.
Write a function named sumOfElements that accepts an array of numbers and returns the sum of those numbers.

sumOfElements([1, 2, 3]) // 6
sumOfElements([4, 6, 8, 10, 12]) // 40
sumOfElements([1, .5]) // 1.5


5.
Write a function named average that accepts an array of numbers and returns the AVERAGE of those numbers. HINT: you can use your sumOfElements function from the above problem to help you with this problem.

average([1, 2, 3]) // 2
average([4, 6, 8, 10, 12]) // 8
average([1, 2]) // 1.5

6.
Write a function named totalPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the sum of every object's price property.

totalPrice([
    {name: 'tomatoes', price: 4},
    {name: 'potatoes', price: 6},
    {name: 'wine', price: 16},
])
// returns 26


7.
Write a function named findHighestPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the highest price value from the array. findHighestPrice.

findHighestPrice([
    {name: 'tomatoes', price: 4},
    {name: 'potatoes', price: 6},
    {name: 'wine', price: 16},
])
// returns 16

/*
8.
Write a function named newProduct with two parameters, a string that contains a name, and a number representing the product's price, and returns an object with properties name and price.
*/

function newProduct (name, price) {
    return {
        name, price
    }
}


/*
newProduct('tomatoes', 3.99) // returns {name: 'tomatoes', price: 3.99}
newProduct('Yu-Gi-Oh Booster Pack', 5.89) // returns {name: 'Yu-Gi-Oh Booster Pack', price: 5.89}
*/

/*
9.
Write a function named countWords that accepts a string and returns the number of words in that string. A "word" is defined as non-whitespace characters separated from other words by a space.*/
function countWords (string) {
    return string === "" ? 0 : string.split (" ").length;
}

/*
countWords('Hello, Codeup!') // 2
countWords('The quick brown fox jumps over the lazy dog!') // 9
 */


/*
10.
Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative. */

/*
isNegative(-1) // true
isNegative(-5) // true
isNegative(0) // false
isNegative(6) // false
*/


/*
11.
Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10. */


/*
isTen(1) // false
isTen(10) // true
isTen('10') // false
*/