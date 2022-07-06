const quizData = [
    {
        question: "A for-loop is used to iterate over:",
        a: "An object", 
        b: "An Array",
        c: "A function",
        d: "A variable",
        correct: "b",
    },
    {
        question: "How is an object notated in JS?",
        a: "Curly Brackest",
        b: "Square Brackets",
        c: "Single Quotations",
        d: "Double Quotations",
        correct: "a",
    },
    {
        question: "Which is not a primitive type in JS?",
        a: "String",
        b: "Number",
        c: "Boolean",
        d: "Date",
        correct: "d",

    },
    {
        question: "Justify-content property is used in conjunction with?",
        a: "Cards",
        b: "Media Query",
        c: "Flexbox",
        d: "HTML",
        correct: "c",
    },
    {
        question: "What does Const keyword mean?",
        a: "unchangeable",
        b: "changeable",
        c: "interchangeable",
        d: "undefined",
        correct: "a",
    },
];
// defined as constants to autopopulate into function 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const startBtn = document.getElementById('start')
const timerEl = document.getElementById('time')


let currentQuiz = 0;
let score = 0;
var timeId;
var time = 75;

function startQuiz(){
    console.log('Start Button Clicked'); 
}

function loadQuiz() {
    console.log('Start Button Clicked');
    timeId = setInterval(startTimer, 1000);
    timerEl.textContent = time;
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function startTimer(){
    time--;

    timerEl.textContent = time;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    var answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// startBtn.addEventListener('click', () =>{
//     const start = getSelected()
//     if(start = 'click') {
//         (quizData.
//     }
   
// });

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score ++
        }
   
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        // }   else {
        //     quiz.innerHTML =
        //     <h2>Questions $(score)/$(quizData.length) correct</h2>

        //     <button onclick="location.reload()">Reload</button>

             
        }

    }
})

startBtn.onclick = loadQuiz;
    



  














// landing page with start button 
// when start button is clicked, remove welcome msg and append question 1 
    // add event listener button 
        // activity 12
// start timer
    // javascript counter method idk
// user answers question - read chosen element, data value, compare to answer key 
// create an array for all of the questions
        // youll have ch



// var scoreForm = $('#final-score');


// Activity 6 Third party APIs
// I dont know what this would look like

// function handleFormSubmit(event) {
//     event.preventDefault();
// var scoreForm = $('input[name="formSubmit"]').val();
// if (!scoreForm) {
//     console.log('No name and score entered!');
//     return;
// }
// inputGroupEl.append(#score-form + scoreForm + </div>);


    // if (userAnswer === correctAnswer)
        // next question
  
    




   
    // add up user score
    // display input for my user to type their name 
    // second html and display username and score - read object from local storage /activity 24
    // localStorage.addItem("")

    // to store the scores on the score page 
    // look at ins form element section 5 



    // function handleFormSubmit(event) {
    //     event.preventDefault()

    //     var listItem = $('input[name="score-input"]').val()
    //     if(!listItem)
    //         console.log('no initials and score entered')
    // }

    // scoreInputEl.append('<li>' + listItem + '</li>');











