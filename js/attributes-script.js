// Two seconds after the page loads, change the "profile-pic" src attribute to a different image.
function changeProfilePic () {
    let img = document.querySelector('#profile-card img');
    img.src = "https://willetspen.com/cdn/shop/collections/gobirds.jpg?v=1674608757";
}
// setInterval(changeProfilePic, 2000);


//     Four seconds after the page loads, use innerHTML to change the name in "profile-name".
function changeProfileName () {
    let profileName = document.querySelector('#profile-name');
    profileName.innerHTML = "Dirty Birds";
}
// setInterval(changeProfileName, 4000);

//     Six seconds after page loads, add a new class to "profile-desc" that changes the color and font of the description text.
function changeProfileDesc () {
    let profileDesc = document.querySelector('#profile-desc');
    profileDesc.style.color = "#036a38"; font = "monospace";
}
// setInterval(changeProfileDesc, 6000);

//     Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
function toggleBoggle () {
    let profileCardToggle = document.querySelector('#profile-card');
    profileCardToggle.classList.toggle('profile-card');
}
    // setInterval(toggleBoggle, 7000);

function allTimer () {
    setInterval(changeProfilePic, 1200);
    setInterval(changeProfileName, 2000);
    setInterval(changeProfileDesc, 3000);
    setTimeout(toggleBoggle, 4000);
}
allTimer();


// BELOW IS MY ATTEMPT AT A RANDOM BACKGROUND COLOR GENERATOR


const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F']

let btn = document.querySelector('#toggle-btn');

//addEventListener
btn.addEventListener("click", (event) => {

    console.log(event)

    let randomColor = "#"

    for (let i = 0; i < 6; i++) {
        randomColor += hex[getRandomNumber()]
    }

    document.body.style.backgroundColor  = randomColor;
})
function getRandomNumber() {

    return Math.floor(Math.random() * hex.length)

}



// function setColor() {
//     let x = document.body;
//     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }
// setInterval(setColor, 2000);
//
// function stopColor() {
//     clearInterval(myInterval);
// }

