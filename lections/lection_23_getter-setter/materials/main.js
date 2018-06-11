console.log('Lection_23');

// var obj = {
//     x: 10,
//     y: 20,

//     get foo(){
//         console.log('foo called');

//         return this.x + this.y;
//     },

//     set foo(value){
//         console.log('set to foo');

//         this.y += value;
//     }
// }

// obj.z = obj.foo;
// obj.foo = 40;
// obj.q = obj.foo;

// console.log(obj);


// --------------


// var math = {
//     result: null,
//     strSource: `Vasya,Ivanov`,

//     get str(){
//         return this.strSource;
//     },

//     set str(data) {
//         this.strSource = `${data.name},${data.sname}`;
//     },


//     set mul(value){
//         this.result *= value;

//         console.log(this.result);
//     },

//     set sum(value){
//         this.result += value;

//         console.log(this.result);
//     },

//     get getValueAndReset(){
//         var data = this.result;
//         this.result = null;

//         return data;
//     }
// }


// console.log( math.str );

// math.str = {
//     name: 'Ivan',
//     sname: 'Petrov'
// };

// console.log( math.str );


// ----------------

// const obj = {
//     x: 10,
//     y: 30
// }

// // obj.k = 30;
// var desc = {
//     value: 200,
//     writable: false,
//     configurable: false,
//     enumerable: false
// };

// Object.defineProperty(obj, 'z', desc);

// console.log(obj);


// ----------------

const obj = {
    x: 10,
    y: 30
}

// obj.k = 30;
var desc = {
    configurable: false,
    enumerable: false,
    get(){
        return 'HI!';
    },
    set(value) {
        this.p = value * 4;
    }
};

Object.defineProperty(obj, 'z', desc);
obj.z = 400;
console.log(obj);

// ----------------