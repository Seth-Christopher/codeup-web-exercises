"use strict";


/*let userChoice = confirm("Wait don't leave me yet! I chat with you yes?");

if (userChoice === true){
    console.log("yea baby");
} else {
    console.log("booo");
}
*/

/* prompt */
 let currentSpeed = prompt( " how fast are you driving");
 let plannedSpeed = prompt( " how fast do you want to drive ");
 let distanceLeft = prompt( " how many miles do you have left? ");

 let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;

 let timeAtPlannedSpeed = (distanceLeft/plannedSpeed) * 60;

 let timeSaved = timeAtCurrentSpeed - timeAtPlannedSpeed;

 console.log(`At your current speed you will take ${timeAtCurrentSpeed.toFixed(0)} minutes. At your planned speed you will take ${timeAtPlannedSpeed.toFixed(0)}  minutes. You will save ${timeSaved.toFixed(0)} minutes. `);


