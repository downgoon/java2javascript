# 前端页面基础

## HTML

## CSS

三种选择器：

- ``.class``: 点号选择器表示``class``选择。如何记忆呢？Java编译后的字节码不都是``.class``么，另外``.``在Unix正则表达式中表示通配，通配的东西更代表一类。
- ``#id``: 井号选择器表示``id``选择。如何记忆呢？你看``github``的``Issue``引用都是``#1234``这种形式，井号后面是Issue Id。
- ``元素``: 如果我们没给具体的元素弄``id``和``class``属性，那么也可以套用样式，那就直接对组件类了，比如``button``，表示所有的按钮。

``` html
<div id="user name" class="userinfo">
</div>
<div id="user age" class="userinfo">
</div>  
```

## 认识JSON

``ajax``从后端拉取的数据，大部分都是``JSON``格式，因此首先有必要认识下``JSON``。

``` javascript
var str = '{ "name": "Bob", "age": 23 }'; // JSON: javascript object notation
var obj = { "name": "Bob", "age": 23 }; // javascript object
```

``JSON``的全称是``JavaScript Object Notation``，可以翻译成``JSON字符串``，也就是JavaScript对象的字符化表示。上述代码，第一个变量``str``是``JSON字符串``；第二个变量``obj``是``JSON对象``，确切讲是``JavaScript对象``。它们的区别有没有最外层的单引号。

它们两者之间可以相互转化，浏览器中有个内置的``JSON``全局对象，提供两个方法：

``` javascript
var objText = JSON.stringify(obj); // JSON对象 -> JSON字符串
var objRecovery = JSON.parse(objText); // JSON字符串 -> JSON对象
```

练习代码见[hello-json.js](example-jquery/hello-json.js)，直接执行命令行``node hello-json.js``即可运行。
