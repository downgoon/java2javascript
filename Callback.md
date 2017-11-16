# javascript的异步与回调

## 异步回调的概念

比如我们要实现两个数的加和，同步的风格是这样的（详见[T2C1Callback.js](code/T2C1Callback.js)））：

``` js
function sumReturn (x,y) {
    var z = x + y;
    return z;
}

var sum = sumReturn(5, 7);
console.log('同步风格加和结果：' + sum);
```

但在javascript中，由于``函数``也是一个对象，可以跟普通数据一样传递，于是回调很简单，就是 **把函数作为另一个函数的输入参数** 即可：

``` js
function sumCallback(x, y, callback) {
    var z = x + y;
    callback(z); // 回调时带一个输入参数
}

sumCallback(5, 7, function(sum) { // 匿名回调函数
    console.log('异步风格加和结果：' + sum);
});
```

在java中，因为java没有类似C的函数指针，需要通过接口来实现（详见[T2C1Callback.java](code/T2C1Callback.java)））：

``` java
static void sumCallback(int x, int y, Callback callback) {
  int z = x + y;
  callback.on(z);
}

interface Callback {
  void on(int sum);
}

public static void main(String[] args) {
  sumCallback(5, 7, new Callback() { // 匿名内部类回调
    @Override
    public void on(int sum) {
      System.out.print("异步风格加和结果：" + sum);
    }
  });
}
```


如果在``Java8``下，代码可以更加简洁，无需“匿名内部类”的方式（详见[T2C1CallbackJava8.java](code/T2C1CallbackJava8.java)）：

``` js
public static void main(String[] args) {
		sumCallback(5, 7, sum -> {
			System.out.print("异步风格加和结果：" + sum);
		});
	}
```
