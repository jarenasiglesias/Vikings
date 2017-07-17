var Population = function (name, health, strength){
	this.name = name;
	this.health = health;
	this.strength =strength;
};

viking1 = new Population ("Ragnarok", 1000, 150);
viking2 = new Population ("Asgard", 1500, 250);
viking3 = new Population ("Fernandito", 2000, 100);

var SaxonPopulation = function (health, strength){
	this.health = health;
	this.strength = strength;
};

function getRandomInt (min,max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

saxon1 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
saxon2 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
saxon3 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
saxon4 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
saxon5 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
saxon6 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
saxon7 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
saxon8 = new SaxonPopulation (getRandomInt(150,500),getRandomInt(50,150));
