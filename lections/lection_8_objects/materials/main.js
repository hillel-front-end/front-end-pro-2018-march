console.log('Lection 8');

// + Ассоциированные массивы
// + Обьекты основы
// + Свойства обьектов, методы обьектов
// + Вложенные обьекты
// + Перебор обьекта(for in), манипуляции свойствами, оператор delete


// блок инициализации
// var obj = {
//     x: 10,
//     name: 'Vasya',
//     bla: false
// };

// obj.name += ' hello!'
// obj.z = 200;

// // obj.bla = undefined;
// // delete obj.bla;

// console.log(obj.z);
// console.log(obj);
// console.log(obj.name);

// через конструктор

// var obj = new Object(); // {}

// obj.x = 10;
// obj.name = 'Vasya';


// --------------------------------------


// var obj = {
//     sum: sum // функция описана внутри объекта -> метод
// }


// function sum(a, b, c){
//     return a+b+c;
// }


// console.log(obj.sum(1, 8, 9));


// ---------------------------------

// var data = {
//     p1: 10,
//     p3: [2,8,4,4,36,34],
//     p4: false,
//     p5: {
//         p11: 987234,
//         p22: 'Hello!!'
//     },
//     p2: 'Name'
    
// }

// var item;
// for(var key in data) {
//     item = data[key];
    
//     console.log('data.' + key + " = " + item);
// }


// var arr = [2,7,4,67];

// arr[20] = 200;
// for(var key in arr) {
//     item = arr[key];
    
//     console.log(key + " = " + item);
// }

// for(var i = 0; i < arr.length; i++){
//     console.log(i);
// }



// for(var value of [2,8,9,4]) {
//     console.log(value);
// }


// -------------------------------

// var data = {
//     x: 10,
//     in: {
//         y: 30,
//         foo: 20
//     },
//     ln: {
//         e: 200,
//         p: 67
//     },
//     foo: '123123'
// }

// var newData = convert(data);
// convertWithSource(data);


// function convert(source){
//     var newObj = {};

//     for(var key in source){
//         if (typeof source[key] == 'object') {
//             var innerSource = source[key];

//             for(var innerKey in innerSource){
//                 newObj[innerKey] = innerSource[innerKey];
//             }
//         } 
//         else {
//             if (!newObj[key]) {
//                 newObj[key] = source[key];
//             }
//         }
//     }

//     return newObj;
// }

function convertWithSource(source){ // source = arguments[0]
    for(var key in source){
        if (typeof source[key] == 'object') {
            var innerSource = source[key];

            for(var innerKey in innerSource){
                source[innerKey] = innerSource[innerKey];
            }

            delete source[key];
        }
    }
}

// -------------------------------


// var obj = {
//     x: 10,
//     y: 20
// }

// var newObj = obj;

// console.log(obj, newObj);

// obj.y += 40;

// console.log(obj, newObj);
// console.log(obj === newObj);

//-------------------------------

// var y = 10;
// var x = y;

// x++;

// console.log(x, y)