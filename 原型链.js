// 我们先来了解下面引用类型的四个规则：
// 1、引用类型，都具有对象特性，即可自由扩展属性。

const obj = {}
const arr = []
const fn1 = function () {}

obj.a = 1
arr[0] = 1
arr.a = 1
arr.b = 2
fn1.a = 1

console.log('obj', obj)
console.log('arr', arr);
console.log('fn1', fn1.a)


// 2、引用类型，都有一个隐式原型 __proto__ 属性，属性值是一个普通的对象。
const obj = {};
const arr = [];
const fn = function() {}

console.log('obj.__proto__', obj);
console.log('arr.__proto__', arr.__proto__);
console.log('fn.__proto__', fn.__proto__);


// 3、引用类型，隐式原型 __proto__ 的属性值指向它的构造函数的显式原型 prototype 属性值。
// 4、当你试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，
// 那么它会去它的隐式原型 __proto__（也就是它的构造函数的显式原型 prototype）中寻找。

// 引用类型：Object、Array、Function、Date、RegExp


// 参考链接：https://juejin.cn/post/7007416743215759373#heading-15


inner = 0
    function say(){
      console.log(inner)
      console.log(this.inner)
    }
    let obj1 = {
      inner:'1-1',
      say(){
        let inner = '1-2'
        console.log(inner)
        console.log(this.inner)
      }
    }
    let obj2 = {
      inner:'2-1',
      say(){
        let inner = '2-2'
        console.log(inner)
        console.log(this.inner)
      }
    }
    say()
    obj1.say()
    obj2.say()
    obj1.say = say
    obj1.say()
    obj2.say = obj1.say
    obj2.say()

