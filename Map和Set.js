//map是一组键值对的结构， key不仅是字符串还可以是对象
//常用方法

let map = new Map();

map.set('dandan', 27) //添加key 和value
console.log(map)

map.has('dandan') //是否存在key，返回布尔值
console.log(map)
map.get('dandan') //获取对应的值
console.log(map)
map.delete('dandan') //删除对应的值
console.log(map)