// 使用JavaScript实现二分搜索（二分查找）

// // 使用示例：

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const target = 7;


function binarySearch(array, target) {
    if (!array.length) return -1
    let left = 0
    let right = array.length - 1
    while (left <= right) {
        let middle = Math.floor((left+right) / 2);
        if (array[middle] === target) {
            return middle
        } 
         if (array[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
}

console.log(binarySearch(array, target)); // 输出：6


// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left <= right) {
//         // 计算中间索引，使用 (left + right) >>> 1 可以避免大数溢出
//         const mid = (left + right) >>> 1;
        
//         // 找到目标值
//         if (arr[mid] === target) {
//             return mid;
//         }
        
//         // 如果中间值比目标值大，在左半部分继续搜索
//         if (arr[mid] > target) {
//             right = mid - 1;
//         }
//         // 如果中间值比目标值小，在右半部分继续搜索
//         else {
//             left = mid + 1;
//         }
//     }
    
//     // 没有找到目标值，返回 -1
//     return -1;
// }

// // 测试示例
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 7;
// console.log(binarySearch(array, target)); // 输出：6

// // 更多测试用例
// console.log(binarySearch(array, 1));  // 输出：0（查找第一个元素）
// console.log(binarySearch(array, 10)); // 输出：9（查找最后一个元素）
// console.log(binarySearch(array, 11)); // 输出：-1（查找不存在的元素）
