/*

+ Глобальные обьекты Window, Document, Navigator, Location
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className

*/


window.onload = function(){
    // console.dir(document);

    // var block = document.getElementById("block");


    // block.title = "sdkhdbisbfijsif";
    
    // console.log(block.className);


    // setTimeout(function(){
    //     block.className += ' FOFO';
    // }, 2000);


    // console.dir(block);



    // -------------------------

    // var block2 = document.getElementsByClassName('item');

    // for(var i = 0; i < block2.length; i++){
    //     block2[i].className += " item_" + i;
    // }

    // console.log(block2);


    // -------------------------

    // var block2 = document.querySelector('#block'); // 1 element

    // console.log(block2);

    // -------------------------

    // var block2 = document.querySelectorAll('.item'); // collection
    // console.log(block2);

    // -------------------------

    // window.onload = function(){ code }

    var block = document.querySelector("#block");

    // block.className += " hidden"; // bad

    block.classList.add('hidden', 'fofo');
    // block.classList.remove('x-type', 'container');

    setInterval(function(){
        block.classList.toggle('check');
    }, 1000);

    console.log( block.classList.contains('container') );

    console.dir(block);

    setTimeout(function(){
        block.classList.add('animate');
    }, 2000);
}
