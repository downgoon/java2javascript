// 重构后的匿名函数的立即调用形式

var session = (function () {
    var status = false;
    return {
        create: function (name, pwd) {
            status = ('admin' == name && '123456' == pwd);
            return status;
        },
        remove: function () {
            status = false;
        },
        isActive: function () {
            return status;
        }
    };
})();

// 改成命名函数

var Session = function () { // 命名函数
    var status = false;  // 私有成员
    return {
        create: function (name, pwd) { // 公有方法
            status = ('admin' == name && '123456' == pwd);
            return status;
        },
        remove: function () { // 公有方法
            status = false;
        },
        isActive: function () { // 公有方法
            return status;
        }
    };
};

var session = Session(); // 命名函数的调用
session.create('guest', 'guest'); // 使用


// Vertx.vertx() 风格

var Session = { // Vertx.vertx() 风格
  session: function () { // ${上面的命名函数}
      var status = false;  // 私有成员
      return {
          create: function (name, pwd) { // 公有方法
              status = ('admin' == name && '123456' == pwd);
              return status;
          },
          remove: function () { // 公有方法
              status = false;
          },
          isActive: function () { // 公有方法
              return status;
          }
      };
  }
};

var session = Session.session();
session.create('guest', 'guest');

// 静态成员

var Session = {
  instanceCount: 0, // 类的静态成员 （无法私有化）
  session: function () { // 类的静态方法
      Session.instanceCount ++; // 调用Session.session() 后，实例数+1
      var status = false;  // 实例的私有成员
      return {
          create: function (name, pwd) { // 实例的公有方法
              status = ('admin' == name && '123456' == pwd);
              return status;
          }
      };


  },
  getInstanceCount: function() { // 类的静态方法
    return Session.instanceCount; // 只是对标Java风格，实际instanceCount并非私有
  }
};

var session = Session.session();
Session.getInstanceCount();

// 类的继承

var SessionSub = {
    sessionSub: (function(parent) {
        parent.currentUser = function() {
          return '{}';
        }
        return parent;
    })(Session) // 把超类作为参数
};

SessionSub sessionSub = SessionSub.sessionSub();
sessionSub.currentUser();
