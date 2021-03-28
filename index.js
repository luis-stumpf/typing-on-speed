// prettier-ignore
const words = [
	" die",	" der",	" und",	" zu",	" den",	" das",	" nicht",	" von",	" sie",	" ist",	" des",	" sich",	" mit",	" dem",	" dass",	" er",	" es",	" ein",	" ich",	" auf",	" so",	" eine", " auch", " als", " an", " nach", " wie",
	" im", " für", " ja", " wurde",	" jetzt", " immer",	" seinen", " wohl",	" dieses", " ihren", " würde", " diesen", " sondern", " weil", " welcher", " nichts", " diesem", " alles", " waren", " will", " Herr", " viel", " mein", " also",
	" soll", " worden",	" lassen", " dies", " machen", " ihrer", " weiter",	" Leben", " recht",	" etwas", " keine",	" seinem", " ob", " dir", " allen", " großen", " Jahre", " Weise", " müssen", " welches", " wäre", " erst", " einmal", 
	" Mann", " hätte", " zwei",	" dich", " allein",	" Herren", " während", "Paragraph",	" anders", " Liebe", " kein", " damit",	" gar",	" Hand", " Herrn", " euch",	" sollte", " konnte", " ersten", " deren", " zwischen",	" wollen", " denen",
	" dessen", " sagen", " bin", " Menschen", " gut", " darauf", " wurden",	" weiß", " gewesen", " Seite", " bald",	" weit", " große", " solche", " hatten", " eben", " andern", " beiden",	" macht", " sehen", " ganze", " anderen", " lange",	
	" wer",	" ihrem", " zwar", " gemacht", " dort",	" kommen", " Welt",	" heute", " Frau", " werde", " derselben", " ganzen", " deutschen",	" lässt", " vielleicht", " meiner",
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
var seconds = 60;
var timer;
function myFunction() {
	if (seconds < 60) {
		document.getElementById("timer").innerHTML = seconds;
	}
	if (seconds > 0) {
		seconds--;
	} else {
		wpm = userInput.length;
		getScore();
		console.log(userInput);
		clearInterval(timer);
		$("#input").prop("disabled", true);
		document.getElementById("WPM").innerHTML = "You type " + wpm + " per min";
		document.getElementById("score").innerHTML =
			"You type " + score + " right words";
		document.getElementById("fail").innerHTML =
			"You type " + fail + " wrong words";
		document.getElementById("accuracy").innerHTML =
			"You accuracy is " + Math.floor((score / wpm) * 100) + "%";
	}
}
document.getElementById("input").onkeypress = function () {
	if (!timer) {
		timer = window.setInterval(function () {
			myFunction();
		}, 1000);
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
