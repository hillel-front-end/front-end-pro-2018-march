console.log('Lection_5');
// arr = [1,8,4,4,3];
// document.write('<ul><li>' + arr.join('</li><li>') +'</li></ul>');


// arr = [1,7,4,5,6, 12];

// pos = Math.ceil(arr.length / 2) - 1;

// if (arr.length % 2 == 0) {
//     arr.splice(pos, 2)
// } else {
//     arr.splice(pos, 1)
// }   

// console.log(arr);
// arr = [];
// do {
//     value = prompt();
//     if (value == '&') {
//         break;
//     }

//     arr.unshift(value);
// } while(true);



// n = 60;
// A = new Array(n);

// center = n / 2;

// R = 10;
// R2 = 4;

// for(i = 0; i < A.length; i++){
//     A[i] = new Array(n);
// }
// console.log(A);
// // --- fill
// for(i = 0; i < A.length; i++){
//     for(j = 0; j < A[i].length; j++){


//         // if (i + j <= n - 1 && i <= center) {
//         //     A[i][j] = 1;
//         // } else if (i >= j+center || 
//         //     (i + j <= n - 1 + center && 
//         //         i >= center && 
//         //         j >= center) ) {
//         //     A[i][j] = 2;
//         // } else {
//         //     A[i][j] = 0;
//         // }

//         if (Math.pow(i - center, 2) + Math.pow(j - center, 2) < R*R && 
//         Math.pow(i - center, 2) + Math.pow(j - center, 2) > R2*R2) {
//             A[i][j] = '*';
//         } else{
//             A[i][j] = '&nbsp;';
//         }
        
//         document.write(A[i][j] + ' ');
//     }
//     document.write('<br />');
// }




// ---------------

n = 20;
A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(n);
}
// console.log(A);
// --- fill
for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*81 - 42);

        document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}

// task

min = A[0][0];
minI = minJ = 0;

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        if(A[i][j] <= min){
            min = A[i][j];
            minI = i;
            minJ = j;
        }
    }
}

console.log(min);
// swap
buffer = A[minI][minJ];
A[minI][minJ] = A[0][0];
A[0][0] = buffer;

console.log(A);