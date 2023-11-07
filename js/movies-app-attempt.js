
"use strict";

// const APIURL = "https://www.omdbapi.com?apikey=${OMDB_API_KEY}&t=${title}";

const movieCardsDiv = document.querySelector("#moviesDiv");
let movies = [];

// CODE BELOW WILL SEARCH MOVIE BY SPECIFIC TITLE FROM OMDB API-- could be used with search bar perhaps
async function searchByTitle(movie) {
    const title = movie.title;
    return await fetch(`https://www.omdbapi.com?apikey=fe48eb2f&t=${title}`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie);
            return title;
        })
}

searchByTitle({title: "Legends of the Fall"});


// CODE BELOW WILL SEARCH ALL MOVIES BY TITLE FROM OMDB API
// http://www.omdbapi.com/?s=Batman&page=2
const IMGPATH = `http://img.omdbapi.com/?apikey="fe48eb2f"&`;
//"Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg

async function getMoviesByTitle(searchTerm) {
    const APIURL = `https://www.omdbapi.com/?s=${searchTerm}&page=&apikey=fe48eb2f`;
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    console.log(respData.Search);

// respData.forEach(movie => {
//     console.log(movie);
//    const img = document.createElement('img');
//    img.src = IMGPATH + movie.Poster;
//
//    document.body.appendChild(img);
//     return movie;

}

getMoviesByTitle("The Hunger Games");

function generateCard(movie){
    const newCard = document.createElement("div");
    newCard.classList.add('movie');
    newCard.dataset.id = movie.id;

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.posterURL;
    moviePoster.alt = movie.imgAlt;
    newCard.appendChild(moviePoster);

    const movieTitle = document.createElement("h2");
    movieTitle.innerHTML = movie.title;
    newCard.appendChild(movieTitle);
}