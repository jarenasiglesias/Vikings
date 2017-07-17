var Population = function (name, health, strength){
	this.health = health;
	this.strength =strength;
	this.name = name;
};

viking1 = new Population (1000, 150, "Ragnarok");
viking2 = new Population (1500, 250, "Asgard");
viking3 = new Population (2000, 100, "Fernandito");

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

function finalFight(){
	var roundNumber = getRandomInt(5,8);

}
