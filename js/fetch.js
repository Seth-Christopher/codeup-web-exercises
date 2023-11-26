"use strict";

const ghOptions = {
    method: "GET",
    headers: {
        "Authorization": "token " + GITHUB_API_KEY
    }
}

let users = [];
let usersDiv = document.querySelector("#users")
function getUsers () {
    fetch("https://api.github.com/users", ghOptions)
        .then(response => response.json())
        .then(data => {
            users = data;

            loopingThroughUsers();
        })


    function loopingThroughUsers() {
        users.forEach((user) => {
            console.log(user);
            let card = displayUserData(user);
            // usersDiv.appendChild(card);
        })
    }

    // getUsers();

    function displayUserData(user) {
        // console.log(user);
        // create a new card for each user
        const newCard = document.createElement("div");
        newCard.classList.add("user");
        newCard.dataset.id = user.id;

        // create elements for the id, nodeID, and user login
        const userLogin = document.createElement("h4");
        // userLogin.textContent = user.login;

        const userID = document.createElement("h5");
        // userID.textContent = user.id;
        const nodeID = document.createElement("h5");
        // nodeID.textContent = user.node_id;


        // append the elements to the card

        newCard.appendChild(userLogin);
        newCard.appendChild(userID);
        newCard.appendChild(nodeID);

        // append the card to the usersDiv
        usersDiv.appendChild(newCard);
    }
}
getUsers();
// const usersLogin = data.login;
//
// const usersDiv = document.querySelector("#users").innerHTML +=
//     `<h1>${usersLogin}</h1>
//     `;
//



