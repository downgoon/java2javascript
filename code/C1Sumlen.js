/**
* 如何运行我？
*  方式-1： node C1Sumlen.js
*  方式-2： 访问 jstest.html，可以用浏览器，也可以 http-server (node模块)
*/

function sumlen(x, y) {
    return x.length + y.length;
}

var sl = sumlen("hello", 'world');
console.log(sl);
