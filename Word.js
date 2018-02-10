var letterPg = require("./letter.js");

function Word(stringValue){
    this.lettersArray = [];
    this.stringValue = stringValue;
    
    for(var i=0; i<this.stringValue.length; i++){
        this.lettersArray.push(new letterPg.Letter(this.stringValue[i]));
        console.log(lettersArray);
    }

    function Finished(){
        for(var i=0; i< this.lettersArray.length;i++){
            if(!this.lettersArray[i].show){
                return false;
            }
            else{
                return true;
            }
        }
    }
    
    this.guesses = "";

    function letterMatcher(Letter){

        if(this.guesses.indexOf(Letter) != -1){
            return "Copy";
        }
        
        this.guesses +=Letter;
        for(var i=0; i<this.lettersArray.length; i++){
            if(this.lettersArray[i].stringValue === Letter){
                this.lettersArray[i].show = true;
            }
        }

    }; 

    function stringIt(){
        var printout = "";
        for(var i=0; i<lettersArray.length; i++){
            printout+= this.lettersArray[i].letterPrint();
        }
        return printout;
    }


};

module.exports = Word;