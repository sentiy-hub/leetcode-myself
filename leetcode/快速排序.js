// // 使用JavaScript实现快速排序
// // var arr = [5, 3, 7, 6, 2, 9];
// // console.log(quickSort(arr));  // 输出: [2, 3, 5, 6, 7, 9]

// function quickSort(arr) {
//     if (arr.length <= 1) return arr;
    
//     const pivotIndex = Math.floor(arr.length / 2);
//     const pivot = arr[pivotIndex];
    
//     const left = [];
//     const right = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (i === pivotIndex) continue; // 跳过基准值
//         if (arr[i] <= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
    
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // 测试代码
// const arr = [5, 3, 7, 6, 2, 9];
// console.log(quickSort(arr));  // 输出: [2, 3, 5, 6, 7, 9]

// // 测试重复元素的情况
// const arrWithDuplicates = [3, 5, 3, 7, 6, 2, 9];
// console.log(quickSort(arrWithDuplicates));  // 输出: [2, 3, 3, 5, 6, 7, 9]

// 快速排序的实现采用了以下策略：
// 1. **基准值选择**：选择数组中间的元素作为基准值。
// 2. **分区策略**：使用三个数组（left、middle、right）来存储小于、等于和大于基准值的元素。
// 3. **递归排序**：对左右两个子数组递归执行快速排序。

// 算法的主要步骤：
// 1. 首先检查数组长度，如果小于等于1则直接返回
// 2. 选择基准值（pivot）
// 3. 将数组分成三部分
// 4. 递归处理左右两部分
// 5. 合并结果

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let left = []
    let right = []
    let middleIndex = Math.floor(arr.length / 2)
    let middleItem = arr[middleIndex]

    for (let i = 0; i < arr.length; i++) {
        if (i === middleIndex) continue 
        if (arr[i] <= middleItem) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), middleItem, ...quickSort(right)]
}


const arr = [5, 3, 7, 6, 2, 9];
console.log(quickSort(arr));  // 输出: [2, 3, 5, 6, 7, 9]