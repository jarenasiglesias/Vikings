var Population = function (name, health, strength){
	this.health = health;
	this.strength =strength;
	this.name = name;
};

function getRandomInt (min,max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

viking1= new Population ("Ragnarok", 1000, 150);
viking2= new Population ("Asgard", 1500, 250);
viking3= new Population ("Fernandito", 2000, 100);

vikingArray = [viking1, viking2, viking3];

function pitFight(){

	var roundNumber = getRandomInt(5,8);
	var vikingFighter1 = vikingArray [getRandomInt(0,2)];
  	var vikingFighter2 = vikingArray [getRandomInt(0,2)];
  	var vikingFighter1Life = vikingFighter1.health;
  	var vikingFighter2Life = vikingFighter2.health;
	for (var i=0; i<=roundNumber; i++){
	    vikingFighter1Life = vikingFighter1Life - vikingFighter2.strength;
	    vikingFighter2Life = vikingFighter2Life - vikingFighter1.strength;
    	if (vikingFighter1Life <= 251 || vikingFighter2Life <= 251) {
      		i=9;
    	}
	} 
	console.log (vikingFighter1.name +" tiene "+ vikingFighter1Life + " puntos de vida");
  	console.log (vikingFighter2.name +" tiene "+ vikingFighter2Life + " puntos de vida");
}



var SaxonPopulation = function (health, strength){
	this.health = health;
	this.strength = strength;
};

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



