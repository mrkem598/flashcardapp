// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require('fs');

// constructor function used to create flashcard objects
function Flashcard(front,back) {
  this.front = front;
  this.back = back;
  
  // creates the printInfo method and applies it to all flashcard objects(prototyping:)
  this.printInfo = function() {
    console.log("One: " + this.front + "\nTwo: " + this.back);
    fs.appendFile("log.txt");
	 	//newFlash.printInfo();
  };
}

// runs inquirer and asks the user a  questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([
  {
    name: "front",
    message: "The first american satelite is?"
    //answer: "Explorer 1"
  }, {
    name: "back",
    message: "Who is your current president of the United States Of America?"
    //answer: "Donald Trump"
  
  /*validate: function(value) {
  	if (this.One === Explorer1) {
  		console.log("Excellent Job! You Got the answer!")
  	}else{
  		console.log("You Lost!")
  	}
  }*/
  }


]).then(function(answers) {
  // initializes the variable 
  // in all of the user's answers to the questions above
  var newFlash = new Flashcard(answers.front, answers.back);
  // printInfo method is run to show that the flashcard object was successfully 
  newFlash.printInfo();
});
module.exports = Flashcard;
