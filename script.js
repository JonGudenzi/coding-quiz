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
var writeUserNameAndScore = document.getElementById("writeUserNameAndScore");
var questionBox = document.getElementById("question-box")
var score = 0;
var user = document.getElementById('userName');
var lastQuestion = currentQuestion.length -1;
var runningQuestion = 0;
var count = 8;
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

// timer and ending of quiz if timer runs out
function renderCounter(){
   
    if( count >= 0){
        counter.innerHTML = count;
        count--
    }else{
        count <= 0;
        answerIsWrong();
        scoreRender();
    
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
    count -=5;
}


// end quiz
function scoreRender(){
    highScores.style.display = "block";
    start.style.display = "none";
    question.style.display = "none";
    questionBox.style.display = "none";
    timerDiv.style.display = "none";
    choiceDiv.style.display = "none";   

    if (localStorage.getItem("database") == null) {
        document.getElementById('writeUserNameAndScore').innerHTML = "nothing stored.";
    } else {
        document.getElementById('writeUserNameAndScore').innerHTML = JSON.parse(localStorage.getItem("database"));

    }



    
}


function saveUserScore() {
var newStores = JSON.parse(localStorage.getItem('database')) || "";
var stores = [newStores];

    var scorePerCent = Math.round(100 * score/currentQuestion.length) + '%';
    

    var saveUserScore = user.value;
    if ((saveUserScore == null) || (saveUserScore == "")) {
        document.getElementById('writeUserNameAndScore').innerHTML = "nothing to store.";
    } else {
        
        stores.push(saveUserScore);
        stores.push(scorePerCent);

        //clear the input field for visual 
        user.value = "";
        //print value in local storage
          localStorage.setItem("database", JSON.stringify(stores.join(" ")));
        
        //confirm write
        document.getElementById('writeUserNameAndScore').innerHTML = stores;
        
        
        if (localStorage.getItem("database") == null) {
            document.getElementById('writeUserNameAndScore').innerHTML = "nothing stored.";
        } else {
            
            document.getElementById('writeUserNameAndScore').innerHTML = JSON.parse(localStorage.getItem("database"));

            
        }


        

    }



};

// function readStatus() {
    
    
//     var scorePerCent = Math.round(100 * score/currentQuestion.length);
    
    // if (window.localStorage.getItem("database") == null) {
    //     document.getElementById('writeUserNameAndScore').innerHTML = "nothing stored.";
    // } else {
    //     document.getElementById('writeUserNameAndScore').innerHTML = window.localStorage.getItem("database") + ' ' + scorePerCent + '%'

    // }

