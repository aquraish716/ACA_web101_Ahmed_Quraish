
 //created var for functions
var baskets = 0,
    basketsGain = 1,
    autoGain = 1,
    text,
    clickCounter = 0;

//created var for element
var element = {
    clicks: document.getElementById("clicks"),
    clicker: document.getElementById("clicker"),
    baskets: document.getElementById("baskets"),
}

//funtion to update the amount of baskets
updateBaskets();
    element.clicker.onclick = function() { addBaskets(); updateBaskets(); };

//funtion to updae the click by one when clicked
function updateClickCounter() {
clickCounter++;
element.clicks.innerHTML = "Clicks: " + clickCounter;
}

//function to add the click to the overall baskets by adding the gained baskets to baskets
function addBaskets() {
baskets = baskets + basketsGain;
    }

//function to update the baskets total after running the previous functions
function updateBaskets() {
    text = "Baskets: " + baskets;
    element.baskets.innerHTML = text;
    }

