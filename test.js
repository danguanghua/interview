let a = [1,2,3];
a = a.map((item)=> item += 2
)
console.log(a);

//箭头函数 有{}则必须有return
//如果箭头函数返回的是一个字面量对象，则用小括号包裹

// (function(){
//     var a = b = 3;
// })()
// // console.log(a);
// console.log(b);

class myPromise {
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';
    constructor(func) {
        this.PromiseState = myPromise.PENDING;
        this.PromiseResult = null;
       try {
            func(this.resolve.bind(this), this.reject.bind(this));
       } catch (error) {
           this.reject(error)
       }
    }
    resolve(result) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
        }
    }
    reject(reason) {
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
        }
    }
    then(onFulfilled, onRejected) {
        if (this.PromiseState === myPromise.FULFILLED) {
            onFulfilled(this.PromiseResult);
        }
        if (this.PromiseState === myPromise.REJECTED) {
            onRejected(this.PromiseResult);
        }
    }
}


// 测试代码
let promise1 = new myPromise((resolve, reject) => {
    throw new Error('白嫖不成功');
})
promise1.then(
    result => {
        console.log('fulfiiled:', result)
    },
    reason => {
        console.log('rejected:', reason)
    }
)

console.log(1);
let promise = new Promise((resolve, reject) => {
    console.log(2);
   setTimeout(() => {
        resolve('这次一定');
       console.log(4);
  });
})
promise.then(
    result => {
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);

// 测试代码
console.log(1);
let promise2 = new Promise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log('A');
        resolve('这次一定');
        console.log('B');
        console.log(4);
    });
})
promise2.then(
    result => {
        console.log('C');
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);

let p1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(10)
    console.log(2)
})
p1.then(res => {
    console.log('fulfilled', res);
    return 2 * res
}).then(res => {
    console.log('fulfilled', res)
})



