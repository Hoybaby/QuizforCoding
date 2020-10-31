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

    var score;

    var leaderboard;

    var quiz = document.getElementById("quiz");
    var timerEl = document.getElementById("timer");
    var start = document.getElementById("start");
    var startButton = document.getElementById("startButton");
   


    startButton.addEventListener("click", startQuiz) 

    
    function startQuiz() {
        start.style.display = "none";
        renderQuestion();
        //need to show the quiz. below will do it
        quiz.style.display = "block";
        //need to show timer
        setTime();
    }

    function init(x) {
        return document.getElementById(x);
    }


    function renderQuestion(title, choices, answer) {

        console.log("test")
        const template = document.getElementById("test");
        let question = template.cloneNode(true);
        question.style.display = "block";
        question.removeAttribute("id");
        
        console.log(question)
        //we are clone the whole test id/question template so we dont have to copy and paste it over and over. Keeping it dry
        //remove the id to avoid collison later
        //remove style display none cloned element 
        // want to update h1 element text value with a title
        //add a child per question as an li inside the ol. will be using appendChild
        


        // test = init("test")
        // if (index >= questions.length) {
        //     test.innerHTML = "<h2> Your score is " + correct + "of" + questions.length + ".</h2>";
        //     init("renderQuestions").innerHTML = "All Done";
        //     var index = 0;
        //     var correct = 0;
        //     return false
        //     //any iinenr html needs equals
        // }
        // init("renderQuestions").innerHTML = "questions " + (index + 1) + " of" + questions.length;
        // questions = questions[index][0];
        
        

        //we are plus one because we want to show a new index which is all teh qesutiosmn

        //we ned to create a atest id . wneed to di <div id= test"
        //we need to show the questions by id

        // we need to put diplays the questions
        // for (var i = 0; i < questions.length; i++) {
        //     var answers = prompt(questions[i].q)
        //     console.log(answers);
       
    //         if (answers === questions[i].a) {
    //             alert("Correct!");
    //         } else {
    //             alert("Wrong!");
    //         }
    //     };
    }
      function setTime() {
     // timerID = setInterval(clockTick, 1000);

        //timerEl.textContent = secondsLeft + " second left before quez terminates!"
        var timerID = setInterval(function() {
            secondsLeft--; 
            timerEl.textContent = secondsLeft + " seconds left before quiz ends!";

            if(secondsLeft === 0) {
                clearInterval(timerID);
                sendMessage();
            }
        }, 1000); 
        console.log(timerEl);
    };

    

    
    
    // var questions = [

    //     {   q: "Who won the Superbowl in 2019?",

    //         qc: ["San Francisco 49ers", "New England Patriots", "Kansas City Chiefs", "Green Bay Packers"],

    //         a: "Kansas City Chiefs"
    //     },   

    //     {
    //         q: "Which of these plays is the is the longest play produced by Shakespeare?",

    //         qc: ["Hamlet", "Romeo and Juliet", "Juluis Cesar", "Macbeth"],

    //         a: "Hamlet"
    //     },

    //     {
    //         q: "What is the name of the first female astronaut?",

    //         qc: ["Sandra Bullock", "Sally K. Ride", "Anne Hathaway", "Katherine Johnson" ],

    //         a: "Sally K. Ride"
            
    //     },

    //     {
    //         q: "What nation won the 2018 FIFA World Cup?",

    //         qc: ["Brazil", "Germany", "France", "Belgium"],

    //         a: "France"
    //     },

    //     {
    //         q: "Which mammal doesn't have vocal cords?",

    //         qc: ["Sloth", "Giant Anteater", "Giraffe", "Pangolin"],

    //         a: "Giraffe"
    //     }

    // ]


    // for (var i = 0; i < questions.length; i++) {
    //     var answers = prompt(questions[i].q)
    //     console.log(answers);
   
    //     if (answers === questions[i].a) {
    //         alert("Correct!");
    //     } else {
    //         alert("Wrong!");
    //     }
    // };


// // var questions = [
//     {    q: "Is there 14 inches in a foot?", 
//          a: "No"
    
//      },

//     {    q: "Is water net?",
//          a: "Yes"
//      },

//      {   q: "Are there 7 continents?",
//          a: "Yes"
//      },

//      {   q: "Is the year 2020",
//          a: "Yes"
//      },

//      {   q: "Is there 16 ounces in a pound",
//          a: "Yes"

//      }
//  ]

//  for (var i = 0; i < questions.length; i++) {
//      var answers = prompt(questions[i].q)
//      console.log(answers);

//      if (answers === questions[i].a) {
//          alert("Correct!");
//      } else {
//          alert("Wrong!");
//      }
//  }