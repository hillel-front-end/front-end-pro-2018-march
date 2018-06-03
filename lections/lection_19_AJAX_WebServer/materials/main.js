console.log('Lection_19');


// Ajax


// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if (xhr.readyState != 4) {
//         return;
//     }

//     doIt(xhr.responseText);
// }

// xhr.open('GET', '/data.json', true);

// xhr.send();


// function doIt(data) {
//     console.log(JSON.parse(data));
// }


// ----------------------------------



var promise = new Promise(function(resolve, reject){
    var x = Math.random()*20-10;
    setTimeout(function(){
        console.log(1);
        if (x < 0) {
            reject({
                success: false,
                value: x
            });
        }
        
        resolve(x);
    }, 500);

});


promise
    .then(onResolve, onReject)
    .then(function(data){
        console.log(3, 'resolve', data);
    },
    function(data){
        console.log(3, 'reject', data);
    })


// function onResolve(data){
//     console.log(2, 'resolve', data);

//     return data;
// }

// function onReject(data){
//     console.log(2, 'reject', data);

//     return new Promise(function(resolve, reject){
//         reject(data);
//     });
// }

// promise
//     .then(function(){
//         console.log(22);
//     })
//     .then(function(){
//         console.log(33);
//     });


// ----------------------------------



var requestAsync = new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', '/data.json', true);
    xhr.send();

    xhr.onreadystatechange = function(){
        if (xhr.readyState != 4) {
            return;
        }
        
        if (xhr.status != 200 || xhr.responseText == '{}') {
            reject(xhr);
        } else {
            resolve(JSON.parse(xhr.responseText));
        }
    }
});





requestAsync
    .then(function(response){
        console.log(response);

        return response;
    })
    .then(function(response){
        console.log(response);

        return response;
    })
    .then(function(response){
        console.log(response);

        return response;
    })
    .catch(function(error){
        console.log('error', error);
    });
