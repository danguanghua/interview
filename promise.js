class Promise {
    //构造器
    //promise 有三个状态 pending(等待), fulfilled(成功) ==> value, rejected(失败) ==> reason
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        //成功存放的数组
        this.onResolvedCallbacks = [];
        //失败存放的数组
        this.onRejectedCallbacks = [];
        //成功
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                //一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        };
        //失败
        let reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                //一旦rejecte执行， 调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        };
        //立即执行
        try {
            executor(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }

    //then方法 两个参数 onfilfilled,onRejected
    //then链式调用
    then(onFulfilled, onRejected) {
        //onFulfilled 如果不是函数，就忽略，直接返回value
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;

        onRejected = typeof onRejected === 'function' ? onRejected : err=> {throw err};
        //声明返回的promise2
        let promise2 = new Promise((resolve, reject) => {
            //异步
            if (this.state === 'fulfilled') {
                setTimeout(()=>{
                    try {
                        let x = onFulfilled(this.value);
                        //resolvepromise， 处理自己return的promise和默认的promise2的关系
                        resolvePromise(promise2, x, resolve, reject);
                    }
                    catch(e) {
                        reject(e);
                    }
                }, 0)
            }

            if (this.state === 'rejected') {
                setTimeout(()=>{
                    try {
                        let x = onRejected(this, reason);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                    catch(e) {
                        reject(e)
                    }
                }, 0)
            }

            if (this.state === 'pending') {
                this.onResolvedCallbacks.push(()=>{
                    setTimeout(()=>{
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        }
                        catch(e) {
                            reject(e);
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(()=> {
                    setTimeout(()=>{
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject)
                        }
                        catch(e) {
                            reject(e);
                        }
                    }, 0)
                })
            }
        })
        return promise2;
        // //状态为fulfilled， 执行onFulfilled，传入成功的值
        // if (this.state === 'fulfilled') {
        //     onFulfilled(this.value);
        // }
        // //状态为rejected, 执行onRejected,传入失败的值
        // if (this.state === 'rejected') {
        //     onRejected(this.reason);
        // }

        // //状态为pendings
        // if (this.state === 'pending') {
        //     //将onFulfilled传入数组
        //     this.onResolvedCallbacks.push(()=> {
        //         onFulfilled(this.value);
        //     });
        //     //将onRejected传输失败数组
        //     this.onRejectedCallbacks.push(()=>{
        //         onRejected(this.reason);
        //     })

        // }
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    //循环引用报错
    if (x === promise2) {
        return reject(new TypeError('chaining cycle detected for promise'));
    }
    //防止多次调用
    let called;
    //x 不是null，且x是对象或者函数
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            //如果then是函数，就默认是promise
            if (typeof then === 'function') {
                //让then执行，第一个参数是this
                then.call(x, y => {
                    if(called) return ;
                    called = true;
                    //resolve的结果依旧是promise,就继续解析
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    if (called) return ;
                    called = true;
                    reject(err);
                })
            }
            else {
                resolve(x);
            }
        }
        catch(e) {
            if (called) return ;
            called = true;
            reject(e);
        }
    }
    else {
        resolve(x);
    }

}
