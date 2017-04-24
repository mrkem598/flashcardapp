// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require('fs');
// constructor function used to create flashcard objects
function Flashcard(front,back) {
  this.front = front;
  this.back = back;  
  // creates the printInfo method and applies it to all flashcard objects(prototyping:)
  this.printInfo = function() {
    console.log("1. Your answer for the first question was: " + this.front + "\n2. Your answer for the 2nd question was: " + this.back);
	  };
  // Validating the user input for first question
 this.validate = function(value) {
 	if (this.front === "Explorer1") {
  		console.log("1. Excellent Job! You have got the answer for first question!");
  	}else{
  		console.log("1. You Lost! The correct answer was ==> Explorer1");
  	}
  }
  this.validate();
  // Validating the user input for the second question
 this.validate = function(value) {
 	if (this.back === "Donald Trump") {
  		console.log("2. Excellent Job! You Got the answer for the second question!");
  	}else{
  		console.log("2. Sorry You Lost! The correctanswer was ==> Donald Trump");
  	}
  }
  this.validate(); 
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
  }

]).then(function(answers) {
  // initializes the variable 
  // in all of the user's answers to the questions above
  var newFlashcard = new Flashcard(answers.front, answers.back);
  // printInfo method is run to show that the flashcard object was successfully 
newFlashcard.printInfo();

  });

