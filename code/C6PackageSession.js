
var io_example_passport = (function () { // 依然是匿名函数的立即调用
    return {
        Session: { // 类似Java的类
            instanceCount: 0, // 类的静态成员 （无法私有化）
            session: function () { // 类的静态方法
                Session.instanceCount++; // 调用Session.session() 后，实例数+1
                var status = false;  // 实例的私有成员
                return {
                    create: function (name, pwd) { // 实例的公有方法
                        status = ('admin' == name && '123456' == pwd);
                        return status;
                    },
                    isActive: function() {
                        return status;
                    }
                };

            },

            getInstanceCount: function () { // 类的静态方法
                return Session.instanceCount; // 只是对标Java风格，实际instanceCount并非私有
            }
        },

        User: { // 类似Java的类
            user: function(session) { // 带参数的构造函数
                var priSession = session; // 私有成员
                var user = {};
                user.getUser = function () {
                    if (priSession.isActive) {
                        return "{'name': 'zhangsan', 'uid': 514233}";
                    } else {
                        throw 'Please login first';
                    }
                };
                user.getSession = function () {
                    return priSession;
                };
                return user;
            }
        }
    }

})();

// Session类
var Session = io_example_passport.Session;
var session1 = Session.session();
var session2 = Session.session();
console.log('实例个数：' + Session.getInstanceCount());
var s1Passed = session1.create('guest', 'guest');
console.log('s1 登陆结果：' + s1Passed);
var s2Passed = session2.create('admin', '123456');
console.log('s2 登陆结果：' + s2Passed);
console.log('s2 登陆状态：' + session2.isActive());


// User 类
var User = io_example_passport.User;
var user = User.user(session2);
var currentUser = user.getUser();
console.log('current user on session2: ' + currentUser);
console.log('当前用户依然保持登陆吗？' + user.getSession().isActive());
