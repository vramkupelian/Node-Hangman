function Letter (underlyingCharacter){
    //stores character for letter
    this.underlyingCharacter = underlyingCharacter;
    //boolean
    this.hasBeenGuessed = false;  
    
    //takes character as argument, check it against underlying character, 
    //updating boolean if guessed correctly
    this.letterChecker = function(letterToBeChecked){
        if(this.underlyingCharacter === letterToBeChecked ){
            this.hasBeenGuessed = true;  
            this.letterDisplay();          
        }
    }
      
    //returns character if guessed correctly or _ if not guessed
    this.letterDisplay = function(){
        if(hasBeenGuessed){
            return this.underlyingCharacter;
        }
        else{
            return "_ ";
        }
    }
}
module.exports = Letter;