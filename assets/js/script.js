var mainText = document.getElementById("question");
var multiChoice = document.getElementById("responses");
var answer = document.getElementById("answer");
var submit = document.getElementById("submit")

// base text on startup
var  baseText = document.createTextNode("Click below to start the quiz!");
mainText.appendChild(baseText);

createbtn("START");

//Answer options buttons

function createbtn(text) {
    var button = document.createElement("button");
    button.innerHTML = text;
    button.id = "btn";
    document.getElementById("responses").appendChild(button);
}

function createQuestion(text) {
    var question = document.createElement("text")
    question.innerHTML = text;
    question.id = "question";
    document.getElementById("question").appendChild(question);
}

// Main function to generate a new question or end game
function newQuestion() {
    var quizLength = questions.length;
    var questionNum = 0;

    // Clear previous content
    if (document.hasChildNodes) {
        document.getElementById("question").removeChild(baseText);
    }   
    document.getElementById("responses").removeChild(btn);

    // Adding new content
    if (questionNum < quizLength) {
        // Replace the question 
        var question = questions[questionNum];
        createQuestion(question);

        // Replace the responses
        var i = 0
        while (i < 4) {
            var response = responses[questionNum][i];
            console.log(i)
            createbtn(response);
            i++;
        }
    }
}

var questions = [
    "What are variables used for in JavaScript?",
    'What is the correct syntax for referring to an external script called " abc.js"?'
];

var responses = [
    [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of the above",
    ],
    [
        '<script href=" abc.js">',
        '<script name=" abc.js">',
        '<script src=" abc.js">',
        'None of the above'
    ]
];

var answers = ["1"];

// Event Listeners
document.getElementById("btn").addEventListener("onclick", newQuestion());