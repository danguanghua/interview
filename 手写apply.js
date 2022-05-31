
Function.prototype.myApply = function(context) {
    if (typeof context !== 'object') {
        throw new TypeError('TypeErroe, Expected for object')
    }

    //防止传入对象为null或五传入对象
    context = context || window;

    const fn = Symbol();

    context[fn] = this;

    const args = [...arguments].slice(1);

    const result = context[fn](args);

    delete context[fn];

    return result;
}