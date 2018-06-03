console.log('Lection_20');

function doAjax(method, url){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    
    return new Promise(function(resolve, reject){
        xhr.send();

        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200) {
                reject(xhr);
            }

            resolve(JSON.parse(xhr.responseText));
        }
    });
}

Promise
    .all([
        doAjax('GET', '/data.json'), 
        doAjax('GET', '/data2.json')
    ])
    .then(function(values){
        console.log(values);
    })
    .catch(function(values){
        console.error(values);
    });
    
// doAjax('GET', '/data.json')
//     .then(function(resp){
//         doAjax('GET', '/data2.json')
//             .then(function(resp2){
//                 console.log(resp, resp2);
//             });
//     });