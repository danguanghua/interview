//写一个以a, a + b, a + 2b, ..., a + nb,为时间间隔的定时器，最后在清楚定时器

function mySetinterVal(fn, a, b) {
    this.a = a;
    this.b = b;
    this.time = 0;
    this.handle = -1;

    this.start = () => {
        this.handle = setTimeout(() => {
            fn();
            this.time ++;
            this.start();
            console.log(this.a + this.time * this.b);
        },this.a + this.time * this.b);
    }

    this.stop = () => {
        clearTimeout(this.handle);
        this.tmie = 0;
    }
}

var a = new mySetinterVal(()=> {console.log('123')}, 1000, 2000);
a.start();
// a.stop();
