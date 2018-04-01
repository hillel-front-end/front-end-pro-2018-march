// # Практика

// 1) Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
// Например A = [23,1,2,52,5,34,23,6,246,436];
// 

n = 14;
arr = new Array(n);

document.write('Исходный массив arr : <br />');

for (i=0; i < arr.length; i++){
    arr[i] = Math.floor(Math.random()*10 );
    document.write(arr[i] +', ');
}    
document.write('<br />');

//     2. найти максимальное число и минимальное число. 
document.write('2. найти максимальное число и минимальное число.  <br />');

min = arr[0]
max = arr[0]

minPosI  = maxPosI =0;

for (i=0; i < arr.length; i++){
    if (arr[i] <= min ) {
        min = arr[i];
        minPosI = i;
    }
    if (arr[i] >= max){
        max = arr[i];
        maxPosI = i;
    }
}

document.write('min = ' + min + ', max = ' + max + '<br />')

//     1. проверить все числа на простоту, и найденные простые числа сохранить в массив B.
document.write('1. проверить все числа на простоту, и найденные простые числа сохранить в массив B. <br/>')

B = new Array();
for (i=0; i< arr.length; i++){
    // n > 1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
    var n = arr[i];

    is_prime = true;

    for (denominator=2; denominator<n; denominator++){
        if (n % denominator == 0){
            is_prime = false;
            break
        }
    }
    if ( is_prime) {
        B.push(n) ;     
    }
}
document.write(' массив B простых чисел :' + B + ' <br />');




// 2) Элементы массива между min -- max записать в массив B. Массив взять из 1го задания
B = new Array();

if (minPosI < maxPosI) {
    B = arr.slice(minPosI-1, maxPosI)
} else {
    B = arr.slice(maxPosI-1, minPosI)

}
document.write(' 2)  Элементы массива между min -- max: <br />', B)



// 3) В массиве A поменять местами min и max. Массив взять из 2го задания
document.write('<br / > 3) В массиве A поменять местами min и max. Массив взять из 2го задания: <br/>')

min = B[0]
max = B[0]
temp = 0
for (i=0; i < B.length; i++){
    if( B[i]<= min){
        min = B[i]
        minPosI = i;
    }
    if ( B[i]>=max){
        max= B[i]
        maxPosI =i
    }
}
temp = B[minPosI];
B[minPosI] = B[maxPosI]
B[maxPosI] = temp;
document.write(B)


// #

// 4) Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1.
// Нельзя использовать стандартный метод reverse(). 
// Постарайтесь не использовать дополнительный массив. Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).

// #
document.write('<br /> 4) Перевернуть массив <br />')
arr2 = [1,2,3,4,5,6,7,8,9]
temp = 0;
for (i=0; i< Math.floor(arr2.length/2) ; i++){
    temp = arr2[i];
    arr2[i] = arr2[arr2.length-i-1];
    arr2[arr2.length-i-1] = temp;
}
document.write(arr2)


// 5) Определить количество элементов в заданном массиве, отличающихся от минимального на 5.

document.write('<br />5) Определить количество элементов в заданном массиве, отличающихся от минимального на 5.')

min = arr[0]
counter  =0;

for (i=0; i < arr.length; i++){
    if (arr[i] <= min ) {
        min = arr[i];
    }
}
document.write('min=' + min)
for (i=0; i < arr.length; i++){
    if (arr[i] >= min -5 && arr[i] <= min + 5) {
        counter++;
    }
}
document.write('<br /> количество элементов в заданном массиве, отличающихся от минимального ('+min +  ') на 5 - ' + counter)