# QuizforCoding

<h2>Objective: Make an interactive Quiz using Javascript</h2>


<h4>Description of Application</h4>
    <p> When clicked on the deployed link, the user will be brought to the index.html page where the quiz will start and take place.
    Once the start button has cliked. A timer in the middle of the screen will display which was created with Javascript. The user will answer
    the quiz as fast as they can to achieve the highest score possible. If a wrong answer is given, time will be subtracted from the timer thus
    lowering the score the individual takes. At the end of the quiz, the user will be told the score and prompted to play their intials into a 
    highscore leaderboard so the user can be on top!</p>


<h4> Process of Creation</h4>
    <ol>
        <li>First was to create html and place the skelton of application. A location is needed for timer and to hold the questions</li>
        <li>After the html skeleton was made, a Javascript file had to be created and make a function for a timer. An event listener is required for
        button Start Quiz which will intiate the quiz and the timer.</li>
        <li>One can not take a quiz without questions. I created questions into a seperate JS file to organize code effectively. Having
        50 lines of code for questions on the same JS file as the timer and other functions is not neat. I can simply pull from the questions anytime.</li>
        <li>On the js.js file, variables are needed for the important segments of the quiz on the html such as score and value for a timer.</li>
        <li>When varibales are established, functions are then needed to display, check the answers and rotate the questions via user input</li>
        <li>How I displayed the questions was having a specific div that would contain the class "display: none". When the parameters is correct, it will
        remove this "display: none" and put a "display: block"</li>
        <li>The process above is the same for when the quiz is done. The questions will be hidden with "display: none" and the final screen will be shown with 
        your score and button to input your leaderboard.</li>
        <li>The leaderboard html stores the intials from the user input into local storage and then retrieved when placed in the list.</li>
    </ol>


<h4>Acknowledgements</h4>
    <ul>
        <li>Mazin Abed, my tutor</li>
        <li> Manoli, my TA</li>
    </ul>
