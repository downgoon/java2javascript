var str = '{ "name": "Bob", "age": 23 }';
console.log('javascript object notation: %s', str);

var obj = { "name": "Bob", "age": 23 };
console.log('javascript object: %s', obj); // obj: [object Object]

var objText = JSON.stringify(obj);
console.log('object stringify: %s', objText);

console.log('get age from objText: %d', objText.age);
console.log('get age from obj: %d', obj.age);

var objRecovery = JSON.parse(objText);
console.log('get age from obj: %d', objRecovery.age);

var arr = { "resources": [{ "id": 1, "title": "json-server", "author": "typicode" }, { "id": 2, "title": "wanger", "author": "Alice" }] };
console.log("resources: %s", arr.resources);
