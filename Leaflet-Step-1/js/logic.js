/*Setting the map to center around the middle of the United States and attaching a zoom level of 4 so that the continental United States is showing */
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4
});

/* Using Leaflet's street map to as the background for our analysis */
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 12,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"


