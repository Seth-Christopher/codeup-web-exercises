
"use strict";

// const APIURL = "https://www.omdbapi.com?apikey=${OMDB_API_KEY}&t=${title}";



// CODE BELOW WILL SEARCH MOVIE BY SPECIFIC TITLE FROM OMDB API
// async function getMovieByTitle(movie) {
//     const title = movie.title;
//     return await fetch(`https://www.omdbapi.com?apikey=fe48eb2f&t=${title}`)
//         .then(response => response.json())
//         .then(movie => {
//             console.log(movie);
//             return title;
//         })
// }
//
// getMovieByTitle({title:"austin powers"});



// CODE BELOW WILL SEARCH ALL MOVIES BY TITLE FROM OMDB API

http://www.omdbapi.com/?s=Batman&page=2
const IMGPATH = `http://img.omdbapi.com/?apikey="fe48eb2f"&`;
//"Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg
async function getMovies(searchTerm) {
    const APIURL = `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=fe48eb2f`;
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    console.log(respData.Search);

// respData.forEach(movie => {
//     console.log(movie);
//    const img = document.createElement('img');
//    img.src = IMGPATH + movie.Poster;
//
//    document.body.appendChild(img);
// });
//     return movie;
}
getMovies("The Matrix");

