// Variabler

var counter = 0;

var multiple = 0;

var grannysBought = 0;

var farmsBought = 0;

var granny = {
	cost: 10,
	multiple: 4,
	markup: 10
};

var farm = {
	cost: 30,
	multiple: 70,
	markup: 20
};



// Cookie clicks
document.getElementById("myBtn").addEventListener("click", countClicks);


// Grannys
document.getElementById("upgradeBtn-granny").addEventListener("click", function(){
	upgrade(granny);
});

document.getElementById("upgradeBtn-granny").disabled = true;

document.getElementById("upgradeBtn-granny").addEventListener("click", countGrannys);


// Farms
document.getElementById("upgradeBtn-farm").addEventListener("click", function(){
	upgrade(farm);
});

document.getElementById("upgradeBtn-farm").disabled = true;

document.getElementById("upgradeBtn-farm").addEventListener("click", countFarms);



// Set innerHTML

function printCookies() {
	document.getElementById("showCounter").innerHTML = "Du har nu: " + counter;
}

function printGranny() {
	document.getElementById("showGranny").innerHTML = "Du har köpt: " + grannysBought + " Grannys!";
}

function printFarms() {
	document.getElementById("showFarms").innerHTML = "Du har köpt: " + farmsBought + " Farms!";
}



function countClicks() {
	counter++;
	printCookies();
}

function upgrade(item) {
	counter = counter - item.cost;
	multiple = multiple + item.multiple;

	item.cost = item.cost + item.markup;
}

function canAfford(item) {
	return item.cost <= counter;
}



// Count upgrades

function countGrannys() {
	grannysBought++;
	printGranny();
}

function countFarms() {
	farmsBought++;
	printFarms();
}

// Automatisk counter

setInterval(function() {
	counter += multiple;
	printCookies();
	printGranny();
	printFarms();

	document.getElementById("upgradeBtn-granny").disabled = !canAfford(granny);

	document.getElementById("upgradeBtn-farm").disabled = !canAfford(farm);

	document.getElementById("upgradeBtn-granny").innerHTML = "Granny Cost: " + granny.cost;

	document.getElementById("upgradeBtn-farm").innerHTML = "Farm Cost: " + farm.cost;

	document.getElementById("showUpgrade").innerHTML = "Så här många kakor får man i sekunden: " + multiple;

}, 1000)


