/**
 * LeetCode 46 - 全排列
 * @param {number[]} nums - 输入数组
 * @return {number[][]} - 返回所有可能的排列
 */
var permute = function(nums) {
  // 存储所有排列结果
  const res = []
  
  /**
   * 回溯函数
   * @param {number[]} path - 当前路径，记录已经选择的数字
   */
  const backtrack = (path) => {
      // 如果当前路径长度等于nums长度，说明找到了一个完整排列
      if (path.length === nums.length) {
          res.push([...path]) // 需要深拷贝，否则后续修改path会影响结果
          return
      }
      
      // 遍历nums中的每个数字
      nums.forEach(n => {
          // 如果当前数字已在路径中，跳过
          if (path.includes(n)) return
          
          // 选择当前数字，将其加入路径
          // 使用concat而不是push，因为concat会返回新数组，不会修改原数组
          backtrack(path.concat(n))
          // 注意：这里不需要显式的撤销选择，因为使用concat创建了新数组
      })
  }
  
  // 从空路径开始回溯
  backtrack([])
  return res
}

// 测试用例
console.log(permute([1,2,3]))
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/*
解题思路：
1. 使用回溯法，通过路径（path）记录已选择的数字
2. 当路径长度等于nums长度时，找到一个完整排列
3. 在每一步：
 - 遍历所有数字
 - 跳过已经在路径中的数字
 - 将未使用的数字加入路径
 - 递归继续寻找剩余数字的排列
4. 时间复杂度：O(n!)
5. 空间复杂度：O(n)，递归调用栈的深度
*/