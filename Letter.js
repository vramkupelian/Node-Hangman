function Letter (underlyingCharacter){
    //stores character for letter
    this.underlyingCharacter = underlyingCharacter;

    this.hasBeenGuessed = false;  
    
    //Will show space if in word
    this.letterDisplay = function(){
        if (this.underlyingCharacter == ' ') {
            this.show = true;
        }
    }
  
    //prints either letter or "_ " depending on guess.
    this.letterPrint = function() {
        if (this.show) {
            return this.value;
        }else{
            return "_ ";
        }
    }
}   

module.exports = Letter;
