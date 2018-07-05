var Scoreboard = function() {
    
    console.log('Creating a scoreboard...');
    
    // private members
    var results = []; // array to store result of every game
    
    function addResult(newResult) {
        results.push(newResult);
    }
    
    function updateScoreboard() {
    
        var output = '<h2>Scoreboard</h2>';
    
        // loop over all results and create the html for the scoreboard
        for (var index = 0; index < results.length; index++) {
            var result = results[index];
            output += '<h4>';
            output += result.name + ': ' + result.score + '/' + result.problems + ' for factor ' + result.factor;
            output += '</h4>';
        }
    
        // add the updated scoreboard to the page
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }
    
    // return public members
    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }
    
};