console.log('Lection_9');

// this
// контекст выполнения -> this


// function f() {
//     console.log('Hello f', this); // на объект
// }

// var obj = {
//     doIt: f,
//     inner: {
//         s: 20,
//         f: f
//     }
// }

// // window.f();
// // window.obj.doIt();

// f();
// // alert();
// // prompt();

// // 
// obj.doIt();
// obj.inner.f();


// ---------------------


var human = {
    name: 'Petya',
    _age: 23,
    grat: function(){
        return console.log('Hello ' + this.name);
    },
    getAge: getAge
}

function getAge(){
    return this._age;
}

// var person = {
//     name: 'Katya'
// }

// // human._age 
// console.log(human.getAge());


// human.grat();

// person.foo = human.grat;

// person.foo();


// -------------------------


// var obj = {
//         sum1: 10,
//         sum2: 30
//     },
//     obj2 = {
//         sum1: 13,
//         sum2: 32
//     }

// function getAllSums() {
//     return this.sum1 + this.sum2;
// }


// obj2.getSum = getAllSums;
// var res = obj2.getSum();
// // delete obj2.getSum;


// ---------------------


var data = {
    p: 200,
    c: 2123,
    y: 80,
    addRecord: addRecord,
    text: 'HELLO'
}


function addRecord() {
    var args = arguments,
        last = args[args.length - 1],
        isLastBool = typeof last === 'boolean';

    flag = isLastBool ? last : false;

    for(var i = 0; i < args.length; i++){
        if (args[i] == last && isLastBool) {
            return;
        }
        for(var key in args[i]){
            if (flag && this[key]){
                continue;
            }
            this[key] = args[i][key];
        }
    }
}

data.addRecord({x: 10, o: 'O'}, {y: 40}, {text: 'Bamboleyloo'}, true);