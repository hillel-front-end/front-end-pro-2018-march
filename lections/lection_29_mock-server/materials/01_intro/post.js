console.log('---Post.js Start----');

function Post(title) {
    this.title = title;
}

function Foo() {
    console.log('foo');
}

Post.prototype.showTitle = function () {
    console.log('This title: ' + this.title);
};

module.exports =  { Post, Foo };
console.log('===Post.js Finish====');
