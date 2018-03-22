console.log('lection_3');


// i++, i--

var a = 10;

// console.log(a);
// a++;
// console.log(a);
// ++a;
// console.log(a);


// y = ( a++ + 10)*2;
// console.log(y, 'a=', a);
// console.log(a++);

// y = ( ++a + 10)*2;
// console.log(y, 'a=', a);
// console.log(a++);

// var i = 25;

// console.log(i--);
// console.log(i);
// console.log(--i);
// console.log(i);


// a = a + 10;
// a += 10;
// a -= 10;
// a *= 10;
// a /= 10;

// a = -12;
// b = 123;
// h = 10;
// sum = 0;

// for (i = a; i <= b; i += h) {
//     if (i < 0) {
//         continue;
//     }

//     console.log(i*i);
    

//     sum = sum + i;
//     // sum += i;

//     // // if (i > 50) {
//     // //     break;
//     // // }
//     // console.log(i);

//     // if (i > 0) {
//     //     continue;
//     // }

//     // console.log('i < 0');

    
// }

// console.log(sum, i);

// ---------------------------

// a = 10;
// if (a < 0) {
//     console.log('a < 0');
// } 
// else {
//     console.log('a > 0');
// }


// (a < 0) ? console.log('a < 0') : a == 0 ? console.log('a == 0') : console.log('a > 0');

// y = a < 0 ? Math.pow(a, 7) : a - 2;
// console.log(y);


// ---------------------------



// a = -13;
// b = 5;

// for(i = a; i <= b ; i++){
//     res = i*i;
//     // res *= i < 0 ? -1 : 1;

//     if (i < 0) {
//         res = -res;
//     }

//     console.log(res);
// }

// ---------------------------

// a = 1;
// b = 15;
// odd = '';
// even = '';

// // DO IT!

// for (i = a; i <=b; i++) {
//     i % 2 ? odd += i : even += i; 
// }


// document.write('<table border="1"><tr><td>');
// document.write(odd + '</td></tr><tr><td>' + even);
// document.write('</td></tr></table>');

// ---------------------------


// do {
//     x = +prompt('x=');
// } while(isNaN(x));

// do {
//     y = +prompt('y=');
// } while(isNaN(y));

// console.log(x, y);
// sum = 0;

// if (x < y) {
//     for(i = x; i <= y; i++){
//         if (i%2 != 0) {
//             sum += i;
//         }
//     }
// } else {
//     for(i = x; i >= y; i--){
//         if (i%2 == 0) {
//             sum += i;
//         }
//     }
// }

// console.log(sum);

m = 10;
separator = '*';
space = '';
last = '**';

document.write('*<br />');
for (i = 1; i < m; i++) {
    document.write('*');
    document.write(space);
    document.write('*<br />');
    space += '&nbsp;'

    last+= '*';
}
document.write(last);