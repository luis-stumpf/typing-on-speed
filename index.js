const words = [
	" die",
	" der",
	" und",
	" zu",
	" den",
	" das",
	" nicht",
	" von",
	" sie",
	" ist",
	" des",
	" sich",
	" mit",
	" dem",
	" dass",
	" er",
	" es",
	" ein",
	" ich",
	" auf",
	" so",
	" eine",
	" auch",
	" als",
	" an",
	" nach",
	" wie",
	" im",
	" für",
];

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleArray(words);

const wordsOrg = [...words];

// start timer
var seconds = 10;
var timer;
function myFunction() {
	if (seconds < 60) {
		// I want it to say 1:00, not 60
		document.getElementById("timer").innerHTML = seconds;
	}
	if (seconds > 0) {
		// so it doesn't go to -1
		seconds--;
	} else {
		wpm = userInput.length;
		getScore();
		console.log(userInput);
		clearInterval(timer);

		alert(
			"You type " +
				wpm +
				" WPM. \nscore: " +
				score +
				"\nfails: " +
				fail +
				"\nAccuracy: " +
				Math.floor((score / userInput.length) * 100) +
				"%"
		);
	}
}
document.getElementById("input").onkeypress = function () {
	if (!timer) {
		timer = window.setInterval(function () {
			myFunction();
		}, 1000); // every second
	}
};

// array compairison
var score = 0;
var fail = -1;
function getScore() {
	for (i = 0; i <= userInput.length; i++) {
		if (userInput[i] == wordsOrg[i]) {
			score++;
		} else {
			fail++;
		}
	}
}

document.getElementById("timer").innerHTML = "1:00";

// get user input
document.getElementById("test").value = words.join("");

var userInput = [];
document.getElementById("input").addEventListener("keydown", function (e) {
	if (e.which == 32) {
		userInput.push(document.getElementById("input").value);
		document.getElementById("input").value = "";
		words.shift();
		document.getElementById("test").value = words.join("");
		console.log(userInput);
	}
});
