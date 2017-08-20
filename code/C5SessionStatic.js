
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
    return instanceCount; // 只是对标Java风格，实际instanceCount并非私有
  }
};

var session = Session.session();
Session.getInstanceCount();

