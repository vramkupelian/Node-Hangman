var request = require("request");
var inquirer = require("inquirer");
var npmPrompt = require("prompt");
var Word = require("./Word.js");
var Letter = require("./Letter.js");

var guessesLeft = 15;
var lettersGuessed = "";

//List of possible words: US presidents , no repeats i.e. Bush comes up once
var wordPool = ["jefferson","washington","obama","truman","eisenhower","lincoln","jackson","trump","bush","clinton","reagan",
"nixon","carter","ford","johnson","roosevelt","hoover","coolidge",
"harding","wilson","taft","mckinley","cleveland","harrison",
"arthur","garfield","hayes","grant","buchanan","pierce","fillmore",
"taylor","polk","tyler","vanburen","adams","monroe","madison",] 
//38 names


// This will randomly choose the word for each game
var theWord;
var splitWord;
var splitLength;

function chooseWord (){
    theWord = wordPool[Math.floor(Math.random() * wordPool.length)];      
}
chooseWord();

var newTheWord = new Word(theWord);
// console.log(newTheWord);
function timeToGuess(){
	// console.log(newTheWord.stringIt());
	if (newTheWord.guesses.length >= guessesLeft){
		console.log('Game over.');
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Guess a letter:',
		validate: function(str){ //validate to make sure input is as needed
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ // Control
				var letter = letterInput.letter; 
				newTheWord.letterMatcher(letter); //Check
					if(newTheWord.Finished()){ 
					console.log('Good job! The answer is: ' + newTheWord.Word.stringIt() + '!');
                    //Win
                    return; 
					}
                console.log('-------------------\n'); 
                // Next guess.
				console.log('You have ' + (guessesLeft - newTheWord.guesses.length) + ' guesses left.')
				timeToGuess(); //Recursive call
				}
  );
}
timeToGuess(); //Start Game