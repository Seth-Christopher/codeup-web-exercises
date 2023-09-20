// write a function called subtract that takes 2 numbers and returns the  first number minus the seconed
function subtract (a, b) {
    return a - b;
}

// write a function called cube that takes a number and returns the cube of that number
function cube (num){
    return num ** 3;
}

// write a function called isGreaterThan that takes 2 numbers and returns true if the number is greater than the second number
function isGreaterThan (a, b){
    return a > b;
}



// Define a function named 'Palindrome'
function isPalindrome (string){
    if (typeof string === "string"){
        string = string.toLowerCase();
        return string.split("").reverse().join('') === string;
    } else {
        return false;
    }
}