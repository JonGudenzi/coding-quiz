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
var question = document.getElementById("question");
var questionBox = document.getElementById("question-box")
var score = 0;



var currentQuestion = [
    {
        question : "Which one of these is a JavaScript data type?",
        choiceA : "string",
        choiceB : "method",
        choiceC : "function",
        correct : "A"
    },{
        question : "When was JavaScript created?",
        choiceA : "1970",
        choiceB : "1995",
        choiceC : "2003",
        correct : "B"
    },{
        question : "How do you add a comment in JavaScript?",
        choiceA : "!comment!",
        choiceB : "(comment)",
        choiceC : "//comment",
        correct : "C"
    }
];

var lastQuestion = currentQuestion.length - 1;
var runningQuestion = 0;
var count = 10;
var questionTime = 10; 

var TIMER;

// question
function renderQuestion(){
    
    var q = currentQuestion[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}


startBtn.addEventListener("click",startQuiz);


// start quiz
function startQuiz(){
    timerDiv.style.display = "block";
    choiceDiv.style.display = "flex";
    question.style.display = "block";
    highScores.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quizArea.style.display = "block";
    questionBox.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

// timer

function renderCounter(){
   
    if(count <= questionTime && count >= 0){
        counter.innerHTML = count;
        count--
    }else{
        count = 10;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
           
        }else{
            console.log("renderCounter")
            clearInterval(TIMER);
        }
    }
}

// check to see if answer is right or wrong
function checkAnswer(answer){
    if( answer == currentQuestion[runningQuestion].correct){
        score++;
        answerIsCorrect();
        

    }else{
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
    count --;
}

// end quiz
function scoreRender(){
    highScores.style.display = "block";
    start.style.display = "none";
    question.style.display = "none";
    questionBox.style.display = "none";
    timerDiv.style.display = "none";
    choiceDiv.style.display = "none";    
}

function saveUserScore() {
    var stores = Array();
    var user = document.getElementById('userName');

    var saveUserScore = user.value;
    if ((saveUserScore == null) || (saveUserScore == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        //push that value to the array
        stores.push(saveUserScore);
        //clear the input field for visual 
        user.value = "";
        //print value in local storage
        window.localStorage.setItem("database", stores.join(" "));
        //confirm write
        document.getElementById('write').innerHTML = "data stored.";
        
    }
    
       let retrievedObject = JSON.parse(window.localStorage.getItem('results'));

        if(!retrievedObject ){
        alert('Empty, initializing');
        retrievedObject  = [];
        }
}

function readStatus() {
    
    var scorePerCent = Math.round(100 * score/currentQuestion.length);
    
    if (window.localStorage.getItem("database") == null) {
        document.getElementById('write').innerHTML = "nothing stored.";
    } else {
        document.getElementById('write').innerHTML = window.localStorage.getItem("database") + ' ' + scorePerCent + '%'

    }
}
