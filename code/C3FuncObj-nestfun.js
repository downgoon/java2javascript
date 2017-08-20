var outer_var = 1;
function outer_fun() { // 外层函数定义
    var midd_var = 2;
    function inner_fun() { // 内层函数定义
        var inner_var = 3;
        console.log(outer_var + midd_var + inner_var);
        function core_fun() { // 核层函数定义
            var core_var = 4;
            console.log(outer_var + midd_var + inner_var + core_var);
        };
        core_fun(); // 核层函数调用
    }; 
    inner_fun(); // 内层函数调用
};
outer_fun(); // 外层函数调用