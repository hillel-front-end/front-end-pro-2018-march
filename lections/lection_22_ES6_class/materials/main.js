console.log('Lection_22');


function Animal() {
    this.size = 10;
}

Animal.prototype.foo = function () {

}
Animal.eat = function() { // static
    console.log('eat');
}


function Human(name, age) {
    this.name = name;
    this.age = age;

    var _counter = 200;

    this.run = function() {
        console.log(this.name, 'run', _counter);

        _counter++;
    }
    
    this.getFoo = () => _counter;
    this.setFoo = value => _counter = value;
}

Human.prototype = Object.create(Animal.prototype);

Human.getCount = function() {
    console.log('count: ****');
}

Human.prototype.sleep = function() {
    console.log(this.name, 'sleep');
}

var p1 = new Human('Vasya', 25);

p1.run();
p1.run();
// p1.sleep();