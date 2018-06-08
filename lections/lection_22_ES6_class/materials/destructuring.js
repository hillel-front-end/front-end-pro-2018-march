console.log('Lection_22');



// var list = [2, 6, 9];

// var a = list[0];
// var b = list[1];
// var c = list[2];



// var [a, b, c, [d, e]] = [2, 6, true, ['1', '2']];
// console.log(a, b, c, d, e);

// console.log(a);
// // console.log(b);
// console.log(c);
// ----------------------------
// var obj = {
//     foo: 300
// }

// var { a, b, data: { b } } = { x: 20, u: 30, a: 10, b: obj, data: { b: 200 } };

// console.log(a, b);

//-------------------------------------------------


// function onLoad(response){
//     // var age = response.data.age;
//     // var list = response.list !== undefined ? response.list : ['default'];
//     // var name = response.data.name;

//     // if (!response.list) {
//     //     list = ['default']
//     // }

//     var { list = ['default'], data: { age, name } } = response;

//     console.log(age, name, list);
// }

// onLoad({
//     list: undefined,
//     age: 40,
//     data: {
//         length: 10,
//         name: 'asd',
//         age: 60
//     }
// });


// ----------------------------------

// var foo = () => {
//     return {
//         x: 20,
//         y: 30
//     };
// }

// var {x, y} = foo();



// ----------------------------------


// var list = [7, , 42, {
//     list: [
//         1, 2, 3
//     ],
//     key: 'key'
// }];
// var [a = 1, b = 2, c = 3, { list:[,d] }] = list;

// console.log(a, b, c, d); 


// -------------------------

// var {a, b = 500, c, d: [x = 'x500', y], e: { k, l }} = Object.assign({ a: 100 }, getValues());
// console.log(a, b, c, x, y, k, l);


// function getValues() {
//     return {
//         c: 30,
//         d: [80, 90],
//         e: { k: 100, l: 200 }
//     }
// }


// var list = [ 1, 2, 3 ];

// var buffer = list[0];
// list[0] = list[2];
// list[2] = buffer;
// console.log(list);
// [list[0], list[2]] = [list[2], list[0]]
// console.log(list);


// var [ a, , b ] = list;

// console.log(a, b);

// a = 10;
// b = 20;
// arr = [7,8,54,7,4];
// [ arr[0], arr[arr.length-1] ] = [ arr[arr.length-1], arr[0] ];

// console.log(a, b, arr);




var m1 = () => {
    return {
        list: [],
        a   : 10
    }
}

var m2 = () => {
    return {
        data: {
            str: 'hello',
            a: 100
        }
    }
}

var m3 = () => {
    return {
        b: 20
    }
}

var {a, b, data: {str, a}} = Object.assign(m1(), m2(), m3());

console.log(a, b, str);