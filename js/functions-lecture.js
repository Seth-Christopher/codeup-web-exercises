// function declaration

// start with the `function` keyword
// follow with name of the function.
// think of what information you need to make this program work: these are the parameters
// you name the parameters and put them in a comma seperated list.
// open pair of curly braces you put the code that will actually run
// this is called the code block

// finally you create a return statement

/*function addTwoNumbers (firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    return sum;
}
*/
/*
function timeIWouldSave (currentSpeed, plannedSpeed, distanceToTravel) {

    const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
    const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
    return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
}
*/

//console.log(timeIWouldSave(65,70,109));



// ARROW FUNCTION

// doesn't use the `function` keyword
// define a variable with a variable
// that variable name is how you call the function
// you put the parameters inside parenthesis
// then you have an `arrow` (angle bracket and equals sign)
// then you have the return value


//const addTwoNumbers = (num1, num2) => num1 + num2;

const timeIWouldSave = (currentSpeed, plannedSpeed, distanceToTravel) => {
    const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) * 60;
    const timeAtPlannedSpeed = (distanceToTravel / plannedSpeed) * 60;
    return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
}


// FUNCTION EXPRESSION
// these have basically been replaced by arrow functions
// the value of this is that you have a variable name that is a reference to a function
// that is useful if you ever need to pass a function to another function, or return a function from a function
const add = function(num3, num4) {
    return( num3 + num4);
}
 console.log(add(3,3));
