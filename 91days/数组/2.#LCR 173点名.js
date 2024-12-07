// 某班级 n 位同学的学号为 0 ~ n-1。点名结果记录于升序数组 records。假定仅有一位同学缺席，请返回他的学号。

 

// 示例 1:

// 输入: records = [0,1,2,3,5]
// 输出: 4
// 示例 2:

// 输入: records = [0, 1, 2, 3, 4, 5, 6, 8]
// 输出: 7

/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function(records) {
  let left = 0;
  let right = records.length;
  
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (records[mid] === mid) {
          // 缺失的数字在右半部分
          left = mid + 1;
      } else {
          // 缺失的数字在左半部分（包括mid位置）
          right = mid;
      }
  }
  
  return left;
};