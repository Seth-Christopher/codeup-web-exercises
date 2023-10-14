"use strict";

const highlightButtons = document.querySelectorAll(".national-parks button");

const headersBold = document.querySelectorAll(".national-parks h3");

/* created a function that will style the last list items background color to yellow */
function lastListItemHighlight (event) {
    console.log(event.target.parentElement.firstElementChild.nextElementSibling.lastElementChild);

    const lastLi = event.target.parentElement.firstElementChild.nextElementSibling.lastElementChild;

    lastLi.style.backgroundColor = 'yellow';
    // lastLi.addEventListener('click', function() {
    //   this.style.backgroundColor = 'yellow';
    // })
}
highlightButtons.forEach(highlightButton => {
    highlightButton.addEventListener('click', lastListItemHighlight);
});

/* created a function that changes the h3 heading to bold when clicked */
function headerBolder (event) {
    console.log(event.target)
    const lisBold = event.target.parentElement.firstElementChild.nextElementSibling;
    lisBold.style.fontWeight = 'bold';
}
headersBold.forEach(headerClick => {
    headerClick.addEventListener('click', headerBolder);
});


/*JAVIERS EXAMPLE FOR CREATING A BOLD STYLE TO BODY OF PARAGRAPH WHEN CLICKING THE <H3>

document.querySelectorAll("h3").forEach(h3 => {
    h3.addEventListener('click', () => {
        h3.nextElementSibling.style.fontWeight = "bold";
    });
});*/


// When any list item is clicked, the first li of that list item's parent ul should have a font color of blue
document.querySelectorAll("li").forEach(li => {
    li.addEventListener('click', () => {
        li.parentElement.firstElementChild.style.color = "blue";
    });
});