// var obj = {
//     x: 10,
//     f1: function(){
//         console.log('f1');
//     }
// }

// function getVal(a, b, c){
//     // this.f1();

//     return a + b - c + this.x;
// }

// var params = [7, 9, 2];
// var res = getVal.call(obj, 7, 9, 2);
// var res = getVal.apply(obj, params);


// bad

// var res = getVal.bind(obj)(7, 9, 2);

// var bindedGetVal = getVal.bind(obj);
// var res = bindedGetVal(7, 9, 2);

// console.log(res);


// function sum(){
//     // одалживание методов
//     var arr = [].slice.call(arguments, 0, 3);

//     console.log(arr);
//     // console.log([arguments[0], arguments[1], arguments[2]]);
// }

// sum(7, 5, 4, 8, 9 );



// --------------------------------------------------

// array methods

// var arr = [7, 8, 2, "asd", false, {x: 10}];

// for (var i = 0; i < arr.length; i++){
    // console.log(arr[i]); // item
    // i == pos
    // source == arr

    // continue;
    // break;
// }

// Array.prototype.foEach = function(callback){
//     for(var i = 0; i < this.length; i++){
//         callback(this[i], i, this);
//     }
// }

// forEach

// arr.forEach(function(item, pos, source){
//     // console.log(pos);
//     // console.log(source);
//     console.log(item);

//     // console.log(this);
//     return;
// });

// map


// var arr = [
//     { title: '', value: 1 }, 
//     { title: '', value: 4 }, 
//     { title: '', value: 10 }
// ];


// var arr = [
//         1,
//         4, 
//         19
//     ];

// var resArr = arr.map(function(item){
//     return {
//         title: '',
//         value: item
//     }
// });

// console.log(resArr);

// console.log( ['q23e', 'asssda', '945asfasfasf7'].map(function(item){
//     return item[0];
// }) );

// filter

// var arr = [8, 2, -4, 8, -9];

// var resArr = arr.filter(function(item, pos, source){
//     return item <= 0;
// });

// console.log(resArr);


// every/some

// var arr = [8, 2, -4, 1, -9];

// // var res = arr.every(function(item, pos, source){
// //     return typeof item == 'number';
// // });

// var res = arr.some(function(item, pos, source){
//     return typeof item == 'string';
// });

// console.log(res);


// reduce

var arr = [8, 2, false, '123', true,  {}];

// var sum = arr.reduce(function(prev){
//     return prev + item;
// }, 0);

// var resArr = arr.reduce(function(prev, item){
//     if (typeof item == 'number' || typeof item == 'boolean' ) {
//         prev.push(item);
//     }

//     return prev;
// }, []);

// console.log(resArr);


// var data = [
//     { title: '', val: 7},
//     { title: '', val: -17},
//     { title: '', val: 23},
//     { title: '', val: 108},
//     { title: '', val: 'yoo'}
// ];

// var result = data
//                 .map(function(item){
//                     return item.val;
//                 })
//                 .filter(function(item){
//                     return item > 0 && typeof item == 'number'
//                 });
    
// console.log(result);


// ------------------------

var obj = {
    id: '',
    name: 'fooo',
    value: 10
}


var myMehods = {
    setValueByProp: function(prop, value){
        this[prop] = value;
    },
    getValuesByType: function(type){
        // this magic
    }
} 

myMehods.setValueByProp.call(obj, 'id', 'BLABLA');
myMehods.setValueByProp.call(obj, 'value', [1,78,3,4,9]);