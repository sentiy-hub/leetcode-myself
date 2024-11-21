// 使用JavaScript实现顺序搜索

// // 测试数据

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sequentialSearch(arr, target) {
    if (!arr.length) return -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(sequentialSearch(arr, 5)); // 输出: 4
console.log(sequentialSearch(arr, 10)); // 输出: -1
console.log(sequentialSearch(arr, 2)); // 输出: -1