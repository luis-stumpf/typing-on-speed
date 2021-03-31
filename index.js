const getData = () => {
  fetch("words.json")
    .then((res) => res.json())
    .then((data) => {
      var wordsArray = data.words;
      shuffleArray(wordsArray);
      var wordsOrg = [...wordsArray];
      $("#given").val(wordsArray.join(""));
      getInput(wordsArray);
      startTimer(wordsOrg);
    });
};

getData();

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

var seconds = 5;
var timer;
function timetick(givenWords) {
  if (seconds < 60) {
    $("#timer").html(seconds);
  }
  if (seconds > 0) {
    seconds--;
  } else {
    wpm = userInput.length;
    getScore(givenWords);
    clearInterval(timer);
    $("#input").prop("disabled", true);
    $("#WPM").html("You type " + wpm + " per min");
    $("#score").html("You type " + score + " right words");
    $("#fail").html("You type " + fail + " wrong words");
    $("#accuracy").html(
      "You accuracy is " + Math.floor((score / wpm) * 100) + "%"
    );
  }
}
$("#timer").html("1:00");

function startTimer(givenWords) {
  $("#input").keypress(function () {
    if (!timer) {
      timer = window.setInterval(function () {
        timetick(givenWords);
      }, 1000);
    }
  });
}

// array compairison
var score = 0;
var fail = -1;
function getScore(givenWords) {
  for (i = 0; i <= userInput.length; i++) {
    if (userInput[i] == givenWords[i]) {
      score++;
    } else {
      fail++;
    }
  }
}

var userInput = [];
function getInput(array) {
  $("#input").on("keydown", function (e) {
    if (e.which == 32) {
      userInput.push($("#input").val());
      $("#input").val("");
      array.shift();
      $("#given").val(array.join(""));
    }
  });
}
