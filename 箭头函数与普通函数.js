// 箭头函数的this指向规则：
// 1. 箭头函数没有prototype(原型)，所以箭头函数本身没有this
let b = () =>{};
console.log(b.prototype); // undefined
// 2. 箭头函数的this指向在定义的时候继承自外层第一个普通函数的this。

let a;
let barObj = { msg: 'bar的this指向' };
let fooObj = { msg: 'foo的this指向' };
console.log(1)
bar.call(barObj); // 将bar的this指向barObj
console.log(2)
foo.call(fooObj); // 将foo的this指向fooObj
console.log(3)
function foo() {
    console.log(4)
  a(); // 结果：{ msg: 'bar的this指向' }
  console.log(5)
}
console.log(6)
function bar() {
console.log(7)
  a = () => {
    console.log(this, 'this指向定义的时候外层第一个普通函数'); // 
  }; // 在bar中定义 this继承于bar函数的this指向
  console.log(8)
}
console.log(9)

// 3. 不能直接修改箭头函数的this指向

// 4. 箭头函数外层没有普通函数，严格模式和非严格模式下它的this都会指向window(全局对象)
// 普通函数 在非严格模式下，默认绑定的this指向全局对象，严格模式下this指向undefined

// 箭头函数的arguments
// 箭头函数的this指向全局，使用arguments会报未声明的错误
// 箭头函数的this指向普通函数时,它的argumens继承于该普通函数

console.log(1)
function bar() {
    console.log(arguments); // ['外层第二个普通函数的参数']
    bb('外层第一个普通函数的参数');
    function bb() {
      console.log(arguments); // ["外层第一个普通函数的参数"]
      let a = () => {
        console.log(arguments, 'arguments继承this指向的那个普通函数'); // ["外层第一个普通函数的参数"]
      };
      a('箭头函数的参数'); // this指向bb
    }
  }
  console.log(2)
  bar('外层第二个普通函数的参数');
  console.log(3)

//   使用new调用箭头函数都会报错，因为箭头函数没有constructor
// 箭头函数不支持new.target,new.target是ES6新引入的属性，
// 普通函数如果通过new调用，new.target会返回该函数的引用。

// 箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名

// 箭头函数的注意事项
// 一条语句返回对象字面量，需要加括号，或者直接写成多条语句的return形式，
// 箭头函数相对于普通函数语法更简洁优雅
  
