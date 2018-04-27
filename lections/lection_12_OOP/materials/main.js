console.log('Lection 12');

function Animal(name, age, title, list, options) {
    var obj = {
        name: name,
        age: age
    }

    options = options || {};

    return Object.assign(Object.create(obj), {
        title: title,
        list: list
    }, options);
}


Animal.prototype.run = function(){}
