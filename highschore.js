// need to create some variable to store data in local storage
//i will be naming the variables the same as the IDs to avoid confusion
//use activity 28 as a guide if lost

var scoreForm = document.getElementById("scoreForm");
var initialText = document.getElementById("initialText");
var hsList = document.getElementById("hsList");
var clear = document.getElementById("clear")

//need to create an empty array to store

var highscores = []

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
}

function init() {
    // to get stored highscores from the array we create we need to parsing the JSON string to an object
    var storedScores = JSON.parse(localStorage.getItem("highscores"));
    // the JSON.parse() methos parses a JSON string, constructing the JS value or object by the string

    if (storedTodos !== null) {
        highscores = storedScores;
    }
    renderScores();
};

function storeScores
