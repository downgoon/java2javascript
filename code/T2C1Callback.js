// 同步常用风格：直接返回结果
function sumReturn (x,y) {
    var z = x + y;
    return z;
}

var sum = sumReturn(5, 7);
console.log('同步风格加和结果：' + sum);

// 异步常用风格：结果不返回，而回调
function sumCallback(x, y, callback) {
    var z = x + y;
    callback(z);
}

sumCallback(5, 7, function(sum) {
    console.log('异步风格加和结果：' + sum);
});

