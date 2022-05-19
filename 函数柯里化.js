// function add(...args) {
//     return args.reduce((a, b) => a + b);
// }

// function currying(fn) {
//     let args = [];
//     return function temp(...newArgs) {
//         if (newArgs.length) {
//             args = [
//                 ...args,
//                 ...newArgs
//             ]
//             return temp;
//         }
//         else {
//             let val = fn.apply(this, args);
//             args = [];
//             return val;
//         }

//     }
// }
// let addCurry = currying(add);
// console.log(addCurry(1)(2,3)(4)());


function add(...args) {
    return args.reduce((a, b) => a + b);
}

function currying(fn) {
    let args = [];
    return function temp(...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp;
        }
        else {
            let value = fn.apply(this, args);
            args = [];
            return value;
        }
    }
}

let curryingAdd = currying(add);
console.log(curryingAdd(1)(2)(3,4)());