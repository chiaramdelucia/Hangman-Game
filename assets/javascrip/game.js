//GLOBAL VARIABLE	
//=========================================================================================================================
//variables + arrays for holding data
var characterList = [
"rumpelstiltskin",
"snow white",
"the evil queen",
"king arthur",
"guinevere",
"sir lancelot",
"robin hood",
"ursula",
"ariel",
"prince eric",
]; 
var charWord = "";
var charLetters = [];
var charNumbers = 0;
var charBlanks = []; //e_ _ _ _ _
var wrongGuess = [];
var charSpace = " "

//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 15;


//Functions + Conditional Statements
//=========================================================================================================================
function startGame () {
	charWord = characterList[Math.floor(Math.random() * characterList.length)];
	charLetters = charWord.split("");
	charNumbers = charLetters.length;

	//Reset after each round
	guessesLeft = 15;
	wrongGuess = [];
	charBlanks = [];
	charSpace = " ";
	
	//Any key starts game
	

	//Populate blank spaces for each new word
	for (var i=0; i<charNumbers; i++){
		charBlanks.push(" _ ");		
	}

	//Reflect in HTML
	$("#charGuess").html(charBlanks);
	$("#guessesLeft").html(guessesLeft);
	$("#winCounter").html(winCount);
	$("#lossCounter").html(lossCount);

	//testing + debugging
	console.log(charWord);
	console.log(charLetters);
	console.log(charNumbers);
	console.log(charBlanks);

};

function letterCompare (letter) {

	//check if letter exists in word

	var isLetterInCharWord = false;

 	for (var i=0; i<charNumbers; i++) {
		if (charWord[i] == letter) {
			isLetterInCharWord = true;
		}
	}

	//check where in word letter in word exists and then populate in html
	if (isLetterInCharWord) {
		for (var i = 0; i<charNumbers; i++){
			if(charWord[i] == letter){
				charBlanks[i] = letter;
			}
		}
	}

	//letter wasn't found
	else {
		wrongGuess.push(letter);
		guessesLeft --;
	}

	//Testing
	console.log(charBlanks);


};

function roundComplete (){
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft)

	//push to HTML
	$("#guessesLeft").html(guessesLeft);
	$("#charGuess").html(charBlanks);
	$("#wrongGuesses").html(wrongGuess);	
	
	// Check if User Won
	if (charLetters.toString() == charBlanks.toString ()) {
		winCount ++;
	
		//Update win counter
		$("winCounter").html(winCount);


		startGame ();
	}

	//check if user lost
	else if(guessesLeft==0) {
		lossCount++;

		$("lossCounter").html(lossCount);

		startGame ();

	}
}


//MAIN PROCESSES
//=========================================================================================================================
startGame ();

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	letterCompare(letterGuessed);
	roundComplete();

		//testing + debugging
		console.log(letterGuessed);

}



	





