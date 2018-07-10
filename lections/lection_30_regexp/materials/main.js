console.log('lection_30');

// var regexp = /шаблон/;
// var regexp = /шаблон/;

// //search
// str = `9860 шаблон проектированияшаблон`;
// console.log(str.search(regexp));

// match
// var result = str.match(/шаблон/i);
// console.log(result)

// //match /g
// result = str.match(/шаблон/gi);
// console.log(result);

// //split
// console.log('12-34-56'.split('-'));

// // split examples
// console.log('132sdkf123123alfknadskljfn123'.split(/-/));

// //replace
// console.log('12-34-56'.replace( /-/g, ":" ));
// -----------------
// str = `привет мир8 мирL /hello//. * [ ] ( ) пока мир? мир_ привет мир&`;

// var res = str.match(/мир[!?_&0-9a-zA-Z]?/g);
// console.log(res);


// str = `asd asd a https://google.com 123123 `;
// console.log(str.match(/http(s)?:\/\//g));

// console.log(str.match(/\bhttps?:\/\/[0-9a-zA-Z.]{1,255}(:\d{4})?\b/g));
// //--------------------------

// str = `hello!!??!?!?!?!??!`;

// // ?
// console.log(str.match(/hello!?/g));
// console.log(str.match(/hello!{0,1}/g));

// // +
// console.log(str.match(/hello!+/g));
// console.log(str.match(/hello!{1,}/g));

// // *
// console.log(str.match(/hello!*/g));
// console.log(str.match(/hello[!?*]{0,}/g));


img = 'jhhkad sj <img src="./foo.jpg" alt="foo"/> asljfl;a,s;lf ;l,as l;asd '

// console.log(img.match(/<img.+\/?>/g));
console.log(img.match(/<img(([a-zA-Z]+=".+")|\s)+\/?>/g));