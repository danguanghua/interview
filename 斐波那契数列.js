function fib(n) {
    if (n < 0) throw new Error('输入数字不能小于0')
    if (n < 2) return n;
    return fib (n - 1) + fib(n - 2);
}

// fib(5);

function fib1(n) {
    if (n  < 0) throw new Error('输入错误');
    if (n < 2) return n;
    let f0 = 0;
    let f1 = 1;
    let result = 0;
    for (let i = 2; i <= n; i ++) {
        result = f0 + f1;
        f0 = f1;
        f1 = result;
    }
    return result;
}
console.log(fib1(6))