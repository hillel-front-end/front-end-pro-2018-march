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

m = 11;
star = '*';
space = '';
last = '**';
middle = parseInt(m/2)
document.write('<br/>равносторонний треугольник<br />');

// for (j=0; j < middle; j++){
//     for (i = 0; i < m; i++) {
//         document.write('&nbsp;');
//         if(j == middle){
//             document.write('*');
//             middle--;
            
//         } else {
//             space += '&nbsp;'
//             document.write(space);
//             document.write('*<br />');
//         }
    
//     }
// }

// document.write('*<br />');

// ромб 