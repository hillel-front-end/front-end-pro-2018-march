// 1. ![Иллюстрация к проекту](task_1.png)

// прямоугольник

m = 10;
star = '*';
space = '';
last = '**';

document.write('прямоугольник<br />');

       
for (i=1; i<m -1; i++ ){
    space += '&nbsp;'
    document.write(star);
}
document.write(last);
document.write('<br/>');
for (i = 0; i<m; i++){
    if(i>0 && i< m-1){
        document.write(star);
        document.write(space);
        document.write(star);        
        document.write('<br/>');
        

    }
}
for (i=1; i<m - 1; i++){
    document.write(star);
}
document.write(last);
document.write('<br/>');


// прямоугольный треугольник
m = 10;
star = '*';
space = '';
last = '**';

document.write('<br/>прямоугольный треугольник<br />');

document.write('*<br />');
for (i = 1; i < m; i++) {
    document.write('*');
    document.write(space);
    document.write('*<br />');
    space += '&nbsp;'

    last+= '*';
}
document.write(last);
document.write('<br/>');

// равносторонний треугольник

// m = 11;
// star = '*';
// space = '';
// last = '**';
// middle = parseInt(m/2)
// document.write('<br/>равносторонний треугольник<br />');

// document.write('*<br />');
// for (i = 1; i < middle; i++) {
//     document.write('*');
//     document.write(space);
//     document.write('*<br />');
//     space += '&nbsp;'
// }
// // херь какая-то
// for (i = middle; i > 0; i--) {
//     document.write('*');
//     document.write(space);
   
//     document.write('*<br />');
//     // space += '&nbsp;'
// }


// 2. a и b вводятся с клавиатуры (числа). 
// Каждое число от a до b вывести в квадрате с сохранением знака.

//         -3, -2, -1, 0, 1, 2 
//             -> 
//         -9, -4, -1, 0, 1, 4 
document.write('a и b вводятся с клавиатуры (числа).<br/>Каждое число от a до b вывести в квадрате с сохранением знака.<br/>')


pow = '';
do {
    a = +prompt('Введите число а:')
} while( isNaN(a) )
do {
    b = +prompt('Введите число b:')
} while( isNaN(a) )

if(a < b){
    for(i = a; i <= b; i++){
        i<0 ? document.write(-i*i + ', ') : document.write(i*i + ', ') ;
        
    }
} else {
    for(i = a; i <= b; i--){
        i>0 ? document.write(i*i + ', ') : document.write(-i*i + ', ') ;        
    }
}


// 3.  Дано `a = 1, b = 15;`. Вывести на экран таблицу, которая будет состоять из 2-ух рядков.
//     В 1-ом рядке - нечетные числа: `13579111315`, в 2-ом - четные: `2468101214`

// 4.  Ввести с клавиатуры числа `x, y` (заставить пользователя ввести числа). 
//     Запустить цикл перебора от `x` до `y` (вне зависимости от значений)!. 
//     Посчитать сумму парных чисел если `x > y`, непарных если `x < y`;