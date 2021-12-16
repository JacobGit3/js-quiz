# js-quiz
This is a java script based page for a basic quiz on javascript basics

Upon Page load the user will see the highscore link tag, time timer, title, start button, and two sections for questions and higscores that will start with no content other than their titles.

When the start button is clicked, the multiple choice buttons are created and appeneded to the question div. then the quiz function is activated

The quiz function checks the questions array for which question the user is on and then adds the data in their respective places by replaceing the inner html content of their respective divs.

The Timer function is also started with a time Left value of 60 seconds that is reset each time a question is finished. 

Once the user clickes a multiple choice button or if the time runs out the check function runs.
If the user gives a response the functions compares it the answer stored in the questions array, if true gives and alert and adds one to score, if false gives an alert. both cases call the quiz function after the alert is confirmed by the user.
If time runs out it will give an alert and move on to the next question by calling the quiz function

Once the quiz function has gone through all of the questions in the array it will come up with an alert letting the user know their score.
The user is then given a prompt to input their name if they wish to save the score.
If the user does not want to save a score and leave the prompt empty no score will be saved.
If the user inputs their name, addhighscore is ran and it will create a div and append the highscore data to it then run the savehighscore function

The save highscore function saves the highscore with an id of highscoreCounter which is the number of saved highscores so that they will not overwrite another score.

On reload of page after scores are saved the loadhighscore function will be called properly, as long as local storage is not empty it will loop through the array in local storage and append all of the  saved highscores to the div.

This is an image of the webpage on first load:


![first-load](./assets/images/first-load.png)



resources used:

Quiz and array structure/functionality loosely based off of
https://youtu.be/LQGTb112N_c

Removing quotes from higscore entry
https://pretagteam.com/question/remove-quotes-from-array-javascript
  var someStr = 'He said "Hello, my name is Foo"';
  console.log(someStr.replace(/['"]+/g, ''));
  
Timer function
https://codepen.io/joshua-golub/pen/LYYKrKg
