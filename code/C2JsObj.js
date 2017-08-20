var x;
x = 3.14;
x = `helloworld`;
x = true;
x = function() {};
x = {'name': 'zhangsan', 'age': 25, 'male': true};
console.log(x);
console.log(x['name']);
console.log(x.name);

x = {name: 'zhangsan', age: 25, male: true};
console.log(x);
console.log(x['name']);
console.log(x.name);

x.edu = 'master';
console.log(x);


for (var f in x) {
    console.log(f);
}