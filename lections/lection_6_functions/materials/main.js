console.log('Lection_6');


// h = 10;

// for (i = 0; i <= h; i++) {
//     for(j = 1; j <= h*5; j++) {
//         if (j == h*2 - i || j == h*2 + i) {
//             document.write('*');
//         } else {
//             document.write('&nbsp;');
//         }
//     }

//     document.write('<br />');
// }

// for (i = h; i >= 0; i--) {
//     for(j = 1; j <= h*5; j++) {
//         if (j == h*2 - i || j == h*2 + i) {
//             document.write('*');
//         } else {
//             document.write('&nbsp;');
//         }
//     }
    
//     document.write('<br />');
// }


// ------------------------

// arr = [1, 8, 4, 4, 9, 3, 9];


for(i = 0; i < arr.length/2; i++){
    swap = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = swap;
}

// console.log(arr);

// for(i = arr.length-1; i >= 0; i--){
//     console.log(arr[i]);
// }

// console.log(arr.reverse());


// ------------------------

// // declaration
// function doIt() {
//     // тело функции
//     x = 10;

//     console.log(x * 20);

//     x++;
// }

// // console.log(x);
// doIt();

// console.log(x);


// ------------------------


// f1();
// f2();
// function declaration
// function f1() {
//     console.log('f1');
// }

// // function expression
// f2 = function(){
//     console.log('f2');
// }

// f1();
// f2();



// ------------------------
// function renderArray(arr, arr2) {
//     for(i = 0; i < arr2.length; i++){
//         arr.push(arr2[i]);
//     }
// }

// A = [2,8,4,5];
// renderArray(A, [8,9,4,4,25,8]);
// console.log(A);

// ------------------------

function Sum(arr, arr2) {
    var sum = 0, i;

    if (!arr || !arr2) {
        console.error('низя');
        return;
    }

    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    for(i = 0; i < arr2.length; i++){
        sum += arr2[i];
    }

    return sum;
    console.log('jhanflasmflkasmf');
}

// res = Sum([8, 9], [1, 0, 2]);

// console.log(res);


// ------------------------

// function sum(a, b) {
//     return a + b;
// }

// function div(a, b) {
//     return a / b;
// }

// x = +prompt('x');
// action = prompt('+ or /');
// y = +prompt('y');
// res = 0;

// if (action == '+') {
//     res = sum(x, y);
// } else if (action == '/'){
//     res = div(x, y);
// }

// console.log(res);


// ------------------------

x = +prompt('x');
action = prompt('+ or /');
y = +prompt('y');


result = doMath(x, action, y);
console.log(result);



function doMath(a, sign, b) {
    console.log(a, sign, b);

    if (sign == '+') {
        return a + b;
    }

    if (sign == '-') {
        return a - b;
    }

    if (sign == '*') {
        return a * b;
    }
}
