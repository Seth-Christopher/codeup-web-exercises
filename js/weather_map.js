
 mapboxgl.accessToken = MAPBOX_API_KEY;
const coordinates = document.querySelector('#coordinates');
 const map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v12',
     center: [-98.491125329, 29.42631],
     zoom: 11
 });

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
     updateWeatherForCards(coordinatesGeocoder(coordinateFeature(geocodes)));
     return geocodes;
 };

 // Add the search bar to the map.
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
 const marker = new mapboxgl.Marker({
     draggable: true
 })
     .setLngLat([-98.49112532, 29.4231])
     .addTo(map);

 updateWeatherForCards (29.4231,-98.49112532 );


 function onDragEnd() {
     const lngLat = marker.getLngLat();
     coordinates.style.display = 'block';
     coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
     console.log(lngLat);
     updateWeatherForCards(lngLat.lat, lngLat.lng)
 }
 marker.on('dragend', onDragEnd);



<!-- MARKER END -->

<!-- ASSIGNING VARIABLES -->
const weatherCardsDiv = document.querySelector("#weather-cards");
const updateWeather = marker.on('dragend', onDragEnd);

<!-- create cardsDiv function  -->
function updateWeatherForCards (lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}&lon=${lng}` + `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
        .then( data => data.json())
        .then( forecast => {
            console.log(forecast)
            weatherCardsDiv.innerHTML = '';

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
                                 <img src=" https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" class="card-img-top " alt="...">
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

}
