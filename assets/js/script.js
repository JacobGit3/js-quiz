// Global Variables
var question = document.getElementById("question");
var multiChoice = document.getElementById("responses");
var score = 0;
var i = 0;
var highscores = [];
var highscoreCounter = 0;
var timeLeft = "time";

// Array
var questions = [
    {
        prompt:"How can an HTML element be accessed in JavaScript?",
        options:"(A) html.getElementByID()<br>(B) document.getElement()<br>(C) document.getElementById()<br>(D) index.access()",
        answer:"C"
    },
    {
        prompt: "What are variables used for in JavaScript?",
        options: "(A) Storing numbers, dates, or other values<br>(B) Varying randomly<br>(C)Causing high-school algebra flashbacks<br>(D) None of the above",
        answer: "A"
    },
];

// Add text on  and buttonInital page load
var questionText = document.createElement("text");
var optionsText = document.createElement("text");
var startBtn = document.createElement("button");
startBtn.innerHTML = "Start";
startBtn.className = "start"
questionText.innerHTML = "Click the start button!";
document.getElementById("startBtn").appendChild(startBtn)
document.getElementById("question").appendChild(questionText);
document.getElementById("responses").appendChild(optionsText);

// Functions
function start(){
    i = 0;
    score = 0;
    buttonDiv = document.getElementById("btn");
    if (buttonDiv.children.length == 0){
        var ABtn = document.createElement("button");
        ABtn.id = "A";
        ABtn.innerHTML = "A";
        document.getElementById("btn").appendChild(ABtn);
        var BBtn = document.createElement("button");
        BBtn.id = "B";
        BBtn.innerHTML = "B";
        document.getElementById("btn").appendChild(BBtn);
        var CBtn = document.createElement("button");
        CBtn.id = "C";
        CBtn.innerHTML = "C";
        document.getElementById("btn").appendChild(CBtn);
        var DBtn = document.createElement("button");
        DBtn.id = "D";
        DBtn.innerHTML = "D";
        document.getElementById("btn").appendChild(DBtn);
    }
    quiz()
    timer()
}

function check(){
    if (timeLeft == 0){
        alert("Time ran out!")
        i++
        quiz()
    }
    var response = event.target.id;
    if (response == questions[i].answer){
        alert("Correct!");
        score++;
        i++;
        quiz()
    }
    else {
        alert("Incorrect!");
        i++;
        quiz()
    }
}

// Adds highscore and saves to local storage
function addhighscore(name, score){
    var highscore = document.createElement("div");
    highscore.id = name;
    highscore.className = "entry"
    highscoreEntry = `${name} scored ${score}/${questions.length}`;
    highscore.innerHTML = highscoreEntry;
    document.getElementById("highscores").appendChild(highscore);
    saveHighscore()
}

// Save highscores
function saveHighscore(){
    highscoreCounter = localStorage.length;
    localStorage.setItem(highscoreCounter, JSON.stringify(highscoreEntry));
}

// Load highscores
var loadHighscore = function() {  
    if (!localStorage) {
      return false;
    }
    console.log("Saved highscores found!");
    // loop through savedHighscore array
    for (var i = 0; i < localStorage.length; i++) {
        var highscore = document.createElement("div");
        highscore.className = "entry";
        savedHighscore = localStorage.getItem(localStorage.key(i)) ;
        // add highscore to highscore section
        savedHighscore = savedHighscore.replace(/['"]+/g, '');
        highscore.innerHTML = savedHighscore;
        document.getElementById("highscores").appendChild(highscore);
    }
};

// Quiz question handler
function quiz(){

    if (i < questions.length){
        questionText.innerHTML = questions[i].prompt;
        optionsText.innerHTML = questions[i].options;
        timeLeft = 60
    }
    else {
        timeLeft = "Time"
        alert("You scored " + score + "/" +questions.length);
        var name = prompt("type in your name to save the score");
        // only add highscore if user inputs name 
        if (name != null){
            addhighscore(name, score)
        }
    }
}

// Timer function
function timer(){
    if (timeLeft == NaN){
        // Display string time (does not work displays NaN)
        document.getElementById("timer").innerHTML("Time")
    }
    else {
        timeLeft--;
        time = document.getElementById("timer");
        time.innerHTML = timeLeft;
        if (timeLeft > 0){
            setTimeout(timer, 1000);
        };
        if (timeLeft === 0){
            check();
        };
    }
};

// Event listners
document.getElementById("btn").addEventListener("click", check);
document.getElementById("startBtn").addEventListener("click", start);

loadHighscore()