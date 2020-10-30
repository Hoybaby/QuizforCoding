//Need to create arrays as shown in class to form questions with objects
// need objects in my arrays
//need to create a few buttons and event.listerner(click, function)
// if the answer is right the event.listener will call up a function that will make text reveal to show that you are correct and same thing goes for wrong answer
// not only will it reveal answer it will then keep score and proceed to next question. must clear questions before this tho. done this in excercises today on 10/29 in activity on
// five questions will be the max done
// as well as revealing the answer, it will clear the question and prompt the next
// below i copied an example of how I want my questions given to use from an excericse on 10/28 in activity 33- QUestion game
// variables are going to be needed for a timer, leaderboard, each element (document.getElementbyId), body, .createElements  
//wrong answers take away from timer
//a function that will take away time from timer will begin on button click of start quiz


// possible varibles

    var timer = 90;

    var score;

    var leaderboard;

    var 

    var startQuiz = document.getElementById("startQuiz");

    startQuiz.addEventListener("click", function() {


    });


    var questions = [

        {   q: "Who won the Superbowl in 2019?",

            qc: ["San Francisco 49ers", "New England Patriots", "Kansas City Chiefs", "Green Bay Packers"],

            a: "Kansas City Chiefs"
        },   

        {
            q: "Which of these plays is the is the longest play produced by Shakespeare?",

            qc: ["Hamlet", "Romeo and Juliet", "Juluis Cesar", "Macbeth"],

            a: "Hamlet"
        },

        {
            q: "What is the name of the first female astronaut?",

            qc: ["Sandra Bullock", "Sally K. Ride", "Anne Hathaway", "Katherine Johnson" ],

            a: "Sally K. Ride"
            
        },

        {
            q: "What nation won the 2018 FIFA World Cup?",

            qc: ["Brazil", "Germany", "France", "Belgium"],

            a: "France"
        },

        {
            q: "Which mammal doesn't have vocal cords?",

            qc: ["Sloth", "Giant Anteater", "Giraffe", "Pangolin"],

            a: "Giraffe"
        }

    ]


    for (var i = 0; i < questions.length; i++) {
        var answers = prompt(questions[i].q)
        console.log(answers);
   
        if (answers === questions[i].a) {
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    };


// var questions = [
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