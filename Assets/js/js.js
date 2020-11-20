window.onload = function() {
    console.log("starting")
};
//Need to create arrays as shown in class to form questions with objects
// need objects in my arrays
//need to create a few buttons and event.listerner(click, function)
// if then example of how I want my questions given to use from an excericse on 10/28 in activity 33- QUestion game
// variables are going to be needed for a timer, leaderboard, each element (document.getElementbyId), body, .createElements  
//wrong answers take away from timer
//a function that will take away time from timer will begin on button click of start quiz
// when we click the start button, we need to hide the first div to to start the quiz then show the timer than show the questions

// possible varibles answer is right the event.listener will call up a function that will make text reveal to show that you are correct and same thing goes for wrong answer
// not only will it reveal answer it will then keep score and proceed to next question. must clear questions before this tho. done this in excercises today on 10/29 in activity on
// five questions will be the max done
// as well as revealing the answer, it will clear the question and prompt the next
// below i copied a



var secondsLeft = 90;

var userScore = 0;
var index = 0;
var leaderboard;
var quizTime;

var quiz = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var start = document.getElementById("start");
var startButton = document.getElementById("startButton");
var divAnswer = document.getElementById("divAnswer");
var allDone = document.getElementById("allDone");
var quizQuestions = document.getElementById("quiz-questions");
var congrats = document.getElementById("congrats")
var hsPage = document.getElementById("hsPage");
var scoreForm = document.getElementById('scoreForm');
var hsList = document.getElementById('hsList');

startButton.addEventListener("click", startQuiz) 
function startQuiz() {
    start.style.display = "none";
    
    //need to show the quiz. below will do it
    quiz.style.display = "block";
    //need to show timer
    setTime();
    renderQuestions();
    quizTime = setInterval(setTime, 1000);

    
}

function renderQuestions() {
    var questionsIndexLength = questions.length - 1;
    if (index <= questionsIndexLength) {
        document.getElementById("question").innerHTML = questions[index].title;
        renderQuestionChoices();
    }

    // if (index === questionsIndexLength) {
    quizOver();
    // }
}

function renderQuestionChoices() {
    let question = questions[index].choices;
    
    for (var options = 0; options < question.length; options++) {
        var questionOptionsDiv = document.getElementById("question-choices");
        var questionButtons = document.createElement("button");
        questionButtons.className ="btn btnOption btn-outline-primary btn-sm d-flex justify-content-around";
        questionButtons.innerHTML = question[options];
        //This fires the check answer function when the user clicks a question choices button
        questionButtons.setAttribute(
            "onclick",
            "checkAnswer(" + index + "," + options + ");"
        );
        questionOptionsDiv.append(questionButtons);
    }
    quizOver();
};
function clearQuestionDiv() {
    console.log("About to clear html");
    document.getElementById("question-choices").innerHTML = "";
    quizOver();
}

function clearAnswerDiv() {
    divAnswer.innerHTML = "";
}

function checkAnswer(question, answer) {


    // var creatDiv = document.getElementById("divAnswer");
    //     creatDiv.setAttribute("id", "creatDiv");
    console.log("question: ", question);
    console.log("answer: ", answer);
    let correctAnswer = questions[question].answer;
    let userAnswer = questions[question].choices[answer];
    if (userAnswer == correctAnswer) {
        index = index + 1;
        userScore = userScore + secondsLeft
        divAnswer.textContent = "Correct"
        
        console.log(userScore);
        console.log("Correct");
    }
        //Whether they get the right or wrong answer, the program continues to the next question and then deducts 15 seconds from the quiz
    else {
        index = index + 1
        secondsLeft = secondsLeft - 15;
        divAnswer.textContent = "Wrong!"
    }
    // clearAnswerDiv();
    clearQuestionDiv();
    renderQuestions();
    quizOver();
}

 function setTime() {
 // timerID = setInterval(clockTick, 1000);

    //timerEl.textContent = secondsLeft + " second left before quez terminates!"
    // var timerID = setInterval(function() {
        secondsLeft--; 
        timerEl.textContent = secondsLeft + " seconds left before quiz ends!";

        if(secondsLeft === -1) {
            clearInterval(quizTime);
            sendMessage();
        }
    // }, 1000); 
    // console.log(timerEl)

    quizOver();
};

function sendMessage() {
if (secondsLeft === 0) {
    alert("Time is up. Please Try again!")
    }
}

function quizOver() {
        if (index >= 5 || secondsLeft <= 0) {
            quizQuestions.style.display ="none";
            quiz.style.display="none";
            allDone.style.display ="block";
            // var score =localStorage.get(userScore)
            congrats.textContent = "Congratulations for finishing this quiz! Your score is " + userScore;

            
            
            clearInterval(quizTime);
        
        }

        
hsPage.addEventListener('click', function () {
  window.location.replace('highscores.html');
});

// goBack.addEventListener('click', function () {
//     window.location.replace('index.html');
//   });

}
// storage to store scores
 var initialInput = document.getElementById('initialInput');
 console.log(initialInput);

 
function renderScores() {
    var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
    //grab the list to make a string
    // hsList.innerHTML = '';
    //making a loop to prevent repeating code and same functionalilty on a page
    // for (var i = 0; i < highScore.length; i++) {
      // var scores = highScore[i];
      highScore.forEach(function(score) {
        var li = document.createElement('li');
        li.textContent = score.score + score.initials;
        // li.setAttribute('data-index', i);
    
        hsList.append(li);
      });
    //   var li = document.createElement('li');
    //   li.textContent = score + initials;
    //   li.setAttribute('data-index', i);
  
    //   hsList.append(li);
    // }
  }
  
  renderScores();
  

function saveScore () {

    // var highScore = []
       
    var getInitials = initialInput.value.trim();

    var highScore = JSON.parse(localStorage.getItem("highscore")) || [];

    var localStorageArray = {
        score: userScore, 
        initials: getInitials
    }


    highScore.push(localStorageArray)

    window.localStorage.setItem("highscore", JSON.stringify(highScore))

    // var highScores = getInitials + ": " + userScore;

    // hsList.append(highScore);
}

function enter(event) {
    if (event.key === "Enter") {
        saveScore();
    }
}

scoreForm.onclick = saveScore;
   