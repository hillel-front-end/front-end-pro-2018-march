const express = require('express');
const app = express();
let en = require('./en');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('Hello World!');
});

app.get('/users/', (req, res) => {
    let foo = 10;


    console.log(foo*2);
    res.send('Users!' + foo);
});

app.post('/users/', (req, res) => {
    let info = {
        success: true
    }
    if (typeof req.body.age != 'number') {
        info.success = false;
    }


    res.send({
        data: en,
        info
    });
});

app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000/')
});
