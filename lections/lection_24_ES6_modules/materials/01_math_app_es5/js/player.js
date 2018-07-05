var player = function() {
    
    // private members
    var playerName = '';
    
    function logPlayer() {
        console.log('The current player is ' + playerName + '.');
    }
    
    function setName(newName) {
        playerName = newName;
    }
    
    function getName() {
        return playerName;
    }

    function _getX() {
        return 10;
    }
    
    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
    
}();