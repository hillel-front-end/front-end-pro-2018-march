// 1. Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры

do {
    n = +prompt()
} while(isNaN(n))

prev = 0;
fib = 1;
next = 1;

if(n>0){
    for(i=0; i<n; i++){
        document.write(prev + ', ')
        next = prev + fib;
        prev = fib;                     
        fib = next;
    }
}else(
    document.write('error')
)
