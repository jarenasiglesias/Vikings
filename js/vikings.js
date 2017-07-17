var Population = function (name, health, strength){
	this.name= name;
	this.health= health;
	this.strength=strength;
};

viking1= new Population ("Ragnarok", 1000, 150);
viking2= new Population ("Asgard", 1500, 250);
viking3= new Population ("Fernandito", 2000, 100);

var SaxonsPopulation = function (health, strength){
	this.health = health;
	this.strength = strength;
};

saxon1= new SaxonsPopulation (Math