
// 无输入，无输出

function f_in0_ou0() {
    console.log('无输入，无输出');
}

f_in0_ou0();

// 无输入，有输出

function f_in0_ou1() {
    return 'helloworld';
}

console.log('无输入，有输出: ' + f_in0_ou1());

// 有输入，有输出

function f_in1_ou1(x) {
    return x.length;
}

console.log('有输入，有输出: ' + f_in1_ou1('hello'));

// 有输入，无输出

function f_in0_ou1() {
    return Math.random();
}

console.log('无输入，有输出: ' + f_in0_ou1());