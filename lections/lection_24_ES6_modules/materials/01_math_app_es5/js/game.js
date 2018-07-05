var game = function() {
    
    // private members
    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3; // set default value
    
    function printGame() {
    
        player.logPlayer();
    
        // determine the number of problems to show
        setProblemCount(document.getElementById('problemCount').value);
    
        // create the html for the current game
        var gameForm = '';
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
    
        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
    
        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    }
    
    function calculateScore() {
    
        var problemsInGame = getProblemCount();
        var score = 0;
    
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if(i * factorElement.value == answer) {
                score++;
            }
        }
    
        // create a new result object to pass to the scoreboard
        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factorElement.value
        };
    
        // add the result and update the scoreboard
        var scoreboard = new Scoreboard();
        scoreboard.addResult(result);
        scoreboard.updateScoreboard();
    
        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
    
    function setProblemCount(newProblemCount) {
        problemsPerGame = newProblemCount;
    }
    
    function getProblemCount() {
        return problemsPerGame;
    }
    
    // public members
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
    
}();