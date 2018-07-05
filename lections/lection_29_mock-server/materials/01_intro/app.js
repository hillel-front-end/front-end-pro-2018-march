const post = require('./post');
const enL10N = require('./en');

const fs = require('fs');

console.log('APP!');

console.log(enL10N);

const post1 = new post.Post(enL10N.title1);
const post2 = new post.Post(enL10N.title2);

post1.showTitle();
post2.showTitle();
