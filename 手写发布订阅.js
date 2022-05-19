// 创建一个 EventEmitter 类
// 在该类上创建一个事件中心（Map）
// on 方法用来把函数 fn 都加到事件中心中（订阅者注册事件到调度中心）
// emit 方法取到 arguments 里第一个当做 event，根据 event 值去执行对应事件中心中的函数（发布者发布事件到调度中心，调度中心处理代码）
// off 方法可以根据 event 值取消订阅（取消订阅）
// once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
// 注册一个 newListener 用于监听新的事件订阅

class EventEmitter {
    constructor() {
        this._events = {} //存放注册的事件与回调
    }
    //on订阅方法
    on(eventName, callback) {
        // if (this._events[eventName]) {
        //     if (this._events[eventName] != 'newListener') {
        //         this.emit('newListener', eventName);
        //     }
        // }
        const callbacks = this._events[eventName] || [];
        callbacks.push(callback);
        this._events[eventName] = callbacks;
        // console.log('this._event', this._events)
    }
    //emit事件发布方法
    emit(eventName, ...args) {
        const callbacks = this._events[eventName] || [];
        callbacks.forEach(callback => callback(...args));
    }
    //事件取消订阅方法off
    off(eventName, callback) {
        const callbacks = this._events[eventName] || [];
        const newCallbacks = callbacks.filter(fn => fn != callback 
            && fn.initialCallback != callback);
        this._events[eventName] = newCallbacks;
    }
    //实现单次订阅方法once
    once(eventName, callback) {
        const one = (...args) => {
            callback(...args);
            this.off(eventName, one)
        }
        one.initialCallback = callback;
        this.on(eventName, one);
    }
}

const events = new EventEmitter()
let cal = function(){
    console.log("hello");
}
events.on("hello", cal)
events.emit("hello");

events.off("hello",cal)
events.on("hello2", function(){
    console.log("hello2");
})

events.on("newListener", function(eventName){
    console.log(`eventName`, eventName)
})

events.on("hello", function(){
    console.log("hello");
})

let cb = function(){
    console.log('cb');
}
events.on("hello", cb)

events.off("hello", cb)

function once(){
    console.log("once");
}
events.once("hello", once)

events.off("hello", once)
events.emit("hello")
events.emit("hello")

