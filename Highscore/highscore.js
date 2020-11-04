// need to create some variable to store data in local storage
//i will be naming the variables the same as the IDs to avoid confusion
//use activity 28 as a guide if lost

var scoreForm = document.getElementById("scoreForm");
var initialText = document.getElementById("initialText");
var hsList = document.getElementById("hsList");
var clear = document.getElementById("clear")
var goBack =  document.getElementById("goBack");
var remove = document.querySelector("#initialText");
var hsPage = document.getElementById("hsPage");
  
goBack.addEventListener("click", function () {
    window.location.replace('/js index and css/index.html');
});

hsPage.addEventListener("click", function(){
    window.location.replace('/Highscore/highscores.html');
  });
//need to create an empty array to store

var highscores = []

init();
// need to create a function to render the scores saved

function renderScores() {
    //grab the list to make a string
    hsList.innerHTML = "";
    //making a loop to prevent repeating code and same functionalilty on a page
    for (var i = 0; i < highscores.length; i++) {
        var score = highscores[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        hsList.append(li)

    }
};

function init() {
    // to get stored highscores from the array we create we need to parsing the JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("highscores"));
    // the JSON.parse() methos parses a JSON string, constructing the JS value or object by the string

    if (storedScores !== null) {
        highscores = storedScores;
    }
    renderScores();
};

function storeScores() {
    //with this function i will stringift and set the highscores key in local storage to highscores array
    localStorage.setItem("highscores", JSON.stringify(highscores));
};

//as of now before this code. we have no way of calling it so we need to add event listener to the button I made on the html to tie to all together


scoreForm.addEventListener("submit", function(event){
    console.log('score submit')
    event.preventDefault(); // this preventDefault method cancels the event if it is canceable

    var scoreText = initialText.value.trim(); // we are using trim method to do what it says. trim any excess spaces in the input so it doesnt recieve any undesirable answers.
    
    if(scoreText === "") {
      console.log('returning')
    return;
    }

    // Add new  to todos array, clear the input
  highscores.push(scoreText);
  scoreForm.value = "";

  storeScores();
  renderScores();
});


hsList.addEventListener("click", function(event) {
    var element = event.target;
  
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      highscores.splice(index, 1);
  
      // Store updated todos in localStorage, re-render the list
      storeScores();
      renderScores();
    }
  });
  
  

  clear.addEventListener("click", function() {
    // remove.value = '';
    localStorage.clear();
    // removeItem();
    // highscores = "";
    location.reload();
    // removeAll();
  

  })


 