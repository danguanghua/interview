//this当前函数的执行上下文
//非严格模式下，指向window
//严格模式下，指向undefined

//this的隐式绑定
Function.prototype.myCall = function(context) {
    if (typeof context !== 'object') {
        //作用域对象应为一个object
        throw new TypeError('TypeError, Expected for object')
    }
    //防止传入对象为null或无传入对象
    context = context || window;

    //Symbol 确保属性的唯一性
    const fn = Symbol();

    //把当前函数传址给context[fn]指针
    context[fn] = this;

    //获取传入原函数的参数
    const args = [...arguments].slice(1);

    //从目的作用域中调用函数并获取返回值
    const result = context[fn](...args);

    //删除临时指针
    delete context[fn];

    return result;
}



// var length = 1;
// function fn() {
//     // console.log("this", this)
//     console.log("this1",this)
//     console.log(this.length)
// }
// // console.log("this0", this)
// const person = {
//     length : 2,
//     say(fn) {
//         console.log("this0",this)
//         fn();
//         arguments[0]();
//     }
// };

// person.say(fn, 1,2)