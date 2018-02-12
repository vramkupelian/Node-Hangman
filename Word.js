var Letter = require("./Letter.js");

function Word(stringValue){
	this.stringValue = stringValue;
	this.lettersArray = [];
    this.guessesMade = "";
    //word into array
	for(var i = 0; i < this.stringValue.length; i++) {
		this.lettersArray.push(new Letter.Letter(this.stringValue[i]));
	}
};

Word.prototype.Finished = function(){
	for(var i = 0; i < this.lettersArray.length; i++){
        if(!this.lettersArray[i].show){
          return false;  
        }
	}
	return true;
}

Word.prototype.checkLetter = function(letter){
	var lowercaseLetter = letter.toLowerCase();
	if (this.guessesMade.indexOf(lowercaseLetter) != -1) {
        console.log("Already guessed this letter.");
        return;
	} 
    this.guessesMade += lowercaseLetter; 
    //Records guess
	for(var i=0; i<this.lettersArray.length;i++){
		if(this.lettersArray[i].theLetter.toLowerCase() == lowercaseLetter){
		this.lettersArray[i].show = true;
		}
	}
};

Word.prototype.toString = function(){
  var printout = "";
  for(var i=0; i<this.lettersArray.length; i++){
    printout += this.lettersArray[i].printInfo();
  }
  return printout;
}

exports.Word = Word;