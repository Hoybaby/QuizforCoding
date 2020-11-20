// // need to create some variable to store data in local storage
// //i will be naming the variables the same as the IDs to avoid confusion
// //use activity 28 as a guide if lost

// var scoreForm = document.getElementById('scoreForm');
// var initialInput = document.getElementById('initialInput');
// var hsList = document.getElementById('hsList');
// var clear = document.getElementById('clear');
// var goBack = document.getElementById('goBack');
// var remove = document.querySelector('#initialInput');
// var hsPage = document.getElementById('hsPage');
// // var finalScore = document.getElementById("finalScore")

// //need to create an empty array to store

// var highscores = [];
// // finalScore.textContent = score;

// init();
// // need to create a function to render the scores saved


function renderScores() {
  var highScore = JSON.parse(localStorage.getItem("highscore")) || [];

  highScore.sort(function(a, b) {
  return b.score - a.score;
});

  highScore.forEach(function(score) {
    var li = document.createElement('li');
    li.textContent = score.score + " : " + score.initials;
    var El = document.getElementById("hsList")

   El.append(li);
  });
}

renderScores();



clear.addEventListener('click', function() {

  localStorage.clear();
  location.reload();
 
});

goBack.addEventListener('click', function () {
  window.location.replace('index.html');
});

