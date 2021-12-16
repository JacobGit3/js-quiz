/*
var questionDiv = document.getElementsByName("question");
var questionText = document.getElementById("replace-div1");
var multiChoiceDiv = document.getElementById("responses");
var multiChoice = document.getElementById("replave-div2");
var answerDiv = document.getElementById("answer")
var answer = document.getElementById("replace-div3");

// base text on startup
var  baseText = document.createTextNode("Click below to start the quiz!");
questionText.appendChild(baseText);

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

    // Clear Text by removing Divs
    questionText.remove();
    multiChoice.remove();
    answer.remove();

    // Recreate Divs for new content
    var questionText

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
document.getElementById("btn").addEventListener("click", newQuestion);

*/
/////////////////////////////////////////////////////////////

// VARIABLES
var questionDiv = document.getElementsByName("question");
var questionText = document.getElementById("replace-div1");
var multiChoiceDiv = document.getElementById("responses");
var multiChoice = document.getElementById("replave-div2");
var answerDiv = document.getElementById("answer");
var answer = document.getElementById("replace-div3");

// ARRAYS

// Questions Array
var questions = [
    "What are variables used for in JavaScript?",
    'What is the correct syntax for referring to an external script called " abc.js"?'
];

// Responses Array
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

// Answers Array
var answers = ["1", "2"];

// FUNCTIONS

// Create Button
function createbtn(text) {
    var button = document.createElement("button");
    button.innerHTML = text;
    button.id = "btn";
    document.multiChoice.appendChild(button);
}

// Create Question Text
function createQuestion(text) {
    var response = document.createElement("text")
    response.innerHTML = text;
    response.id = "question";
    document.question.appendChild(response);
}

// Clear and Create new page
function nextQuestion() {
    var quizLength = questions.length;
    var questionNum = 0;

    // Remove divs to clear content
    questionText.remove();
    multiChoice.remove();
    answer.remove();

    // Create divs for new content
    var questionText = document.createElement('div');
    questions.appendChild(questionText);

    var multiChoice = document.createElement("div");
    multiChoiceDiv.appendChild(multiChoice);

    var answer = document.createElement("div");
    answerDiv.appendChild(answer)

    // Add new content

    //If there are still questions
    if (questionNum < quizLength) {
        // Replace the question 
        var question = questions[questionNum];
        createQuestion(question);

        // Replace the responses
        var i = 0
        while (i < responses[questionNum].length) {
            var response = responses[questionNum][i];
            console.log(i)
            createbtn(response);
            i++;
        }
    }
}

// Run function on start
nextQuestion()
// Event Listeners
document.getElementById("btn").addEventListener("click", newQuestion);