var request = require("request");
var inquirer = require("inquirer");
var npmPrompt = require("prompt");
var Word = require("./Word.js");
var Letter = require("./Letter.js");

var wordPool = ["jefferson","washington","obama","truman","eisenhower","lincoln","jackson","trump","bush","clinton","reagan",
"nixon","carter","ford","johnson","roosevelt","hoover","coolidge",
"harding","wilson","taft","mckinley","cleveland","harrison",
"arthur","garfield","hayes","grant","buchanan","pierce","fillmore",
"taylor","polk","tyler","van buren","adams","monroe","madison",] 

var theWord;

function chooseWord (){
    theWord = wordPool[Math.floor(Math.random() * wordPool.length)];      
}
chooseWord();

var theNewWord = new Word.Word(theWord);
var guessesLeft = 15;

function guess(){
	console.log(theNewWord.toString());
	if (theNewWord.guessesMade.length >= guessesLeft){
		console.log('Game Over. You ran out of guesses. The word was "'+ theWord +'". Try Again.');
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Guess a letter:',
		validate: function(string){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(string);
		}
		}]).then(function(letterInput){ 
			var letter = letterInput.letter; 
			theNewWord.checkLetter(letter); 
				if(theNewWord.Finished()){ 
					console.log('Well done! It was "' + theNewWord.toString() + '" all along!');
					return; 
				}
			console.log('================\n'); //Next guess.
			console.log('Choose wisely. You have ' + (guessesLeft - theNewWord.guessesMade.length) + ' guesses left.')
			guess(); //Recursive call
		    }
        );
}
guess(); //Start Game