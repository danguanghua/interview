// const generateArray = function(length) {
//     let arr = Array(length);
//     for(let i=0; i<length; i++) {
//         arr[i] = Math.random();
//     }
//     return arr;
// };


// let arr = generateArray(20)
// console.log('arr1',arr);
//1.冒泡排序
let arr = [56,23,1,45,87,12,6,3,0]

bubbleSort(arr);
console.log('arr2', arr)
function bubbleSort(arr) {
    let len = arr.length;
    let flag = true;
    for (let i = 0; i < len; i ++) {
        for (let j = 0; j < len - i - 1; j ++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (flag) {
            return ;
        }
    }
}

//选择排序
let arr1 = [56,23,1,45,87,12,6,3,0]
selectionSort(arr1)
console.log('arr1', arr1)
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i ++) {
        let min = i;
        for (let j = i; j < len; j ++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i != min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}

//插入排序

function insertSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i ++) {
        let j = i;
        let tmp = arr[i];
        while(j > 0 && arr[j - 1] > tmp) {
            arr[j] = arr[j - 1];
            j --;
        }
        arr[j] = tmp;
    }
}

let arr3=[56,23,1,45,87,12,6,3,0]
insertSort(arr3);
console.log('arr3', arr3);

//归并算法
const mergeSort = arr => {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2), //等价于len >> 1
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));

}

const merge = (left, right) => {
    const result = [];
    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift())
        }
    }
    while (left.length) result.push(left.shift());

	while (right.length) result.push(right.shift());
    // console.log('result', result)
    return result;
}

const arr4 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr4 :', mergeSort(arr4));
console.timeEnd('归并排序耗时');

//快速排序
const quickSort = (arr, left, right) => {
    let len = arr.length,
        partitionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

const partition = (arr, left, right) => {
    let pivot = arr[left];
    while(left < right) {
        while(left < right && arr[right] >= pivot) {
            right --;
        }
        arr[left] = arr[right];
        while(left < right && arr[left] < pivot) {
            left ++;
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}

const arr5 = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('排序耗时');
console.log('arr4 :', quickSort(arr5));
console.timeEnd('排序耗时');