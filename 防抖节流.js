//防抖
//实现原理： 每次触发事件时设置一个延时调用方法，并且取消之前的延时调用方法
//事件被触发n秒后，在执行回调函数，如果n秒内又被触发，则重新计时


const debounce = (fun, delay = 500) => {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        console.log(args, this)
        timer = setTimeout(()=> {
            fun.apply(this, args);
        }, delay)
    }
}
debounce(()=>{console.log('dandan')}, 1000)();


// const debounce = (fun, delay = 500) => {
//     let timer = null;
//     return function(...args) {
//         clearTimeout(timer);
//         timer = setTimeout(()=> {
//             fun.apply(this, args)
//         }, delay)
//     }
// }

//节流
//实现原理 规定在一个单位时间内，只能触发一次事件。如果这个单位时间内触发多次，只有一次生效

const throttle = (fun, delay = 1000) => {
    let flag = true;
    return function(...args) {      
        if (!flag) return;
        flag = false;
        setTimeout(()=> {
            fun.apply(this, args);
            flag = true;
        }, delay)
    }
}


// const throttle1 = (fun, delay = 1000) => {
//     let flag = true;
//     return function(...args) {
//         if (!flag) return ;
//         flag = false;
//         setTimeout(()=>{
//             fun.apply(this, args);
//             flag = true;
//         }, delay)
//     }
// } 