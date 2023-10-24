// TO MAKE THE MAP APPEAR YOU MUST
 // ADD YOUR ACCESS TOKEN FROM
 // https://account.mapbox.com
 mapboxgl.accessToken = MAPBOX_API_KEY;
 const map = new mapboxgl.Map({
     container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
     style: 'mapbox://styles/mapbox/streets-v12',
     center: [-98.491125329, 29.42631],
     zoom: 11
 });

 /* Given a query in the form "lng, lat" or "lat, lng"
 * returns the matching geographic coordinate(s)
 * as search results in carmen geojson format,
 * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md */
 const coordinatesGeocoder = function (query) {
// Match anything which looks like
// decimal degrees coordinate pair.
     const matches = query.match(
         /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
     );
     if (!matches) {
         return null;
     }

     function coordinateFeature(lng, lat) {
         return {
             center: [lng, lat],
             geometry: {
                 type: 'Point',
                 coordinates: [lng, lat]
             },
             place_name: 'Lat: ' + lat + ' Lng: ' + lng,
             place_type: ['coordinate'],
             properties: {},
             type: 'Feature'
         };
     }

     const coord1 = Number(matches[1]);
     const coord2 = Number(matches[2]);
     const geocodes = [];

     if (coord1 < -90 || coord1 > 90) {
// must be lng, lat
         geocodes.push(coordinateFeature(coord1, coord2));
     }

     if (coord2 < -90 || coord2 > 90) {
// must be lat, lng
         geocodes.push(coordinateFeature(coord2, coord1));
     }

     if (geocodes.length === 0) {
// else could be either lng, lat or lat, lng
         geocodes.push(coordinateFeature(coord1, coord2));
         geocodes.push(coordinateFeature(coord2, coord1));
     }

     return geocodes;
 };

 // Add the control to the map.
 map.addControl(
     new MapboxGeocoder({
         accessToken: mapboxgl.accessToken,
         localGeocoder: coordinatesGeocoder,
         zoom: 4,
         placeholder: 'Give me that Addy?',
         mapboxgl: mapboxgl,
         reverseGeocode: true
     })
 );



 <!--MARKER START  -->

// Create a new marker.
// const marker = new mapboxgl.Marker()
//     .setLngLat([-98.491125329, 29.42631])
//     .addTo(map);

// Set marker options.
const marker = new mapboxgl.Marker({
    color: "rgba(14,14,14,0.44)",
    draggable: true
}).setLngLat([-98.49112532, 29.4231])
    .addTo(map);

<!-- MARKER END -->

<!-- ASSIGNING VARIABLES -->

const weatherDate = document.querySelector(".card .card-title");
const weatherTemp = document.querySelector(".card .card-top");
const weatherDesc = document.querySelector(".card-text");
const weatherCardsDiv = document.querySelector("#weather-cards");
const weatherOutput = document.querySelector("#forecast");


 const getDayNameByDate = (dt) => {
     const newDate =new Date(dt * 1000).toString().substring(4, 15);
     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

     const dayIndex = new Date( newDate ).getDay();
     return days[dayIndex]


 }





fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
    .then( data => data.json())
    .then( forecast => {
        console.log(forecast)
        forecast.list.forEach((weather, index) => {
            const date = dateFromTimeStamp(weather.dt);
            const day = getDayNameByDate(weather.dt)
            const temp = parseInt(weather.main.temp);
            const tempLow = parseInt(weather.main.temp_min);
            const tempHigh = parseInt(weather.main.temp_max);
            const feelsLike = parseInt(weather.main.feels_like);
            const weatherDesc = (weather.weather[0].description);           // attempted to locate the weather description
            console.log(weatherDesc);

            if (index % 8 === 0){
            const cardDiv = document.createElement("div");
            cardDiv.classList.add('card');
            cardDiv.innerHTML = `
                                 <i class="bi bi-cloud-rain increase-icon"></i>
                                 <div class="card-body">
                                     <h5 class="card-title">${day}, ${date}</h5>
                                     <p class="card-text">Low ${tempLow}°F / High ${tempHigh}°F</p>
                                     <p class="card-text"><small class="text-body-secondary">Feels Like: ${feelsLike}°F</small></p>
                                     <p class="card-text">${weatherDesc}</p>
                                 </div>
                                        `;
            weatherCardsDiv.appendChild(cardDiv);
              }   
             })
            });