// Variabler

var counter = 0; // How many maki rolls player has in stock
var multiple = 0; // How many maki rolls player gets per second

// Upgrade variables

var nekosBought = 0;
var geishasBought = 0;
var sumosBought = 0;
var ninjasBought = 0;
var samuraisBought = 0;

// Objects

var neko = {
	cost: 10,
	multiple: 2,
	markup: 20
};

var geisha = {
	cost: 100,
	multiple: 5,
	markup: 40
};

var sumo = {
	cost: 300,
	multiple: 15,
	markup: 60
};

var ninja = {
	cost: 1000,
	multiple: 20,
	markup: 150
};

var samurai = {
	cost: 3000,
	multiple: 40,
	markup: 400
};


// Render function

function render() {
	printCookies();
	printNeko();
	printGeishas();
	printSumos();
	printNinjas();
	printSamurais();

	document.getElementById("upgradeBtn-neko").disabled = !canAfford(neko);
	document.getElementById("upgradeBtn-geisha").disabled = !canAfford(geisha);
	document.getElementById("upgradeBtn-sumo").disabled = !canAfford(sumo);
	document.getElementById("upgradeBtn-ninja").disabled = !canAfford(ninja);
	document.getElementById("upgradeBtn-samurai").disabled = !canAfford(samurai);

	document.getElementById("upgradeBtn-neko").innerHTML = "Neko Cost: " + neko.cost;
	document.getElementById("upgradeBtn-geisha").innerHTML = "Geisha Cost: " + geisha.cost;
	document.getElementById("upgradeBtn-sumo").innerHTML = "Sumo Cost: " + sumo.cost;
	document.getElementById("upgradeBtn-ninja").innerHTML = "Ninja Cost: " + ninja.cost;
	document.getElementById("upgradeBtn-samurai").innerHTML = "Samurai Cost: " + samurai.cost;

	document.getElementById("showUpgrade").innerHTML = "Sushi/sec: " + multiple;

}



// Maki clicks
document.getElementById("maki").addEventListener("click", countClicks);


/* UPGRADES */

// Nekos
document.getElementById("upgradeBtn-neko").addEventListener("click", function(){
	upgrade(neko);
});

document.getElementById("upgradeBtn-neko").addEventListener("click", countNekos);
document.getElementById("upgradeBtn-neko").disabled = true;


// Geishas
document.getElementById("upgradeBtn-geisha").addEventListener("click", function(){
	upgrade(geisha);
});

document.getElementById("upgradeBtn-geisha").addEventListener("click", countGeishas);
document.getElementById("upgradeBtn-geisha").disabled = true;

// Sumos 
document.getElementById("upgradeBtn-sumo").addEventListener("click", function(){
	upgrade(sumo);
});

document.getElementById("upgradeBtn-sumo").addEventListener("click", countSumos);
document.getElementById("upgradeBtn-sumo").disabled = true;

// Ninja
document.getElementById("upgradeBtn-ninja").addEventListener("click", function(){
	upgrade(ninja);
});

document.getElementById("upgradeBtn-ninja").addEventListener("click", countNinjas);
document.getElementById("upgradeBtn-ninja").disabled = true;

// Samurai
document.getElementById("upgradeBtn-samurai").addEventListener("click", function(){
	upgrade(samurai);
});

document.getElementById("upgradeBtn-samurai").addEventListener("click", countSamurais);
document.getElementById("upgradeBtn-samurai").disabled = true;




// PRINT, set innerHTML

function printCookies() {
	document.getElementById("showCounter").innerHTML = "Sushi: " + counter;
}

function printNeko() {
	document.getElementById("showNekos").innerHTML = "Neko: " + nekosBought;
}

function printGeishas() {
	document.getElementById("showGeishas").innerHTML = "Geisha: " + geishasBought;
}

function printSumos() {
	document.getElementById("showSumos").innerHTML = "Sumo: " + sumosBought;
}

function printNinjas() {
	document.getElementById("showNinjas").innerHTML = "Ninja: " + ninjasBought;
}

function printSamurais() {
	document.getElementById("showSamurais").innerHTML = "Samurai: " + samuraisBought;
}



function countClicks() {
	maki.classList.add('maki-animation');
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

function countNekos() {
	nekosBought++;
	printNeko();
}

function countGeishas() {
	geishasBought++;
	printGeishas();
}

function countSumos() {
	sumosBought++;
	printSumos();
}

function countNinjas() {
	ninjasBought++;
	printNinjas();
}

function countSamurais() {
	samuraisBought++;
	printSamurais();
}

// Initiate game-loop 
setInterval(function() {
	counter += multiple;
	render();

}, 1000)

// Render once at starup
render();

