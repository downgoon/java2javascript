// 带名函数
function sumlen(x, y) {
    return x.length + y.length;
};

var f = sumlen;

console.log('按函数名称调用： ' + sumlen('hello', 'world'));
console.log('按函数指针调用： ' + f('hello', 'world'));

console.log('按函数指针调用（加一个优先运算符）： ' + (f)('hello', 'world'));
console.log('按函数指针调用（再加一个优先运算符）： ' + ((f))('hello', 'world'));

// 匿名函数

var g = function (x, y) {
    return x.length + y.length;
}

console.log('匿名函数： ' + g('hello', 'world'));


// 匿名函数的立即调用

(function (x, y) {
    console.log('匿名函数的立即调用：' + x + ',' + y);
    return x.length + y.length;
})('hello', 'world');


(function() {
    console.log('不带参数的匿名函数的立即调用');
})();

