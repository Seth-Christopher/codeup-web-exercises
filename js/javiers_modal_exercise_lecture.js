const gizmoList = [
    {
        id: 1,
        title: "Fly Eagles Fly",
        imgSrc: "img/philly.eagles.png",
        imgAlt: "Philadelphia Eagles logo",
        description: "Go Birds! Need I say more."
    },
    {
        id: 2,
        title: "San Antonio",
        imgSrc: "img/spurs.png",
        imgAlt: "The San Antonio Spurs",
        description: "The San Antonio Spurs are the greatest basketball dynasty."
    },
    {
        id: 3,
        title: "Bruce Lee",
        imgSrc: "img/bruce.lee.png",
        imgAlt: "Bruce Lee",
        description: "The greatest Martial Artist of all time!"
    },
    {
        id: 4,
        title: "The Goat",
        imgSrc: "img/cr7.png",
        imgAlt: "Cristiano Ronaldo",
        description: "Legend has it, even actual Goats refer to him as the G.O.A.T."

    }
];

function generateCard(gizmoObject){
    const newCard = document.createElement("div");
    newCard.classList.add('gizmo');
    newCard.dataset.id = gizmoObject.id;

    const newCardH2El = document.createElement("h2");
    newCardH2El.innerText = gizmoObject.title;
    newCard.appendChild(newCardH2El);

    const newCardImgEl = document.createElement("img");
    newCardImgEl.src = gizmoObject.imgSrc;
    newCardImgEl.alt = gizmoObject.imgAlt;
    newCard.appendChild(newCardImgEl);

    const newCardP = document.createElement("p");
    newCardP.innerText = gizmoObject.description;
    newCard.appendChild(newCardP);

    const newCardEditButton = document.createElement("button");
    newCardEditButton.innerText = "Edit";
    newCardEditButton.addEventListener('click', handleEditButtonClick);
    newCard.appendChild(newCardEditButton);

    const newCardRemoveButton = document.createElement("button");
    newCardRemoveButton.innerText = "Remove";
    newCardRemoveButton.addEventListener('click', handleRemoveButtonClick);
    newCard.appendChild(newCardRemoveButton);

    return newCard;
}

const addCardButton = document.querySelector("header button");

const addCardSubmitButton = document.querySelector("div#addCardFormWrapper button");

const editButtons = document.querySelectorAll("button.edit");
const editCardSubmitButton = document.querySelector("#editCardForm").querySelector("button");

const removeButtons = document.querySelectorAll("button.remove");

const gizmosDiv = document.querySelector("#gizmos");


addCardButton.addEventListener('click', () => {
    document.querySelector("#addCardFormWrapper").classList.toggle('hideForm');
    document.querySelector("#addCardFormWrapper").classList.toggle('showForm');
});

addCardSubmitButton.addEventListener('click', event => {
    // very important !!!!!!!!!
    event.preventDefault();

    const newCardObject = {
        // using a global variable inside a function is questionable
        id: gizmosDiv.children.length + 1,
        title: document.querySelector("#title").value,
        imgSrc: document.querySelector("#image").value,
        imgAlt: document.querySelector("#title").value,
        description: document.querySelector("#description").value
    }

    // Add the new elements to the page
    document.querySelector("#gizmos").appendChild(generateCard(newCardObject));
    addCardButton.click();
});



function handleEditButtonClick(event){

    const cardToEdit = event.target.parentElement;

    const modalWrapper = document.querySelector("#editCardModalWrapper");
    modalWrapper.classList.remove("hideModal");
    modalWrapper.classList.add("displayModal");

    const editCardForm = document.querySelector("#editCardForm");

    const id = cardToEdit.dataset.id;
    const title = cardToEdit.querySelector("h2").innerText;
    const image = cardToEdit.querySelector("img").getAttribute("src");
    const description = cardToEdit.querySelector("p").innerText;
    editCardForm[1].value = title;
    editCardForm[2].value = image;
    editCardForm[3].value = description;
    editCardForm[4].value = id;
}
window.addEventListener('click', event => {
    const modalWrapper = document.querySelector("#editCardModalWrapper");
    if (event.target === document.querySelector("#editCardModalWrapper")){
        modalWrapper.classList.remove("displayModal");
        modalWrapper.classList.add("hideModal");
    }
});





editButtons.forEach(editButton => {
    editButton.addEventListener('click', handleEditButtonClick);
});

editCardSubmitButton.addEventListener('click', event => {
    event.preventDefault();
    const cardId = document.querySelector("#editCardId").value;
    const newTitle = document.querySelector("#editCardTitle").value;
    const newImageLink = document.querySelector("#editImageLink").value;
    const newDescription = document.querySelector("#editImageDescription").value;
    const cardToEdit = document.querySelector(`[data-id="${cardId}"]`);
    cardToEdit.querySelector("h2").innerText = newTitle;
    cardToEdit.querySelector("img").setAttribute("src", newImageLink);
    cardToEdit.querySelector("p").innerText = newDescription;
    document.querySelector("#editCardModalWrapper").click();
});

function handleRemoveButtonClick (event) {
    if (confirm("Are you sure?")){
        event.target.parentElement.remove();
    }
}

removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', handleRemoveButtonClick);
});

gizmoList.forEach(gizmo => gizmosDiv.appendChild(generateCard(gizmo)));