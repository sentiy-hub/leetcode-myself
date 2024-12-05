// 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。

// 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
// 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。

 

// 示例 1：

// 输入：num = [1,2,0,0], k = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
// 示例 2：

// 输入：num = [2,7,4], k = 181
// 输出：[4,5,5]
// 解释：274 + 181 = 455
// 示例 3：

// 输入：num = [2,1,5], k = 806
// 输出：[1,0,2,1]
// 解释：215 + 806 = 1021

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let sum = BigInt(num.join('')) + BigInt(k);    // O(n)
  return String(sum).split('').map(Number); // O(n)
}
// 时间复杂度：O(n)，其中 n 是数组长度
// 空间复杂度：O(n)，需要创建新数组存储结果


console.log(addToArrayForm([1,2,0,0], 34)); // [1,2,3,4]
console.log(addToArrayForm([2,7,4], 181)); // [4,5,5]