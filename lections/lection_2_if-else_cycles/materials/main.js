console.log("Lection_2");


// boolean

// true or false //  1 or 0

// a = 5;
// b = 10;

// console.log( a > b );
// console.log( a < b );
// console.log( a >= b );

// console.log( a <= b );

// console.log('a == b' , a == b );

// console.log('a != b' , a != b );
// console.log('a === b' , a === b );

//  // ---------------------------------

//  //   
//  console.log( 'b > 0 && b > a', b > 0 && b > a );

//  a = 5;
//  b = 10;
//  console.log( !( !a === 0 && a > b) && ( b < 10 || a > 0) );

// ---------------------------------

// условный оператор if(){}

// a = 10;

// if (a > 0) {
//     console.log('a > 0');

//     // console.log('a > 0!!');

//     // console.log('a > 0!!!!');
// }

// if ( a > 0 && a <= 10 ) {
//     console.log('a > 0 && a <= 10');
// }


// console.log('Hello!');


// ---------------------------------

// a = +prompt();

// console.log(typeof a);


// if (typeof a == 'string') {
//     console.log('a is string');
// }

// // if (a == NaN) {
// if(isNaN(a)){
//     console.log('is NaN')
// }


// ---------------------------------

// a = -5;
// if (a > 0) {
//     console.log('a > 0');
// } else {
//     console.log('a < 0');
// }


// ---------------------------------

// variable = 10;

// if (variable > 0) {
//     console.log(' > 0');
// } else {
//     console.log(' < 0');
// }

// // if (''){console.log('yes')}
// // if (0){console.log('yes')}
// // if (undefined){console.log('yes')}
// // if (null){console.log('yes')}
// str = prompt();
// a = 10;
// if (!a || !str) {
//     console.error('WHAAAAT!');
//     // location.reload();
// }

// x = +prompt();

// if (x < -5) {
//     y = x * x;
// } else if (x >= -5 && x <= 3) {
//     y = x - 2;
// } else {
//     y = (x-2) * x;
// }



// ---------------------------------


// цикл с предусловием
// i = 1;
// while (i < 10) { // условие выполнения цикла
//     // тело
//     i = i + 1;
//     console.log(i);
    
// }
// console.log('last', i);
// // цикл с пост условием

// i = 1;
// do { 
//     // тело

//     i = i + 1;
//     console.log(i);
    
// } while (i < 10);// условие выполнения цикла

// console.log('last', i);


// do { 
//     a = +prompt();
    
// } while (isNaN(a) || a < 0);// условие выполнения цикла



// for (i = 1, sum = 0; i <= 10; sum = sum + i, i++){
//     console.log(i);

//     // sum = sum + i;
// }

// console.log(sum)


a = 5;
n = 3;
res = 1;
for(i = 1; i <= n; i++){
    res = res * a;
}

console.log(res);


