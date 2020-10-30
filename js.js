//Need to create arrays as shown in class to form questions with objects
// need objects in my arrays
//need to create a few buttons and event.listerner(click, funnction)
// if the answer is right the event.listener will call up a function that will make text reveal to show that you are correct and same thing goes for wrong answer
// not only will it reveal answer it will then keep score and proceed to next question. must clear questions before this tho. done this in excercises today on 10/29 in activity on
// five questions will be the max done
// also on top of revealing the answer, it will clear
// below i copied an example of how I want my questions given to use from an excericse on 10/28 in activity 33- QUestion game



    var questions = [

        {   q: "Who won the Superbowl in 2019?",

            qc: ["San Francisco 49ers", "New England Patriots", "Kansas City Chiefs", "Green Bay Packers"],

            a: "Kansas City Chiefs"
        },   

        {
            q: "Which of these plays is the is the longest produced by Shakespeare?",

            qc: ["Hamlet", "Romeo an Juliet", "Juluis Cesar", "Macbeth"],

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

 for (var i = 0; i < questions.length; i++) {
     var answers = prompt(questions[i].q)
     console.log(answers);

     if (answers === questions[i].a) {
         alert("Correct!");
     } else {
         alert("Wrong!");
     }