// 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

// 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

// 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

 

// 示例 1：

// 输入：s = "loveleetcode", c = "e"
// 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
// 解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
// 距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
// 距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
// 对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
// 距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
// 示例 2：

// 输入：s = "aaab", c = "b"
// 输出：[3,2,1,0]

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const n = s.length;
  const prev = [];
  let lastPos = -n;

  // 从左到右遍历,记录上一次出现 c 的位置
  for (let i = 0; i < n; i++) {
      if (s[i] === c) {
          lastPos = i;
      }
      prev[i] = i - lastPos;
  }

  lastPos = 2 * n;
  // 从右到左遍历,记录下一次出现 c 的位置
  for (let i = n - 1; i >= 0; i--) {
      if (s[i] === c) {
          lastPos = i;
      }
      prev[i] = Math.min(prev[i], lastPos - i);
  }

  return prev;
};

// 时间复杂度分析:

// 第一次从左到右遍历需要 O(n) 的时间复杂度。
// 第二次从右到左遍历需要 O(n) 的时间复杂度。
// 总的时间复杂度是 O(n)。

// 空间复杂度分析:

// 使用了一个长度为 n 的数组 prev 来存储每个字符到最近的 c 的最短距离。
// 空间复杂度是 O(n)。

// 总的来说,这个解决方案使用了两次遍历,时间和空间复杂度都是 O(n)。这是一个比较优雅的解决方案,利用了字符串的单向性质来减少计算。