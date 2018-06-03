# Изучить материал

+ https://learn.javascript.ru/promise
+ https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
+ https://medium.com/web-standards/%D0%BE%D0%B1%D0%B5%D1%89%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D0%BD%D0%BE%D0%B9-%D0%B2%D0%B5%D1%87%D0%B5%D1%80%D0%B8%D0%BD%D0%BA%D0%B8-b0ed209809ab

# Практика

1) Сделать метод doAjax(method, url), который возвращает промис с ответом.

```
doAjax('GET', '/data/info.json')
    .then(function(response){
        console.log(response);
    })
    .then()
    .then();

```

# Лекция

Есть 2 файлы `data.json` и `data2.json`. Сделать асинхронные запросы за файлами.
Структура данных описана в файле (см. в проект).
Найти пересечение множества описаных в первом и втором файле.