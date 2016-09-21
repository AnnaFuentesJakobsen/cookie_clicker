var counter = 0;

var multiple = 0;

document.getElementById("myBtn").addEventListener("click", countClicks);

document.getElementById("upgradeBtn").addEventListener("click", upgrade);

function countClicks() {
	counter++;
	document.getElementById("showCounter").innerHTML = counter;
}

function upgrade() {
	multiple = 4;
}

setInterval(function() {
	counter += multiple;
	document.getElementById("showCounter").innerHTML = counter;
}, 1000)
