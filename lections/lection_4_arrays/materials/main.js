console.log('Lection_4');


// arr = [];

// arr = [1, 8, 5, 2];
// arr[10] = false;

// console.log(arr[7]);


// B = new Array(4,7,8,3);
// console.log(B);



// marks = [3,5,4,3,4,5,4,5,4,3];

// for(i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

// var sum = 0;

// for(i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
//     if (marks[i] % 2) {
//         continue;
//     }
//     // if (marks[i] % 2 == 0) {
//     //     sum += marks[i];
//     // }

//     sum += marks[i];
// }

// sarr = sum / marks.length;

// l = 4;
// indexes = [];

// for(i = 0; i < marks.length; i++) {
//     if (marks[i] == l ) {
//         indexes[indexes.length] = i;
//     }
// }



// arr = [-11,7,8,-4,7,3,4,5];

// min = max = arr[0];
// minPos = maxPos = 0;

// for(i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

//     if (arr[i] < min) {
//         min = arr[i];
//         minPos = i;
//     }

//     if (arr[i] > max) {
//         max = arr[i];
//         maxPos = i;
//     }
// }

// console.log(arr);
// console.log(min, max, minPos, maxPos);

// list = [];

// do {
//     val = prompt(); 

//     if(val == '!'){
//         break;
//     }

//     list[list.length] = val;
// } while(true);

// for(;true;) {
//     val = prompt(); 

//     if(val == '!'){
//         break;
//     }

//     list[list.length] = val;
// }

// console.log(list);


n = 10;
m = 20;
A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}
console.log(A);
// --- fill
for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*90) + 10;
        document.write(A[i][j] + ' ');
    }
    document.write('<br />');
}
// ----
max = A[0][0];
imax = 0;
jmax = 0;
for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        if (A[i][j] > max) {
            max = A[i][j];
            imax = i;
            jmax = j;
        }
    }
}

console.log(max);


sum = 0;

for(i = 0; i < A.length; i+=2){
    // if (i % 2 == 0) {
        for(j = 0; j < A[i].length; j++){
            sum+= A[i][j];
        }     
    // }
}
console.log(sum);


