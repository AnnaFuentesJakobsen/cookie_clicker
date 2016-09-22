// Variabler

var counter = 0;
var multiple = 0;

// Upgrade variables

var grannysBought = 0;
var farmsBought = 0;
var minesBought = 0;
var factorysBought = 0;
var banksBought = 0;

// Objects

var granny = {
	cost: 10,
	multiple: 2,
	markup: 20
};

var farm = {
	cost: 100,
	multiple: 5,
	markup: 40
};

var mine = {
	cost: 300,
	multiple: 15,
	markup: 60
};

var factory = {
	cost: 1000,
	multiple: 20,
	markup: 80
};

var bank = {
	cost: 3000,
	multiple: 40,
	markup: 100
};


// Render function

function render() {
	printCookies();
	printGranny();
	printFarms();
	printMines();
	printFactorys();
	printBanks();

	document.getElementById("upgradeBtn-granny").disabled = !canAfford(granny);
	document.getElementById("upgradeBtn-farm").disabled = !canAfford(farm);
	document.getElementById("upgradeBtn-mine").disabled = !canAfford(mine);
	document.getElementById("upgradeBtn-factory").disabled = !canAfford(factory);
	document.getElementById("upgradeBtn-bank").disabled = !canAfford(bank);

	document.getElementById("upgradeBtn-granny").innerHTML = "Granny Cost: " + granny.cost;
	document.getElementById("upgradeBtn-farm").innerHTML = "Farm Cost: " + farm.cost;
	document.getElementById("upgradeBtn-mine").innerHTML = "Mine Cost: " + mine.cost;
	document.getElementById("upgradeBtn-factory").innerHTML = "Factory Cost: " + factory.cost;
	document.getElementById("upgradeBtn-bank").innerHTML = "Bank Cost: " + bank.cost;

	document.getElementById("showUpgrade").innerHTML = "Så här många kakor får man i sekunden: " + multiple;

}



// Cookie clicks
document.getElementById("myBtn").addEventListener("click", countClicks);


/* UPGRADES */

// Grannys
document.getElementById("upgradeBtn-granny").addEventListener("click", function(){
	upgrade(granny);
});

document.getElementById("upgradeBtn-granny").addEventListener("click", countGrannys);
document.getElementById("upgradeBtn-granny").disabled = true;


// Farms
document.getElementById("upgradeBtn-farm").addEventListener("click", function(){
	upgrade(farm);
});

document.getElementById("upgradeBtn-farm").addEventListener("click", countFarms);
document.getElementById("upgradeBtn-farm").disabled = true;

// Mines 
document.getElementById("upgradeBtn-mine").addEventListener("click", function(){
	upgrade(mine);
});

document.getElementById("upgradeBtn-mine").addEventListener("click", countMines);
document.getElementById("upgradeBtn-mine").disabled = true;

// Factory
document.getElementById("upgradeBtn-factory").addEventListener("click", function(){
	upgrade(factory);
});

document.getElementById("upgradeBtn-factory").addEventListener("click", countFactorys);
document.getElementById("upgradeBtn-factory").disabled = true;

// Bank
document.getElementById("upgradeBtn-bank").addEventListener("click", function(){
	upgrade(bank);
});

document.getElementById("upgradeBtn-bank").addEventListener("click", countBanks);
document.getElementById("upgradeBtn-bank").disabled = true;




// PRINT, set innerHTML

function printCookies() {
	document.getElementById("showCounter").innerHTML = "Du har nu: " + counter;
}

function printGranny() {
	document.getElementById("showGranny").innerHTML = "Du har köpt: " + grannysBought + " Grannys!";
}

function printFarms() {
	document.getElementById("showFarms").innerHTML = "Du har köpt: " + farmsBought + " Farms!";
}

function printMines() {
	document.getElementById("showMines").innerHTML = "Du har köpt: " + minesBought + " Mines!";
}

function printFactorys() {
	document.getElementById("showFactorys").innerHTML = "Du har köpt: " + factorysBought + " Factorys!";
}

function printBanks() {
	document.getElementById("showBanks").innerHTML = "Du har köpt: " + banksBought + " Banks!";
}



function countClicks() {
	counter++;
	render();
}

function upgrade(item) {
	counter = counter - item.cost;
	multiple = multiple + item.multiple;

	item.cost = item.cost + item.markup;

	render();
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

function countMines() {
	minesBought++;
	printMines();
}

function countFactorys() {
	factorysBought++;
	printFactorys();
}

function countBanks() {
	banksBought++;
	printBanks();
}


// Automatisk counter

setInterval(function() {
	counter += multiple;
	render();

}, 1000)

render();

