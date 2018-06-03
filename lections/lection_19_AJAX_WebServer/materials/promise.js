

new Promise(function(resolve, reject){
    var total = 4;

    resolve(total);
    // reject();
})
.then(function(count){
    console.log('Лекция началась', count);

    return new Promise(function(resolve, reject){
        if (count > 5) {
            resolve();
        }

        reject(true);
    });
}, function(){ 
    return new Promise(function(resolve, reject){
        console.log('Лекция не состоялась');
        reject(false);
    })
 })
.then(function(){
    console.log('Лекция закончилась');
}, function(status){
    return new Promise(function(resolve, reject){
        if (status) {
            console.log('Лекция все таки не началась, потому что <5');
        }

        reject();
    });
})
.then(function(){
    console.log('получили домашку');
}, function(){});