// var a = 20; //local == global

// b = 30; // global

// console.log(window);
// // f4();
// f1();
// f4();
// // f3();

// // console.log(y);

// function f1() {
//     var y = 400;

//     bbbb = 1000;

//     b += y;

//     console.log(y);
//     f3();
    

//     function f3() { // local function
//         var x = 200;

//         console.log(x, y, 'b=', b);
//     }

//     f4 = function(){
//         console.log('f4');
//     }

//     // f4();
// }

// function f2() {
    
// }

// f4();

// ------------------





k = 20;
f1(8, 3);

function f1(a, b) {
    var x = 10,
        y = 230,
        p = 'HELLO'

    f2(x + 3);


    function f2(x) {
        var z = 10;

        f3();
        console.log('x=', x); // f2.LE
        console.log('z=', z); // f2.LE
        console.log('y=', y); // f1.LE, closure
        console.log('k=', k); // global, window.k
        console.log('p=', p);


        function f3() {
            console.log(p);

            debugger;
        }

        
    }
}

// x = 20;

// function f2(y) {
//     var x = 10;

//     return f1(y);
// }

// function f0(x){

//     x = 400;
//     window.x = 300;

//     return f1(x*2);


//     function f1(y) {
//         return x + y;
//     }
    
//     debugger;
// }

// var res = f0(5);

// console.log(res);