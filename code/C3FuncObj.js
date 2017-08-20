
// 对象的属性是一个函数

var x = { 
    name: 'zhangsan',
    age: 25, 
    male: true,
    selfIntro: function() {
        console.log('我叫'+this.name+',今年'+this.age+'岁，性别'+(this.male?'男':'女'));
    },
    sayHi: function() {
        console.log("Hello, World");
    },
    parents: [
        {'name': 'wangyi', 'age': 42},
        {name: 'maliu', 'age': 40}
    ]
};

console.log(x.selfIntro); // 打印出函数
x.selfIntro();
x.sayHi();


// 返回对象的函数
console.log('-------返回对象的函数-------');

function Person() {
    return {'name': 'zhangsan', 'age': 25, 'male': true};
};

var p1 = Person();
var p2 = Person();
console.log(p1);
console.log(p1==p2);


function Person2(name, age, male) {
    return {'name': name, 'age': age, 'male': male};
};

var p2_1 = Person2('zhangsan', 25, true);
var p2_2 = Person2('lisi', 27, false);

console.log(p2_1);
console.log(p2_2);



// 对象的属性是一个函数

var x = { 
    name: 'zhangsan',
    age: 25, 
    male: true,
    selfIntro: function() {
        console.log('我叫'+this.name+',今年'+this.age+'岁，性别'+(this.male?'男':'女'));
    },
    sayHi: function() {
        console.log("Hello, World");
    },
    parents: [
        {'name': 'wangyi', 'age': 42},
        {name: 'maliu', 'age': 40}
    ]
};

console.log(x.selfIntro); // 打印出函数
x.selfIntro();
x.sayHi();


// 返回对象的函数
console.log('-------返回对象的函数-------');

function Person() {
    return {'name': 'zhangsan', 'age': 25, 'male': true};
};

var p1 = Person();
var p2 = Person();
console.log(p1);
console.log(p1==p2);


function Person2(name, age, male) {
    return {'name': name, 'age': age, 'male': male};
};

var p2_1 = Person2('zhangsan', 25, true);
var p2_2 = Person2('lisi', 27, false);

console.log(p2_1);
console.log(p2_2);


// 返回函数的函数
function Person3(n, a, m) {
    var name = n;
    var age = a;  // 定义局部变量（函数内的）
    var male = m;
    
    return function() { // 函数的返回值是一个匿名函数
        return '我叫'+name+',今年'+age+'岁，性别'+(male?'男':'女');
    };
};

var p3_1 = Person3('chenliu', 36, true);
console.log(p3_1());


// 函数嵌套

function PersonOuter(n, a, m) {
    var name = n;
    var age = a;  // 定义局部变量（函数内的）
    var male = m;
    
    function PersonInner() { // 函数的返回值是一个匿名函数
        return '我叫'+name+',今年'+age+'岁，性别'+(male?'男':'女');
    };

    return PersonInner;
};

var innerFunc = PersonOuter('chenliu', 36, true);
console.log(innerFunc());

