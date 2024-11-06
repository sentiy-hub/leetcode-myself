/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// hash
// 时间复杂度: O(n) - 只需要遍历一次数组
// 空间复杂度: O(n) - 需要一个 Map 来存储已遍历的数字

var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const gap = target - nums[i]
        if (map.has(gap)) {
            return [map.get(gap), i]
        }
        map.set(nums[i], i)
    }

    return []
};

// 暴力解法
// 时间复杂度是 O(n²) - 因为有两层循环
// 空间复杂度是 O(1) - 只用了几个变量
var twoSum1 = function(nums, target) {
   for (let i = 0; i < nums.length; i++) {
    const numLeft = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
        const numRight = nums[j];
        if (numLeft + numRight === target) {
            return [i, j]
        }
    }
   }
   return []
};

console.log(twoSum([2,3,4,1,7],9));
console.log(twoSum1([2,3,4,1,7],9));

