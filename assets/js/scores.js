var highscores = document.querySelector("#highscores");
var clear = document.querySelector("#clear");
var highScoresArray = [];

if (localStorage.getItem("highScoresArray") != null) {
    highScoresLength = JSON.parse(localStorage.getItem("highScoresLength"));
    highScoresArray = JSON.parse(localStorage.getItem("highScoresArray"));
};

for (var c = 0; c < highScoresArray.length; c++) {
    function createHighScoreItem(name, score) {
        var li = document.createElement('li');
        li.id = "li";
        li.className ="li";
        li.innerHTML = "Name: " + name + "     /     Score: " + score;
        return li;
    }
    highscores.appendChild(createHighScoreItem(highScoresArray[c]['name'], highScoresArray[c]['score']));
};

clear.addEventListener("click", function () {
    localStorage.setItem('highScoresLength', JSON.stringify(0));
    highScoresArray = [];
    localStorage.setItem('highScoresArray', JSON.stringify(highScoresArray));
    var list = document.getElementById("highscores");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
    }
})