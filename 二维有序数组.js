//合并二维有序数组成一维有序数组

function merge(arr1, arr2) {
    let result = [];
    // console.log(arr1.length);
    while(arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            result.push(arr1.shift());
        }
        else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
    let len = arr.length;
    if (len === 0) {
        return [];
    }
    while(arr.length > 1) {
        let item1 = arr.shift();
        let item2 = arr.shift();
        let mergeArr = merge(item1, item2);
        arr.push(mergeArr);
    }
    console.log('dandan')
    return arr[0];
}

let arr = [[3, 7, 9], [2, 5, 6],[1,2,3]]
let arr1 = [[3, 7, 9], [2, 5, 6],[1,2,3],[6,7,8]]
console.log(mergeSort(arr));
console.log(mergeSort(arr1))