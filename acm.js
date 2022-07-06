//导入readline模块
var readline = require('readline');

//创建readline.Interface实例
var readlineTest = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//line事件
let input;
readlineTest.on('line', function(temp){
	//代码块
    input = temp;
    console.log("temp",temp)
    readlineTest.close();//使readline.Interface实例结束
});

//close事件
readlineTest.on('close', function() {
    console.log("inout",input)
    process.exit(0);
});
