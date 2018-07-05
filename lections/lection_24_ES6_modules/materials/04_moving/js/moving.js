// private members
var _target = {},
    _step = 20;

function sync(domElement) {
    _target = domElement;
}

var _actionsMap = {
    top: _topCallback,
    left: _leftCallback,
    right: _rightCallback,
    bottom: _bottomCallback
}

function doShift(direction) {
    if (_actionsMap[direction]) {
        _actionsMap[direction]();
    } else {
        console.log('nothing');
    }
}


function _topCallback() {
    var top = parseInt(_target.style.top);

    _target.style.top = top - _step + 'px';
}

function _leftCallback() {
    var left = parseInt(_target.style.left);

    _target.style.left = left - _step + 'px';
}

function _rightCallback() {

}

function _bottomCallback() {

}


module.exports = { 
    sync,
    doShift
};
