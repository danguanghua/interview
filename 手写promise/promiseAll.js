  /**
   * Promise.all
   * @description 当这个数组里的所有promise对象全部变为resolve状态的时候，才会resolve, 当有一个promise对象变为reject状态时，就不再执行直接 reject
   * @param {*} values promise对象组成的数组作为参数
   */
Promise.all = (values) => {
    return new Promise((resolve, reject) => {
        let resultArr = [];
        let count = 0;
        let resultByKey = (value, index) => {
            resultArr[index] = value;
            count ++;
            if (count == resultArr.length) {
                resolve(resultArr);
            }
        }
        values.forEach((promise, index) => {
            console.log('promise', promise)
            promise.then((value) => {
                console.log('value', value)
                resultByKey(value, index);
            }, reject)
        })
    })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
Promise.all([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})