var PassportSDK = (function() { // 匿名函数
    
    // 扮演私有成员：函数的内部变量
    var dbUser = 'admin'; // 数据库账号
    var dbPwd = '123456'; // 数据库密码
    
    var failCnt = 0; // 存储失败次数
    var status = false; // 记录登陆状态

    // 扮演公开方法：函数的返回值
    // 返回值是一个对象，对象的有些属性是一个函数
    return {

        login: function(user, password) {
            var isPassed = (dbUser == user && dbPwd === password);
            if (! isPassed) { 
                failCnt ++; 
            } else {
                status = true;
            }
            return isPassed;
        },

        getFailCount: function() {
            return failCnt;
        },

        isLogined: function() {
            return status;
        }

    };

})(); // 匿名函数的立即调用

// 测试使用
var passed = PassportSDK.login('guest', 'guest');
console.log('登陆结果：' + passed);

passed = PassportSDK.login('admin', '123456');
console.log('登陆结果：' + passed);
console.log('失败次数：' + PassportSDK.getFailCount());
console.log('已经登录？：' + PassportSDK.isLogined());
console.log(PassportSDK.dbPwd); // 访问不到


///////////////////////////
// 继承：开闭原则下，实现功能拓展
///////////////////////////

var PassportSDKExt = (function(parent) {

    parent.logout = function() {
        parent.status = false; // 访问不了私有成员，没有Java的Protected概念
    };

    return parent;

})(PassportSDK);


PassportSDK.logout();

PassportSDKExt.logout();
var status = PassportSDKExt.isLogined();
console.log('登出后的状态：' + status);

