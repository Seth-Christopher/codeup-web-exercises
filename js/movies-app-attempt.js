
"use strict";

// const APIURL = "https://www.omdbapi.com?apikey=${OMDB_API_KEY}&t=${title}";

const movieCardsDiv = document.querySelector("#moviesDiv");

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

//just attempting to create function that will show OMDB movielists

// const IMGPATH = `http://img.omdbapi.com/?apikey=${OMDB_API_KEY}&`;
// async function getMovies(searchTerm) {
//     const APIURL = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${OMDB_API_KEY}`;
//     const resp = await fetch(APIURL);
//     const respData = await resp.json();
//     console.log(respData.Search);

// respData.forEach(movie => {
//     console.log(movie);
//    const img = document.createElement('img');
//    img.src = IMGPATH + movie.Poster;

//    document.body.appendChild(img);
// });
//     return movie;
// }
// getMovies("Superman");


// const MOVIE_HOST = "http://localhost:3000/movies";
// async function updateDisplay() {
//
//     moviesDiv.innerHTML = "";
//
//     movies = await api.getAllMovies();
//     for (let movie of movies) {
//
//         // Get poster for each movie
//         await fetch(`http://omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movie.title}`)
//             .then(response => response.json())
//             .then(data => {
//                 posterURL = data.Poster;
//             });
//         poster = document.createElement("img");
//         poster.srcset = posterURL;
//     }
//     export async function getAllMovies() {
//         try {
//             return fetch(`${MOVIE_HOST}/movies`)
//                 .then(response => response.json());
//         } catch(error) {
//             console.error (error);
//         }
//     }}

