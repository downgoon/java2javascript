function Person(n, a, m) {
    var name = n;
    var age = a;  // 定义局部变量（函数内的）
    var male = m;
    
    return function() { // 函数的返回值是一个匿名函数
        return '我叫'+name+',今年'+age+'岁，性别'+(male?'男':'女');
    };
};

var pSelfIntro = Person('chenliu', 36, true);
console.log(pSelfIntro());