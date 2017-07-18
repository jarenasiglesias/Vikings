
//viking pitFight


var Population = function (health, strength, name, shout){
	this.health = health;
	this.strength = strength;
	this.name = name;
	this.shout = shout;
};

function getRandomInt (min,max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var vikingName = ['Ragnar','Fernandito','Aren','Einar','Esben','Bjorn','Egil','Gerd','Gekger','Hans','Hagal','Odín'];

var vikingShout = ['Por el poder de Greyskull','Por el poder del cabello nasal','AHHHHHHHHHHHHHHH!!','EHHHHHH!!!','UH AH!!!','NO QUIERO LUCHAR, COMPADRE!','TE VOY CRUGIIIIIIIIIIIIR!!!','QUE TE RAJO KILLO!!!','TE VOY A METER UN BOCAO QUE TE VAS A CAGAR!','OLAKASE!','MUEREEEE','AJARLDEPAUER'];

function vikingGenerator (numViking){
  	var vikingArray = [];
  	var viking={};
  	for (i=0; i<=numViking; i++) {
    	viking[i] = new Population (getRandomInt(150,300),getRandomInt(50,100), vikingName[i], vikingShout[getRandomInt(0,10)]);
    	vikingArray.push(viking[i]);
  	}
  	return vikingArray;
}

var numVikings = vikingGenerator(10); //inicializa la función que nos genera vikingos luchadores

function pitFight(){

  	var roundNumber = getRandomInt(5,8);
  	var vikingFighter1 = numVikings [getRandomInt(0,numVikings.length-1)];
  	var vikingFighter2 = numVikings [getRandomInt(0,numVikings.length-1)];
  	while (vikingFighter1.name === vikingFighter2.name){
  	  vikingFighter2 = numVikings [getRandomInt(0,numVikings.length-1)]; //Evita que luche el mismo Vikingo
  	}
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


//saxons generator

var SaxonPopulation = function (health, strength){
	this.health = health;
	this.strength = strength;
};

function saxonGenerator (numSaxon){
  	var saxonArray = [];
  	var saxon={};
  	for (i=0; i<=numSaxon; i++) {
    	saxon[i] = new SaxonPopulation (getRandomInt(150,300),getRandomInt(50,100));
    	saxonArray.push(saxon[i]);
  	}
  	return saxonArray;
}

var numSaxons = saxonGenerator(20);

//the assault




function assaultFight(){

  	var roundNumber = getRandomInt(5,8);
  	for (var i=0; i<=roundNumber; i++){
  	  var saxonI = getRandomInt(0,numSaxons.length-1); 
  		numSaxons[saxonI] = numSaxons[saxonI].health - numVikings[i].strength;
  		console.log(numSaxons[saxonI]);
  	} 
}