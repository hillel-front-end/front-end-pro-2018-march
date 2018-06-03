var p1 = Promise.resolve(3);
var p2 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(200);
    }, 5000);
  }); ;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "foo");
}); 

Promise.all([p1, p2, p3])
    .then(function (values){ 
        console.log(values); 
    },
    function(values){
        console.log(values);
    });
    // .catch(function(values){
    //     console.log(values);
    // });
