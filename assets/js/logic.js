var index = -1;
var time = document.querySelector("#time");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var finalScore = document.querySelector("#final-score");
var highscores = document.querySelector("#highscores");
var timerOn = true;

var timeNow = 100;
time.innerHTML = timeNow;

start.addEventListener("click", function() {
    startScreen.style.display = "none";
    // timer)
    setInterval(function () {
        if (timeNow != 0 && timerOn == true) {
            timeNow --;
            time.innerHTML = timeNow;
        }
    },1000);
    
    questions.className = "";
    changeRounds();
});

function changeRounds() {
    index ++;
    questionTitle.innerHTML = fiveQuestions[index].question;
    for (var a = 0; a < fiveQuestions[index].choices.length; a++) {
        function createMenuItem(name) {
            var button = document.createElement('button');
            button.id = "button";
            button.className ="button"
            button.innerHTML = name;
            button.dataset.number = a;
            return button;
        }
        choices.appendChild(createMenuItem(fiveQuestions[index].choices[a]));
        
        var accessButton = document.querySelectorAll(".button");

        accessButton[a].addEventListener("click", function(event) {
            if (event.target.dataset.number == fiveQuestions[index].answer) {
                for (var b = 0; b <fiveQuestions[index].choices.length; b++) {
                choices.removeChild(choices.firstElementChild);
            };
                if (index < 4) {
                    changeRounds();
                } else {
                    timerOn = false;
                    finalScore.innerHTML = timeNow;
                    questions.className = "hide";
                    endScreen.className = "";
                    initials.addEventListener("input", function(event) {
                        submit.addEventListener("click", function() {
                            var submitName = event.target.value;
                        });
                    });
                    
                };
            } else {
                timeNow = timeNow - 10;
            }
        });
    };
};











    




