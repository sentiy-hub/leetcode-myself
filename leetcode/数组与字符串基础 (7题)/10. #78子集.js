/**
 * 78. Subsets
 * 给定一个整数数组 nums，返回其所有可能的子集（幂集）。解集不能包含重复的子集。
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */

// 解法1: 回溯法 (Backtracking)
const subsets = function(nums) {
  const result = [];
  
  // 回溯函数
  function backtrack(start, currentSubset) {
      // 每个阶段的子集都是一个有效解，直接加入结果集
      result.push([...currentSubset]);
      
      // 从start开始遍历，避免重复生成子集
      for (let i = start; i < nums.length; i++) {
          // 选择当前数字
          currentSubset.push(nums[i]);
          // 递归生成后续子集，从i+1开始避免重复使用当前数字
          backtrack(i + 1, currentSubset);
          // 回溯，移除当前数字，尝试下一个数字
          currentSubset.pop();
      }
  }
  
  backtrack(0, []);
  return result;
};

// 解法2: 迭代法（二进制掩码）
const subsets2 = function(nums) {
  const n = nums.length;
  const result = [];
  
  // 共有2^n个子集
  const total = 1 << n; // 等价于 Math.pow(2, n)
  
  // 遍历从0到2^n-1的每个数字，每个数字的二进制表示对应一个子集
  for (let mask = 0; mask < total; mask++) {
      const currentSet = [];
      // 检查每一位是否为1，为1则将对应位置的数字加入子集
      for (let i = 0; i < n; i++) {
          if ((mask & (1 << i)) !== 0) {
              currentSet.push(nums[i]);
          }
      }
      result.push(currentSet);
  }
  
  return result;
};

// 测试代码
const nums = [1, 2, 3];
console.log("Input:", nums);
console.log("Output (Backtracking):", subsets(nums));
console.log("Output (Binary):", subsets2(nums));

/* 输出示例：
Input: [1,2,3]
Output (Backtracking): [
[],     
[1],    
[1,2],  
[1,2,3],
[1,3],  
[2],    
[2,3],  
[3]     
]
*/