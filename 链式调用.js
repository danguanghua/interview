function Class1() {
    console.log('初始化')
}
Class1.prototype.method = function(param) {
    console.log(param)
    console.log(this)
    return this
}
let cl = new Class1()
//由于new 在实例化的时候this会指向创建的对象， 所以this.method这个方法会在原型链中找到。
cl.method('第一次调用').method('第二次链式调用').method('第三次链式调用')


var obj = {
    a: function() {
        console.log("a");
        console.log(this);
        return this;
    },
    b: function() {
        console.log("b");
        console.log(this)
        return this;
    },
};
obj.a().b();