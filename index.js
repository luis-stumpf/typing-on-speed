const words = [
	' die',
	' der',
	' und',
	' zu',
	' den',
	' das',
	' nicht',
	' von',
	' sie',
	' ist',
	' des',
	' sich',
	' mit',
	' dem',
	' dass',
	' er',
	' es',
	' ein',
	' ich',
	' auf',
	' so',
	' eine',
	' auch',
	' als',
	' an',
	' nach',
	' wie',
	' im',
	' für',
];

// start timer
var seconds = 10;
var timer;
function myFunction() {
	if (seconds < 60) {
		// I want it to say 1:00, not 60
		document.getElementById('timer').innerHTML = seconds;
	}
	if (seconds > 0) {
		// so it doesn't go to -1
		seconds--;
	} else {
		wpm = userInput.length;
		clearInterval(timer);
		alert('You type ' + wpm + ' WPM');
	}
}
document.getElementById('input').onkeypress = function () {
	if (!timer) {
		timer = window.setInterval(function () {
			myFunction();
		}, 1000); // every second
	}
};

document.getElementById('timer').innerHTML = '1:00';

// get user input
document.getElementById('test').value = words.join('');

var userInput = [];
document.getElementById('input').addEventListener('keydown', function (e) {
	if (e.which == 32) {
		userInput.push(document.getElementById('input').value);
		document.getElementById('input').value = '';
		words.shift();
		document.getElementById('test').value = words.join('');
		console.log(userInput);
	}
});
