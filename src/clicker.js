var counter = 0;

var multiple = 0;

var grannysBought = 0;

var granny = {
	cost: 10,
	multiple: 4
};

var farm = {
	cost: 30,
	multiple: 70
}

// Cookie
document.getElementById("myBtn").addEventListener("click", countClicks);


// Granny
document.getElementById("upgradeBtn-granny").addEventListener("click", function(){
	upgrade(granny);
});

document.getElementById("upgradeBtn-granny").addEventListener("click", countGrannys);

// Farm
document.getElementById("upgradeBtn-farm").addEventListener("click", function(){
	upgrade(farm);
});


document.getElementById("upgradeBtn-granny").disabled = true;

document.getElementById("upgradeBtn-farm").disabled = true;


function printCookies() {
	document.getElementById("showCounter").innerHTML = "Du har nu: " + counter;
}

function printGranny() {
	document.getElementById("showGranny").innerHTML = "Du har köpt: " + grannysBought + " Grannys!";
}

function countGrannys() {
	grannysBought++;
	printGranny();
}

function countClicks() {
	counter++;
	printCookies();
}

function upgrade(item) {
	counter = counter - item.cost;
	multiple = multiple + item.multiple;
}

function canAfford(item) {
	return item.cost <= counter;
}


setInterval(function() {
	counter += multiple;
	printCookies();
	printGranny();

	document.getElementById("upgradeBtn-granny").disabled = !canAfford(granny);

	document.getElementById("upgradeBtn-farm").disabled = !canAfford(farm);

	document.getElementById("showUpgrade").innerHTML = "Så här många kakor får man i sekunden: " + multiple;

}, 1000)
