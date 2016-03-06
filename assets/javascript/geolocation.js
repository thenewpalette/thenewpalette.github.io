// $(function(){
//    'use strict';


function calculateDistance(lat1, long1, lat2, long2){
  //SOURCED FROM http://www.movable-type.co.uk/scripts/latlong.html and treehouse
  var R = 3958.76; // miles

  //Setting
  var latRads1 = toRadians(lat1);
  var latRads2 = toRadians(lat2);
  var latDeltaRads = toRadians(lat2-lat1);
  var lonDeltaRads = toRadians(long2-long2);

  var a = Math.sin(latDeltaRads/2) * Math.sin(latDeltaRads/2) +
          Math.cos(latRads1) * Math.cos(latRads2) *
          Math.sin(lonDeltaRads/2) * Math.sin(lonDeltaRads/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return (R * c).toFixed(1);
}

function toRadians(value) {
  return value * Math.PI / 180;
}




navigator.geolocation.getCurrentPosition(gotLocation);

function gotLocation(currentPosition){
  var $restaurants = $(".panel-body");

  $restaurants.each(function(){
    var restaurantLat = $(this).data("lat");
    var restaurantLong = $(this).data("long");

    var distance = calculateDistance(currentPosition.coords.latitude,
    currentPosition.coords.longitude, restaurantLat, restaurantLong);

    $(this).text("Current Distance From Restaurant: " + distance  + " miles");
  });
}



//MOMOFUKU KO 40.724796, -73.991650
//MARI VANNA 40.738875, -73.988173
//IL BUCO 40.725834, -73.992682
//BOQUERIA 40.724729, -74.001369
//ABC KITCHEN 40.737758, -73.989526
//WATTS GROCERY 36.016498, -78.918353

//glyphicon glyphicon-map-marker

// )};
