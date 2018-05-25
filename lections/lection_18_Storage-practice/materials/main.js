console.log('Lection_18');


var json = `{ 
    "name": "vasya", 
    "age": 20,
    "list": [2, 7, 8, true]
}`;


var obj = JSON.parse(json);

console.log(obj);


var list = {
    a: 10,
    b: false,
    name: "vasya",
    c: [21,242]
}

var data = JSON.stringify(list);
console.log(data);


// ----------------------



// localStorage.x = 10;
// localStorage['z'] = false;
// localStorage.setItem('f', 205);

// delete localStorage.x;
// localStorage.y = undefined;
// localStorage.removeItem('y');

console.log(localStorage);

