console.log('Lection_14');

window.onload = function() {
    var container = document.querySelector('.container'),
        step = 4,
        direction = 1,
        buffer = 5;

    var timer = setTimer();
    
    function startAnimation(){
        if ((container.offsetLeft >= window.innerWidth - container.offsetWidth - buffer) ||
        (container.offsetLeft <= 0 + buffer && direction == -1)) {
            direction = -direction;
        }

        container.style.left = container.offsetLeft + (step*direction) + 'px';
    }

    function setTimer(){
        return setInterval(startAnimation, 20);
    }


    document
        .querySelector('#stop')
        .addEventListener('click', function(){
            clearInterval(timer);
        });
    
    document
        .querySelector('#start')
        .addEventListener('click', function(){
            timer = setTimer();
        });



    var block = document.querySelector('.block'),
        input = document.querySelector('.input');

    // DOM level 0
    // block.onclick = onBtnClick;
    // block.onmouseover = onMouseOver;
    // block.onmouseout = onMouseOut;
    // block.onmousemove = onMouseMove;

    // block.onclick = function(){
    //     console.log('function 2');
    // };

    // setTimeout(function(){
    //     block.onclick = null; // отмена события
    // }, 5000);


    // DOM level 2
    // block.addEventListener('click', onBtnClick);
    // block.addEventListener('click', function(){
    //     console.log('function 2');
    // });

    
    // setTimeout(function(){
    //     block.removeEventListener('click', onBtnClick);
    // }, 2000);

    // mouseup, down, click

    // input.addEventListener('mousedown', function(event){
    //     console.log('mousedown');
    // });

    // input.addEventListener('mouseup', function(event){
    //     console.log('mouseup');
    // });

    // ----------------------------------------------- form events

    input.addEventListener('focus', function(event){
        console.log('focus');

        // this.value = "";
    });

    // input.addEventListener('input', function(event){
    //     console.log('input', event);
    // });

    // input.addEventListener('change', function(event){
    //     console.log('change', event);
    // });

    // input.addEventListener('blur', function(event){
    //     console.log('blur', event);
    // });

    input.addEventListener('click', function(event){
        console.log('click');
    });
}


function onBtnClick(event) { // event - объект события
    console.log('click', event);

    this.style.backgroundColor = 'red';

    // event.target.style.backgroundColor = 'red';
}

function onMouseOver(event) {
    console.log('onMouseOver');
}

function onMouseOut(event) {
    console.log('onMouseOut', event);
}

function onMouseMove(event) {
    console.log('onMouseMove');
}