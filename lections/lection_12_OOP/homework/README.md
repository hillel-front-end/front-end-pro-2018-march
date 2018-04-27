# Изучить материал

* https://learn.javascript.ru/prototype
* https://learn.javascript.ru/new-prototype
* https://learn.javascript.ru/native-prototypes
* https://learn.javascript.ru/classes

# Практика

Создать игру:
    
    Есть поле field, является экземпляром класса Field(width, height), предпочитаемые размеры 10 на 10.
    
    Есть герой person, класс Person(name, XPosition, YPosition)


    Поле являет собой двумерный массив, который состоит из нулей. Там где находится наш герой - стоит 1.

    Field имеет такие методы: 
        * renderField() - выводит поле в document, устанавливает разделители `<hr />` сверху и снизу
        * clearField() - убирает героя с доски
        * changeSize(newX, newY) - меняет размер поля
    
    Person имеет такие методы:
        * start() - герой появляется на доске
        * go(direction, step) - движение по пережаном параметру (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step
        * resetPosition() - перенос в начальную позицию


Нужно самим решить какие методы получают аргументы, какие нет. Организовывать код можно любым образом.

Вызов методов происходит из консоли.


Суть такая: 

    field.renderField();
    person.start();
    person.go('left', 2);
    person.go('top', 1);
    field.renderField();

последовательно вызываются команды, renderField - отображает новую доску в document. В результате мы должны увидеть 2 нарисованных состояния поля.


# Лекция

1) Создать класс `SuperArray(n, m, { min: 10, max: 55 })`.

2) Создать метод `render(separator)`, в прототипе. Который выведет двумерный массив в документ. С разделителем `separator`, под массивом.

3) Создать метод `clear(direction, k)`, где `direction` может быть `"row"` или `"column"`, а `k` - номер строки или столбца, который нужно очистить. (поставить 0)

4) Создать Метод `setMarker({ x: 6, y: 9 })`, который устанавливает маркер `"&"` в в переданную точку.

5) Создать метод `goTo({ x: 2, y: 4  })`, маркер передвигается в указанную точку.

6) Создать метод `shift(direction)`, где `direction` может иметь значение `"left", "right", "top", "bottom"`, и маркер сдвинется в указанную сторону на 1 шаг.
