// 使用JavaScript实现选择排序

// // 测试数据

let arr = [5, 3, 2, 4, 1];

// console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]

// 使用JavaScript实现冒泡排序

function bubbleSort(arr) {
    let len = arr.length;
    // 优化性能，避免多余的一轮比较
    // 符合实际排序的需求（n个元素只需要n-1轮）
    // 防止数组越界（因为内部要比较j和j+1）
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr)); // 输出：[3, 4, 5, 6, 8]
