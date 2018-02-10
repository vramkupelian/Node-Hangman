var Letter = require("./Letter.js");

function Word(stringValue){
    this.lettersArray = [];
    this.stringValue = stringValue;
    
    for(var i=0; i<this.stringValue.length; i++){
        this.lettersArray.push(new Letter(this.stringValue[i]));
    }

    // function Finished(){
    //     for(var i=0; i< this.lettersArray.length;i++){
    //         if(!this.lettersArray[i].show){
    //             return false;
    //         }
    //         else{
    //             return true;
    //         }
    //     }
    // }
    
    this.guesses = "";

    // function letterMatcher(lttr){

    //     if(this.guesses.indexOf(lttr) != -1){
    //         return "Copy";
    //     }
        
    //     this.guesses +=lttr;
    //     for(var i=0; i<this.lettersArray.length; i++){
    //         if(this.lettersArray[i].stringValue === lttr){
    //             this.lettersArray[i].show = true;
    //         }
    //     }

    // }; 

    // function stringIt(){
    //     var printout = "";
    //     for(var i=0; i<lettersArray.length; i++){
    //         printout+= this.lettersArray[i].letterPrint();
    //     }
    //     return printout;
    // }


};

Word.prototype.letterMatcher = function (lttr){

    if(this.guesses.indexOf(lttr) != -1){
        console.log("Copy");
        // return "Copy";
    }
    
    this.guesses +=lttr;
    for(var i=0; i<this.lettersArray.length; i++){
        if(this.lettersArray[i].stringValue === lttr){
            this.lettersArray[i].show = true;
        }
    }

}; 

Word.prototype.Finished = function (){
    for(var i=0; i< this.lettersArray.length;i++){
        if(!this.lettersArray[i].show){
            return false;
        }
        else{
            return true;
        }
    }
}
Word.prototype.stringIt = function (){
    var printout = "";
    for(var i=0; i<lettersArray.length; i++){
        printout+= this.lettersArray[i].letterPrint();
    }
    return printout;
    console.log(printout);
}


module.exports = Word;