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