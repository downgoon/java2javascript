# 从jquery开始javascript项目开发

前端工作很多一部分可以概括为：从后端服务器拉取点数据，然后在页面上展现一下。拉取数据，需要用到``ajax``操作，展现数据，需要用到``DOM``操作，这两个操作都可以借助``jQuery``完成。

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

练习代码见[hello-json.js](hello-json.js)，直接执行命令行``node hello-json.js``即可运行。

## AJAX操作

### HTML页面模板

不用每个页面都从头写，需要类似``Eclipse``生成代码模板的工具，比如：

- HTML插件：在``vscode``中，安装``HTML Boilerplate``插件，以便生成HTML模板。
- 菜鸟教程网：在菜鸟教程网中直接选一个样例，然后点击``尝试一下``在线使用。比如：http://www.runoob.com/jquery/jquery-ajax-get-post.html
- 


### 后端API服务器

写``AJAX``请求的时候，需要两个环境：

- API服务器：有个提供JSON API的后端服务器。这里推荐 [json-server](https://www.npmjs.com/package/json-server) 来快速构建想要的API服务，不需要数据库，一条命令行就构建了CRUD操作。
- 页面服务器：写出来的页面都加载到浏览器中运行，浏览器一般请求Web服务器把页面加载起来。这里推荐 [http-server](https://www.npmjs.com/package/http-server)，随时随地一条命令行就把Web服务器启动了，比``nginx``方便很多。

先安装它们：

``` bash
$ npm install -g json-server
$ npm install -g http-server
```

构建API服务：

- 创建``db.json``文件

``` json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

这个文件相当于关系型数据库。拉取数据请求：

``` bash
$ curl -X GET -i http://localhost:3000/posts
```


### AJAX请求

``ajax``通用请求：

``` javascript
$.ajax({
    url: 'http://localhost:3000/posts',
    type: 'GET',
    async: true,
    success: function (data) {
        for (i = 0; i < data.length; i++) {
            console.info('a[%d]=%s', i, JSON.stringify(data[i]));
            $("#article").append('<li>').append(data[i].title).append('</li>');
        }
        $(".content").css("background-color", "red");
    }
});
```

除此之外，还有：``GET``，``POST``和``Load``请求。

- [load样例](http://www.runoob.com/jquery/jquery-ajax-load.html)
- [get和post样例](http://www.runoob.com/jquery/jquery-ajax-get-post.html)


## 智能感知补全
