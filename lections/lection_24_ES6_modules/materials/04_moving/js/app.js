var moving = require('./moving.js');
var sync = document.querySelector('.sync');
var target = document.querySelector('#target');

var btns = document.querySelectorAll('.btns');


sync.addEventListener('click', function(){
    moving.sync(document.querySelector('#' + target.value));
});

btns.forEach(element => {
    element.addEventListener('click', function(){
        moving.doShift(element.dataset.direction);
    });
});