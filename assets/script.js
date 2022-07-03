// variable for start button event listener
// do I need to do this since javascript is already linked for bootstrap

// variable for local storage log 
var startButton = document.querySelector ("#start-btn");
var questionContainerElement = document.querySelector ('#questions');

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {

}

function selectAnswer () {

}

var questions = [
    {
        question: "How is an object notated in JS?\n(a) Curly Brackets\n\(b) Square Brackets\n\(c) Single Quotations\(d) Double Quotations",
        answer: "a"
    },
    {
        question: "Which of these is not a primitive type in JS?\n(a) String\n\(b) Number\n\(c) Boolean \n(d) Date",
        answer: "d"
    },
    {   
        question: "Justify-Content Property is used in conjunction with...?\n(a) Cards\n\(b) mediaQuery\n\(c) flexbox\n(d) HTML",
        answer: "c"
    }
]
var score = 0 

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++
    }

}














// landing page with start button 
// when start button is clicked, remove welcome msg and append question 1 
    // add event listener button 
        // activity 12
// start timer
    // javascript counter method idk
// user answers question - read chosen element, data value, compare to answer key 
// create an array for all of the questions
        // youll have ch



var scoreForm = $('#final-score');


// Activity 6 Third party APIs
// I dont know what this would look like

function handleFormSubmit(event) {
    event.preventDefault();
var scoreForm = $('input[name="formSubmit"]').val();
if (!scoreForm) {
    console.log('No name and score entered!');
    return;
}
inputGroupEl.append(#score-form + scoreForm + </div>);


    // if (userAnswer === correctAnswer)
        // next question
  
    // some kind of HTML elements to present the questions (radio buttons)
// if correct go to next question 
    // confirm form submission
    // eventlistener




    // if incorrect subtract 10 secs from timer 
// end of quiz
    // add up user score
    // display input for my user to type their name 
    // second html and display username and score - read object from local storage /activity 24
    localStorage.addItem("")











    //     GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score