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