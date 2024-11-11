// 使用JavaScript实现选择排序

// // 测试数据

let arr = [5, 3, 2, 4, 1];

// console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]

function selectionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]
