console.log('Lection_7');


// ------------------------------
// function f1() {
//     var args = arguments;
//     // console.log(a, b);
//     console.log(args);
//     var sum = 0;


//     for(var i = 0; i < args.length; i++){
//         sum += args[i];
//     }

//     return sum;
// }

// f1(2, 9, 2,9,3,4,53);


// ------------------------------
// d = 20;

// function factory(x) {
//     var z = x * 5;

//     return function(y){
//         return x + y + d;
//     };
// }


// var sum = factory(7);

// console.log( sum(10) );

// ------------------------------

function factory(arr) {
    var i = 0;

    return function(callback, arr){
        if (arr[i] && callback) {
            return callback(arr[i++]);
        } else if (arr[i] && !callback) {
            return arr[i++];
        } else{
            return console.error('end');
        }
        
    }
}

// var step = factory([8,9,4,5]);

// console.log(step(function(x){ return x+x; }));
// console.log(step(f1));
// console.log(step(f2));

// function f1(k) {
//     return k*2;
// }

// function f2(p) {
//     return 'p=' + p;
// }

// ------------------------------

function getMax(arr) {
    var max = arr[0];

    for(var i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function getMaxs() {
    // console.log(arguments);
    var res = '';

   for(var i = 0; i < arguments.length; i++){
       res += getMax(arguments[i])

       if (i < arguments.length - 1) {
           res += ', ';
       }
   }


    return res;
}




var result = getMaxs([1, 8, 9], [6, 8, 2], [2, 18, -2]);

console.log(result);

