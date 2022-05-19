//创建数组
let arr1 = [1,2,3]
let arr2 = new Array(2,2);
console.log('arr1', arr1);
console.log('arr2', arr2);

//ES6 Array.of() 返回由所有参数值组成的数组

let arr3 = Array.of(1,2,3)
console.log('arr3', arr3)

//ES6 Arrary.from() 将两类对象转为真正的数组

let obj = {0: 'a', 1: 'b', 2:'c', length: 3};
let arr4 = Array.from(obj); 
console.log('arr4', arr4)

//方法
//改变数组的9个方法

// splice() 添加/删除数组元素
    //删除元素(返回的是被删除的元素)
    let arr5 = [1,2,3,4,5,6,7];
    let item1 = arr5.splice(0, 3)  
    console.log('item1', item1)
    console.log('arr5', arr5)

    //删除并添加
    let item2 = arr5.splice(0, 2, 1,2,3)
    console.log('item2', item2);
    console.log('arr5', arr5)

    //不删除只添加
    let item3 = arr5.splice(3, 0, 4,5)
    console.log('item3', item3)
    console.log('arr5',arr5)
    let item4 = arr5.splice();
   
    console.log('item4', item4);
    console.log('arr5',arr5)

//sort()数组排序
        //升序
        let arr6 = [8,12,5,78,18,34,2]
        arr6.sort((a,b) => a - b )
        console.log('arr6', arr6)
        //降序
        arr6.sort((a, b) => b - a)
        console.log('arr6', arr6)

        //多条件排序
        let arr7 = [{id:10,age:2},{id:5,age:4},{id:6,age:10},{id:9,age:6},{id:2,age:8},{id:10,age:9}];
        arr7.sort((a, b) => {
            if (a.id === b.id) {
               return b.age - a.age;
            }
            else {
                return a.id - b.id
            }
        })
        console.log('arr7', arr7);

//pop()删除数组中的最后一个元素
        let arr8 = [1,3,4];
        arr8.pop();
        console.log('arr8', arr8);

//shift()删除数组的第一个元素
        let arr9 = [1,3,4];
        arr9.shift();
        console.log('arr9', arr9)

//push()向数组末尾添加元素
        let arr10 = [1,3,4];
        arr10.push(2,3);
        console.log('arr10', arr10)

//unshift()像数组开头添加元素
        let arr11 = [1,3,4];
        arr11.unshift(2,0);
        console.log('arr11',arr11)
//reverse()颠倒数组中元素的顺序
        let arr12 = [1,3,4];
        arr12.reverse();
        console.log('arr12', arr12);

//fill()填充数组
        let arr13 = [1,3,4];
        arr13.fill(2,1,2);
        console.log('arr13', arr13)

//不改变原数组的方法

// slice()浅拷贝数组元素
        let arr14 = [8,6,4,2];
        let a = arr14.slice();
        a[0] = 2;
        let b = arr14.slice(0,2);
        console.log('arr14', arr14);
        console.log('a', a);
        console.log('b', b)

//join()数组转字符串
        let arr15 = ['hello', 'world'];
        let c = arr15.join();
        let d = arr15.join('-');
        console.log('c', c);
        console.log('d', d)

//concat()合并两个或者多个数组
        let arr16 = [1,2,3]
        let arr17 = [4,5,6]
        let arr18 = [7,8,9]
        let e = arr16.concat(arr17)
        let f = arr16.concat(arr17, arr18);
        console.log('e', e);
        console.log('f', f)

        //...拓展运算符合并数组
        let g = [...arr16, ...arr17];
        console.log('g', g)

//indexOf()查找数组中是否存在某个元素,返回下标
        let arr19 = [2,3,5,5]
        let h = arr19.indexOf(5)
        let i = arr19.indexOf(6);
        console.log('h', h);
        console.log('i', i)

//lastIndexOf()查找指定元素的数组的最后一个位置

        let arr20 = [2,3,5,5]
        let j = arr20.lastIndexOf(5);
        let k = arr20.lastIndexOf(1);
        console.log('j', j);
        console.log('k' , k)

//includes()查找数组是否包含某个元素
        let arr21 = [2,3,5,NaN]
        let l = arr21.includes(NaN);
        let m = arr21.includes(2);
        console.log('l', l);
        console.log('m', m);

//12个遍历数组的方法

//forEach 没有返回值，有无法改变原数组
        let arr22 = [2,3,5];
        let n = arr22.forEach((item, index, arr) => {
            console.log('index', index)
            if (index > 0) {
                console.log('2',arr[index - 1])
                item = item + arr[index - 1];
                console.log('item', item)
            }
            else {
                return item;
            }
        })
        console.log('arr22', arr22);
        console.log('n', n)

//every检测数组所有元素是否都符合判定条件
        let arr23 = [12,9,8,13];
        let o = arr23.every((item, index, arr) => item > 7);
        let p = arr23.every((item) => item <12)
        console.log('o', o);
        console.log('p', p)

//some()数组中是否有满足判定条件的元素
        let arr24 = [2,4,8];
        let q = arr24.some(item => item > 6);
        let r = arr24.some(item => item > 8);
        console.log('q', q);
        console.log('r', r)

//filter()过滤原始数组，返回新数组
        let arr25 = [1,2,3,4,5,6];
        let s = arr25.filter(item => item % 2 === 1);
        console.log('s', s)

//map()对数组的每个元素进行处理，返回新数组
        let arr26 = [2,3,4,6];
        let t = arr26.map((item, index, arr) => {
            if (index > 0) {
                return item + arr[index - 1];
            }
            else {
                return item;
            }
        })
        console.log('t', t);
        console.log('arr26', arr26)

//reduce 为数组提供累加器， 并返回合并的值
        let arr27 = [2,4,6,8]
        let sum = arr27.reduce((total, item, index, arr) => 
            total + item
        )
        console.log('sum', sum)

        //将二维数组转化为一维
        let arr28 = [[1,2],[3,4],[5,6]];

        let u = arr28.reduce((total, item, index, arr) => {
            // console.log('item', item);
            return total.concat(item)
        },[])
        console.log('u', u)
    
//find()和findIndex()根据条件查找数组元素
        let arr29 = [1,-2,3,4,-5]
        let v = arr29.find(item => item < 0);
        let w = arr29.findIndex(item => item < 0)
        console.log('v', v)
        console.log('w', w)

//ES6 keys()&values()&entries() 遍历键名、遍历键值、遍历键名+键值
