# Изучить материал
+ https://nodejs.org/api/fs.html
+ https://ru.code-maven.com/reading-a-file-with-nodejs

# Практика

1) Реализовать mock-server
Структура API:
#
    /users
        /001
            get.json
                [{ "user": 1 }]
        /002
            get.json
                [{ "user": 2 }]
        /003
            get.json
                [{ "user": 3 }]
        /004
            get.json
                [{ "user": 4 }]
#

Реализовать запросы:
    
`/user/:userId` - вернет user по `id`

`/users` - вернет всех юзеров

`/users/:action`, где `action` может быть `last`, `first`, `all`

При структуре подобной выше:
    
    last -> [{"user": 4}]
    first -> [{"user": 1}]
    all -> [{"user": 1}, {"user": 2}, {"user": 3}, {"user": 4}]

