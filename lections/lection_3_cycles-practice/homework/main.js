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
last = '****';
middle = parseInt(m/2);
k=0;

document.write('<br/>равносторонний треугольник<br />');

for (j=1; j <= m; j++){
    for (i = 1; i <= m; i++) {
        document.write('&nbsp');
        // рисуем среднюю звезду и уменьшаем среднее на один
        if(j == 1 && i == middle) {
            document.write(star);
            middle--;
        }
        if(i == middle) {
            document.write(star);
            middle--;
            space += '&nbsp'
            k++;
            last += star
        }
        if(i == middle + k ) {
            document.write(space);
            document.write(star);

        }
        if (middle == 0) {
            document.write(last)
            break
         }
    }
    if (middle == 0) {
        break
     }
    document.write('<br />');
}

document.write('<br /> <br />');



// ромб 

document.write('ромб: <br />');

m = 10;
star = '*';
space = '.';
last = '****';
middle = parseInt(m/2);

k=middle 

for (i=0; i <= m; i++){
    for (j = 0; j <= m; j++) {
        document.write('.');
        if(i == 0 && j == middle) {
            // рисуем среднюю звезду и уменьшаем среднее на один
            document.write(star);
            middle--;
        }
        if(j == middle) {
            document.write(star);
            document.write(space);
            document.write(star);
            space += '..'
            middle--;
            break
        }
    }
    document.write('<br />');
    if(middle == 0){
        break
    }
}

document.write('<br/>');

mid = 6;
k=mid;
for (i=0; i<m; i++){
    for (j=0; j<m; j++){
        document.write('.')        
        // document.write( 'i'+i + 'j'+ j + ' ')
        if(j == mid){
            document.write('*')
            mid--;
            k++;
        } 
        if(j == k) {
            document.write('*')
        }
    }
    document.write('<br/>')
}