# Изучить материал
+ https://learn.javascript.ru/call-apply
+ https://getinstance.info/articles/javascript/call-apply-and-bind-functions/
+ http://prgssr.ru/development/vvedenie-v-karrirovanie-v-javascript.html
+ https://learn.javascript.ru/array-iteration
+ https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array - выбераем слева интересующий метод (forEach, map)

# Практика

1) напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

        var characters = [
            { 'name': 'barney', 'age': 36 },
            { 'name': 'fred', 'age': 40 }
        ];

        console.log(pluck(characters, 'name')); // ['barney', 'fred']

2) напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

        var input = [1, 2, 3, 4, 5, 6];
        function isEven(x) { return x % 2 == 0; } // проверяет на четность
        console.log(filter(input, isEven)); // [2, 4, 6]
Функция не должна изменять исходный массив

3) Напиши функцию `count()`, считающую число свойств в объекте. Функция должна хранится в прототипе всех обьеков