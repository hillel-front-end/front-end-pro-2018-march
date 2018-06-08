console.log('Lection_22');


// class Animal {
//     constructor(size) {
//         this.size = size;
//     }

//     eat() {
//         console.log('eat');
//     }
// }

// class Human extends Animal{
//     constructor(name, age, size) {
//         super();
//         super.eat();
//         this.name = name;
//         this.age = age;

//         var _counter = 200;

//         this.run = function() {
//             console.log(this.name, 'run', _counter);
//             _counter++;
//         }

//         this.getFoo = () => _counter;
//     }

//     sleep() {
//         console.log(this.name, 'sleep');
//     }

//     static eat() { // static
//         console.log('eat');
//     }
// }

// var p1 = new Human('Vasya', 25, 200);








//---------------------------------------

// var p2 = new Croc('Gena', 50, 200);

// class Animal {
//     constructor(weight) {
//         this.weight = weight;

//         this.sleep();
//     }

//     eat() {

//     }
// }

// class Human extends Animal {
//     constructor(weight){
//         super(weight);
//     }

//     sleep() {
//         console.log(this, 'sleep');
//     }
// }

// var p1 = new Human(300);

// console.log(p1);



// -------------------------------------


// class Animal {
//     constructor(name, age, weight) {
//         this.weight = weight;
//         this.name = name;
//         this.age = age;
//     }

//     eat() {

//     }
// }

// class Human extends Animal {
//     // constructor(name, age, weight) {
//     //     super(name, age, weight);
//     // }

//     sleep() {
//         console.log(this.name, 'sleep');
//     }
// }


// var p1 = new Human('Petya', 32, 200);
// // p1.sleep();
// console.log(p1);


// const defaultVal = {
//     a: 0,
//     b: 0
// }



// function sum(a = defaultVal.a, b = defaultVal.b) {
//     return a + b;
// }


// sum(2);



class Human {
    constructor(data) {
        this.name = data.name;
    }
}


class Child extends Human {
    constructor(data) {
        super(data);

        this.age = data.age;
    }
}

res = new Child({
    name: 'Petya',
    age: 20
});
console.log(res);