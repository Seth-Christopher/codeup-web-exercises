"use strict"

function renderCoffee(coffee) {
    // let html = '<tr class="coffee">';
    // html += `<td>${coffee.id}</td>`;
    // html += `<td>${coffee.name}</td>`;
    // html += `<td>${coffee.roast}</td>`;
    // html += '</tr>';
    //
    // return html;
    let html = `
    <div>
        <h3>${coffee.name}</h3>
        <p>${coffee.roast}</p>
    </div>
    `;
    return html;
}


function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    const selectedRoast = roastSelection.value;
    const filteredCoffees = [];
    coffees.forEach( coffee => {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    section.innerHTML = renderCoffees(filteredCoffees);
}

// function coffeeSearch {
//     if ()
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

const section = document.querySelector('#coffees');
const submitButton = document.querySelector('#submit');
const roastSelection = document.querySelector('#roast-selection');

section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);



<!-- added modal when searching -->
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal =document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
    modal.showModal();
})

closeButton.addEventListener("click", () => {
    modal.close();
})

