console.log('Lection 11');


// function Human(name, age){
//     this.name = name;
//     this.age = age;
// }

// Human.prototype.run = function(){
//     console.log(this.name + ' is run');
// }

// var p = new Human('Vasya', 23); // объекты <==> экземпляр
//     d = new Human('Katya', 56);

// console.log(p);

// p.run();
// d.run();


// ----------------------

// инкапсуляция

// function Human(name, age){
//     var separator = '_'

//     this.name = name;
//     this.age = age;
//     this.foo = 200;

//     this.show = function(){
//         return this.name + separator + this.age;
//     }

//     this.getSeprator = function() {
//         return separator;
//     }

//     this.setSeprator = function(value){
//         separator = value;
//     }
// }

// Human.prototype.run = function() {

// }


// var p = new Human('Vasya', 26);

// console.log(p.show());


// ----------------------------
// наследование классов

// function Parent(){}

// Parent.prototype.run = function(){ console.log('run'); }


// function Child(){}

// // Child.prototype = new Parent(); // bad

// var link = Child.prototype.constructor;
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.constructor = link;

// Child.prototype.sleep = function(){ console.log('sleep'); }

// var p = new Child();

// // p.run();
// p.sleep();

// function SuperChild(){}

// SuperChild.prototype = Object.create(Child.prototype);

// var z = new SuperChild();


// ----------------------------


function Human(name, speed) {
    this.name = name;
    this.speed = speed;
}

Human.prototype.run = function(){
    console.log(this.name + ' has speed: ' + this.speed);
}

var person_1 = new Human('Vasya', 5),
    person_2 = new Human('Petya', 0);


person_1.run();
person_2.run();

person_1.run = function(){
    console.log(this.name + ' fly');
}


person_1.run();
person_2.run();

person_2.__proto__.sleep = function(){
    console.log(this.name + ' sleeping');
}

person_1.sleep();
person_2.sleep();


Human.prototype.eat = function(){
    console.log(this.name + ' eating');
}

person_1.eat();
person_2.eat();