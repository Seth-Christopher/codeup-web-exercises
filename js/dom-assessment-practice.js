// -1- When the user clicks the button with the id of change-heading, the content of the h1 element with the id of main-heading changes from DOM TO I control the DOM.
let changeHeading = document.querySelector("#change-heading");
let header = document.querySelector("#main-heading");

changeHeading.addEventListener('click', () => {
    header.innerText = "This is my DOM now!";
})

// -2- When the user clicks on the button with the id of getInput, the content of the input with the id of userInput shows up in the paragraph with the id of showInput.
let getInput = document.querySelector("#getInput");
let showInput = document.querySelector("#showInput");
let userInput = document.querySelector("#userInput");

getInput.addEventListener('click', () => {
    showInput.innerText = `Hello there ${userInput.value}`;
})


// -3- When the user's mouse enters the section with the id of changes, all the text in that section becomes color hotpink.
let changes = document.querySelector("#changes");
changes.addEventListener('mouseenter', () => {
    changes.style.color = "hotpink";
    changes.addEventListener('mouseleave', () => {
        changes.style.color = "black";
    })
})
// -4- When the user's mouse enters the section with the id of serifChanger, the section gets the class sans-serif added to it.
let serifChanges = document.querySelector("#serifChanger");
serifChanges.addEventListener('mouseenter', () => {
    serifChanges.style.fontFamily = "sans-serif";
    serifChanges.addEventListener('mouseleave', () => {
        serifChanges.style.fontFamily = "times new roman";
    })
})



// -5- When the user clicks the button with the id of newParagraph, a paragraph identical to the first one (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim hic illum impedit ipsa iure mollitia nam possimus quae qui? Atque dolores laudantium, minus officiis pariatur quo repellendus soluta ullam.</p>) is appended to the section with the id of moreParagraphs.
let newParagraphButton = document.querySelector("#newParagraph");
let moreParagraphs = document.querySelector("#moreParagraphs");
let moreParagraphsP = document.querySelector("#moreParagraphs p").innerText;

newParagraphButton.addEventListener('click', () => {
    const newPElement = document.createElement("p");
    newPElement.innerText = moreParagraphsP;
    newParagraphButton.appendChild(newPElement);
    newParagraphButton.appendChild(moreParagraphs);
})

// -6- When the user's mouse enters the section with the id of big-and-small, the section gets the class go-big toggled on if it's off and off if it's on.
let bigSmall = document.querySelector("#big-and-small");
bigSmall.addEventListener('mouseenter', () => {
    bigSmall.classList.toggle('go-big');
})

// -7- Three seconds after the page loads, a paragraph with the content "Document Object Model" appears under the main heading in the header element.

// -8- When the user's mouse enters the Codeup logo, the image changes from img/logo.png to img/OfficialCodeupLogo.png. Hint: modify the value of the src attribute.

// -9- When the user clicks on the last "Click Me" button, all the h2 elements in any section on the page start disappearing and reappearing every second.

// -10- When the user clicks on a Click Me button, the text in the corresponding paragraph with the text "Change Me" changes to "You changed me!". For example, if the first button is clicked, the first paragraph changes. If the second paragraph is clicked, the second paragraph changes, and so forth.
