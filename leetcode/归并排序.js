// function merge(left, right) {
//     let result = [];  // 用于存放合并结果
    
//     // 当两个数组都还有数字时
//     while (left.length > 0 && right.length > 0) {
//         // 比较两个数组的第一个数字
//         // 将较小的数字放入结果数组
//         if (left[0] <= right[0]) {
//             result.push(left.shift());  // shift()移除并返回数组的第一个元素
//         } else {
//             result.push(right.shift());
//         }
//     }
    
//     // 把剩余的数字放入结果数组
//     // 因为这两个while只会执行其中一个
//     while (left.length > 0) {
//         result.push(left.shift());
//     }
//     while (right.length > 0) {
//         result.push(right.shift());
//     }
    
//     return result;
// }

// function mergeSort(arr) {
//     // 如果数组只有一个数字，就直接返回
//     if (arr.length <= 1) {
//         return arr;
//     }
    
//     // 找到中间位置
//     let middle = Math.floor(arr.length / 2);
    
//     // 分成左右两个数组
//     let left = arr.slice(0, middle);    // 从开始到中间
//     let right = arr.slice(middle);      // 从中间到结束
    
//     // 递归排序左右两个数组，然后合并
//     return merge(mergeSort(left), mergeSort(right));
// }

// // 测试
// let arr = [4, 2, 5, 1];
// console.log('原始数组：', arr);
// console.log('第一次分割：', arr.slice(0, 2), '|', arr.slice(2));
// console.log('完全分割：', [4], [2], '|', [5], [1]);
// console.log('排序后：', mergeSort(arr));

function merge(left, right) {
    let res = []

    // console.log(`left 一:${left}`);
    // console.log(`right 一:${right}`);

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }

    // console.log(`left 二:${left}`);
    // console.log(`right 二:${right}`);

    while(left.length) {
        res.push(left.shift())
    }

    while(right.length) {
        res.push(right.shift())
    }
    return res
}
function mergeSort(arr) {
    console.log(`arr:${arr}`);

    if (arr.length < 2) {
        return arr
    }

    let middle = Math.floor(arr.length / 2)

    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

// // 测试
let arr = [4, 2, 5, 1, 10];
console.log('排序后：', mergeSort(arr));