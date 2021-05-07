var myMap = L.map("map", {
    center: [34.05, -118.24],
    zoom: 4
});

/* Use the Leaflet street map as the background for analysis */
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 12,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"

d3.json(URL, function(data) {
    
    // function??
    for (var i = 0; i < data.features.length; i++) {
        var lat = data.features[i].geometry.coordinates[1];
        var long = data.features[i].geometry.coordinates[0];
        var magnitude = data.features[i].properties.mag;
        var fillColor;
        if (magnitude > 5) {
            return fillColor = "red";
        } else if (magnitude > 4) {
            return fillColor = "orangered";
        } else if (magnitude > 3) {
            return fillColor = "orange";
        } else if (magnitude > 2) {
             return fillColor = "yellow";
        } else if (magnitude > 1) {
            return fillColor = "green";
        } else {
            return fillColor = "blue";
        };
    }
        var epicenter = L.circleMarker([lat, long], {
            radius: magnitude,
            color: "black",
            fillColor: fillColor,
            fillOpacity: 1,
            weight: 1
        });
        epicenter.addTo(myMap);

        epicenter.bindPopup("<h3> " + new Date(data.features[i].properties.time) + "</h3><h4>0 " + magnitude +
            "<br> " + data.features[i].properties.place + "</h4><br>");
    
    //Add legend
    legend.onAdd = function (color) {
        var div = L.DomUtil.create('div', 'info legend');
        var levels = ['>1', '1-2', '2-3', '3-4', '4-5', '5+'];
        var colors = ['blue', 'green', 'yellow', 'orange', 'orangered', 'red']
        for (var i = 0; i < levels.length; i++) {
            div.HTML += '<i style = "background:' + colors[i] + '"></i>' + levels[i] + '<br>';
        }
        return div;
    }
    var legend = L.control( {
        position: 'bottomright'
    });
    legend.addTo(myMap);
})