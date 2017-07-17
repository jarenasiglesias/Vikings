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

saxon1 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );
saxon2 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );
saxon3 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );
saxon4 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );
saxon5 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );
saxon6 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );
saxon7 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );
saxon8 = new SaxonPopulation (Math.floor(Math.random() * 350) + 150,Math.floor(Math.random() * 100) + 50 );