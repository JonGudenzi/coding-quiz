var timerDiv = document.querySelector("#timer") ;
var startBtn = document.querySelector("#startBtn");
var questionBox = document.querySelector(".box");
var time = 3;
var questionEl = document.querySelector("#question")
var answerChoice = document.querySelector(".button")


startBtn.addEventListener("click", startTime);
startBtn.addEventListener("click", startQuiz);
questionBox.style.visibility = "hidden";




function countdown(){
    time--;
    timerDiv.innerHTML = time;
    if (time <= 0){
        time = 1;
    }
    
};

function startTime(){
    setInterval(countdown, 1000)
}

function startQuiz(){
    questionBox.style.visibility = "visible";
    startBtn.style.visibility = "hidden"
    startBtn.style.height = "0px"
    nextQuestion()
}

function showQuestion(){
    questionEl = question.questions;
}

var questions = [
    {
        question: "This is the first question",
        answers: [
            {text: "A", correct: false},
            {text: "B", correct: true},
            {text: "C", correct: false},
            {text: "D", correct: false}
        ]
    }
]




