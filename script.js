var timerDiv = document.querySelector("#timer") ;
var startBtn = document.querySelector("#start");
var quizArea = document.querySelector("#container"); 
var highScores = document.querySelector("#highScores");
var counter = document.querySelector("#counter");
var choiceDiv = document.querySelector("#choices");
var userNameEl = document.querySelector("#userName");
var choiceA = document.querySelector("#A")
var choiceB = document.querySelector("#B")
var choiceC = document.querySelector("#C")
var progress = document.getElementById("progress");
var question = document.getElementById("question");
var questionBox = document.getElementById("#question-Box")
var score = 0;



var currentQuestion = [
    {
        question : "Which one of these is a JavaScript data type?",
        choiceA : "string",
        choiceB : "method",
        choiceC : "function",
        correct : "A"
    },{
        question : "next question?",
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

var lastQuestion = currentQuestion.length - 1;
var runningQuestion = 0;
var count = 10;
var questionTime = 10; 

var TIMER;
var score = 0;

// question
function renderQuestion(){
    var q = currentQuestion[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}


start.addEventListener("click",startQuiz);


// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quizArea.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// timer

function renderCounter(){
    if(count <= questionTime && count >= 0){
        counter.innerHTML = count;
        count--;
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
           
        }else{
            console.log("renderCounter")
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// check to see if answer is right or wrong

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
    }else{
        count --;
        answerIsWrong();
        
    }
    count = 10;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}


//  correct
function answerIsCorrect(){
    document.getElementById(runningQuestion);
}

//  Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion);
}

// compute score
function scoreRender(){
    highScores.style.display = "block";
    start.style.display = "block";
    question.style.display = "none";
    timerDiv.style.display = "none";
    choiceDiv.style.display = "none";
    
    var scorePerCent = Math.round(100 * score/questions.length);
    
    // highScores.innerHTML = "<img src="+ img +">";
    highScores.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

