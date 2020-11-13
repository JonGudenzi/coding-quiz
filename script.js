var timerDiv = document.querySelector("#timer") ;
var startBtn = document.querySelector("#startBtn");
var quizArea = document.querySelector("#box"); 
var questionBox = document.querySelector("#question"); 
var highScores = document.querySelector("#highScores");
var time = 3;
var answerChoice = document.querySelector(".button");
var choiceDiv = document.querySelector("#choices");
var userNameEl = document.querySelector("#userName");
var index = 0;
var score = 0;


var currentQuestion = [
    {
        question : "What is the answer to this question?",
        choiceA : "Right",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "What is the answer to this second question?",
        choiceA : "Wrong",
        choiceB : "right",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "What is the answer to this third question?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "right",
        correct : "C"
    }
];




quizArea.style.visibility = "hidden";
highScores.style.visibility = "hidden";


function startQuiz(){
    quizArea.style.visibility = "visible";
    startBtn.style.display = "none";
    highScores.style.display = "none";
    startBtn.style.height = "0px";
    askQuestion();
}



// timer
function countDown(){
    time--;
    timerDiv.innerHTML = time;
    if (time == 0){
        clearInterval(this);
    }
};

var interval;
function startTime(){
    setInterval(countDown, 1000);
    if (time == 0){
        clearInterval(time);
    }
    startQuiz();
}

function askQuestion(){
var curQuest = currentQuestion[index].question;
questionBox.innerHTML = curQuest;
var choicesArr = currentQuestion[index].choices
for (let i = 0; i < choicesArr.length; i++) {
 

function nextQuestion(){
if (currentQuestion.choices === currentQuestion.answer){
    var curQuest = currentQuestion[index].question;
questionBox.innerHTML = curQuest;
var choicesArr = currentQuestion[index].choices
for (let i = 0; i < choicesArr.length; i++);
}
}


startBtn.addEventListener("click", startTime);
