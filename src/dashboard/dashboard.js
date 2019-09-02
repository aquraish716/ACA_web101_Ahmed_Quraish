
/*var myLocation = document.getElementById("my-coordinates");

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayPosition);
    } else {
        myLocation.innerHTML = "Not available.";
    }
}

function displayPosition(position) {
    myLocation.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}*/


var loc = document.getElementById('my-coordinates');

function myLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        loc.innerHTML = "Location Tracking not Possible.";
    }
}
function showPosition(position){
    loc.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude + "<br>";
}
