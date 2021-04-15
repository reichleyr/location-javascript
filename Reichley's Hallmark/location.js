var dislib = 0;
var disvil = 0;
var discv = 0;
var disfc = 0;

function distance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    console.log(dist);
    return dist;
  }
}

window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(calcDistance);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

function calcDistance(position) {
  var liberty = distance(position.coords.latitude, position.coords.longitude, 39.418541, -84.473703, "M");
  var village = distance(position.coords.latitude, position.coords.longitude, 39.336302, -84.563722, "M");
  var centerv = distance(position.coords.latitude, position.coords.longitude, 39.608779, -84.162695, "M");
  var ffc = distance(position.coords.latitude, position.coords.longitude, 39.766529, -84.054989, "M");
  document.getElementById("libertyd").innerHTML = liberty.toFixed(2) + " miles away";
  document.getElementById("villaged").innerHTML = village.toFixed(2) + " miles away";
  document.getElementById("centervd").innerHTML = centerv.toFixed(2) + " miles away";
  document.getElementById("ffcd").innerHTML = ffc.toFixed(2) + " miles away";
}
