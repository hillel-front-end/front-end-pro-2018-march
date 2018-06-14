var scoreboard = require('./scoreboard.js');

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

// exports.logPlayer = logPlayer;
// exports.setName = setName;
// exports.getName = getName;

// module.exports = { logPlayer, setName, getName }

module.exports = { 
    logPlayer: logPlayer, 
    setName,
    getName
};
