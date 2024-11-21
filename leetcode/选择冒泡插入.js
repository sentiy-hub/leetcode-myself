// 1.使用JavaScript实现选择排序
// 原理：找到最小值放到前面
// 时间复杂度：O(n²)
// 空间复杂度：O(1)
// 不稳定排序
// 交换次数少于冒泡排序

let arr = [5, 3, 2, 4, 1];

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

console.log(selectionSort(arr)); 

// 2.使用JavaScript实现冒泡排序
// 原理：相邻元素比较，大的往后冒
// 时间复杂度：O(n²)
// 空间复杂度：O(1)
// 稳定排序
// 适合小数据量

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

console.log(bubbleSort(arr)); 


// 3.使用JavaScript实现插入排序
// 原理：像打牌一样，把新牌插入到已排序区域
// 时间复杂度：O(n²)
// 空间复杂度：O(1)
// 稳定排序
// 对于近乎有序的数组效率最高

let array = [12, 111, 13, 5, 6];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 & arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = numberToInsert
    }
    return arr
}

console.log("Sorted array is:", insertionSort(array));


// function insertionSort(arr) {
//     // 先打印原始数组
//     console.log('开始排序：', arr);
//     console.log('-------------------');
    
//     // 从第二个数开始，因为第一个数可以认为已经排好序
//     for (let i = 1; i < arr.length; i++) {
//         console.log(`第${i}轮：准备处理数字 ${arr[i]}`);
        
//         // 记录要插入的数字
//         let numberToInsert = arr[i];
        
//         // 已排序部分的最后一个位置
//         let j = i - 1;
        
//         console.log(`将 ${numberToInsert} 与左边的数字比较`);
        
//         // 将大于 numberToInsert 的数字都向右移动
//         while (j >= 0 && arr[j] > numberToInsert) {
//             console.log(`${arr[j]} 比 ${numberToInsert} 大，将 ${arr[j]} 右移一位`);
//             arr[j + 1] = arr[j];
//             j--;
            
//             // 打印当前数组状态
//             console.log('当前数组：', arr);
//         }
        
//         // 找到合适的位置，插入数字
//         arr[j + 1] = numberToInsert;
//         console.log(`找到合适的位置，将 ${numberToInsert} 插入到索引 ${j + 1}`);
//         console.log('本轮结果：', arr);
//         console.log('-------------------');
//     }
    
//     return arr;
// }

// // 测试代码
// let arr = [5, 2, 4, 1, 3];
// console.log('排序前的数组：', arr);
// insertionSort(arr);
// console.log('排序后的数组：', arr);