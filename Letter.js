function Letter(theLetter) {
	this.theLetter = theLetter;
	this.show = false;
	if (this.theLetter == ' ') 
		this.show = true;
}
//show if boolean true
Letter.prototype.printInfo = function() {
	if (this.show) {
		return this.theLetter;
	}
	return "_ ";
}

exports.Letter = Letter;