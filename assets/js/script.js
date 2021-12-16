// Global Variables
var question = document.getElementById("question");
var multiChoice = document.getElementById("responses");
var score = 0;
var i = 0;

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
questionText.innerHTML = "Click the start button!";
document.getElementById("startBtn").appendChild(startBtn)
document.getElementById("question").appendChild(questionText);
document.getElementById("responses").appendChild(optionsText);

// Functions
function start(){
    i = 0;
    score = 0;
    questionText.innerHTML = questions[i].prompt;
    optionsText.innerHTML = questions[i].options;
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
}

function check(){
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

function addhighscore(name, score){
    var highscore = document.createElement("div");
    highscore.id = name;
    highscore.innerHTML = 
    document.getElementById("highscores").appendChild(highscore);
}

function quiz(){

    if (i < questions.length){
        questionText.innerHTML = questions[i].prompt;
        optionsText.innerHTML = questions[i].options;
    }
    else {
        alert("You scored " + score + "/" + questions.length);
        prompt("type in your name to save the score");
        addhighscore()
    }

}

// Event listners
document.getElementById("btn").addEventListener("click", check);
document.getElementById("startBtn").addEventListener("click", start);