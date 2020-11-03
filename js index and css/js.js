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

var score = 0;
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


function checkAnswer(question, answer) {


    // var creatDiv = document.getElementById("divAnswer");
    //     creatDiv.setAttribute("id", "creatDiv");
    console.log("question: ", question);
    console.log("answer: ", answer);
    let correctAnswer = questions[question].answer;
    let userAnswer = questions[question].choices[answer];
    if (userAnswer == correctAnswer) {
        index = index + 1;
        score = score + secondsLeft
        divAnswer.textContent = "Correct"
        console.log(score);
        console.log("Correct");
    }
        //Whether they get the right or wrong answer, the program continues to the next question and then deducts 15 seconds from the quiz
    else {
        index = index + 1
        secondsLeft = secondsLeft - 15;
    }
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
    console.log(timerEl)

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
            

            
            
            clearInterval(quizTime);
        // var createH1 = document.createElement("h1");
        // createH1.textContent = "All Done!"
        
        // createDiv.textcontent = "Quiz is done!" + "" + "You got " + score;
        }
        // questionOptionsDiv.innerHTML = "";
        // timerEl.innerHTML = "";
        // creatDiv.textContent = "End of Quiz!" + "" + "Your score is " + score;

        
        // createH1.setAttribute("id", "createH1");
        
        // questionOptionsDiv.appendChild(createH1);

        // var makeP = document.createElement("p");
        // makeP.setAttribute("id", "makeP");

        // questionsDiv.appendChild(createP);

    }
    
    
   

    //to ease dubugging. this variable is pulling the value from questions of question.js(my actual questions)
    // const container = document.getElementById("questionContainer"); //this is just a holder. a place we are going to stick each question we build. later going to iterate cycling the questions into this container
    // const questionEl = renderQuestion(question.title, question.choices, question.answer); //renamed variable for better clarifcation
    // container.appendChild(questionEl) //we appeneded
    // init("renderQuestions").innerHTML = "questions " + (index + 1) + " of" + questions.length;
//         questions = questions[index][0];
//   };

// };
//renderquestion is reponsible for creating for building html rep of a question
// function renderQuestion(title, choices, answer) {
//     const template = document.getElementById("test");
//     const question = template.cloneNode(true);
//     question.style.display = "block";
//     question.removeAttribute("id");
//     // labeling all variables const because they are not being reassigned. better practice to rename them const then variable. start sooner naming
//     const titleEl = question.getElementsByTagName("h1")[0];
//     titleEl.innerHTML = title;

//     const choicesEl = question.getElementsByTagName("ol")[0];
    
//     choices.forEach(function(choice) {          //the forEach is a loop
//         const li = document.createElement("li")
//         li.innerHTML = choice       // we created a new li element, we modified its text and now we will append
//         li.addEventListener("click", function(evt) {
//             // console.log("choice was clicked", choice)
//             if (choice === answer) {
//                 alert("correct");
//                 score++;
//                 index = index +1
//                 // const question = questions[1]
//                 // const questionEl = renderQuestion(question.title, question.choices, question.answer)
                
//             } else {
//                     alert('wrong');
//                 }
            
//         })
//         choicesEl.appendChild(li) 
//         // clearTest();
//         // renderQuestion();
//     })
//     console.log(question)
//     return question;

// };


    // test = init("test")
    // if (index >= questions.length) {
    //     test.innerHTML = "<h2> Your score is " + correct + "of" + questions.length + ".</h2>";
    //     init("renderQuestions").innerHTML = "All Done";
    //     var index = 0;
    //     var correct = 0;
    //     return false
    //     //any iinenr html needs equals
    // }
    
//Have to figure out how to rotate questions through.
// assign point values to right answers
// keep score
// make highscore html page work right with local storage
//need 4th variable in renderquestion as a call back function



//have to figure out where ti place this 
// init("renderQuestions").innerHTML = "questions " + (index + 1) + " of" + questions.length;
//         questions = questions[index][0];
    // we are clone the whole test id/question template so we dont have to copy and paste it over and over. Keeping it dry
    // remove the id to avoid collison later
    // remove style display none cloned element 
    // want to update h1 element text value with a title
    // add a child per question as an li inside the ol. will be using appendChild
    


    
    

    //we are plus one because we want to show a new index which is all teh qesutiosmn

    //we ned to create a atest id . wneed to di <div id= test"
    //we need to show the questions by id

    // we need to put diplays the questions
    // for (var i = 0; i < questions.length; i++) {
    //     var answers = prompt(questions[i].q)
    //     console.log(answers);
   
    //     if (answers === questions[i].a) {
    //         alert("Correct!");
    //     } else {
    //         alert("Wrong!");
    //     }
    // };