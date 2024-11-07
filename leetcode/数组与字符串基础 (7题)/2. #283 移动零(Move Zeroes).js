/**
 * @param {number[]} nums
 * @return {void} 不返回任何值，原地修改数组 Do not return anything, modify nums in-place instead.
 */
// 这个解决方案的思路是：

// 使用双指针技术，nonZeroIndex 指针记录当前应该放置非零元素的位置
// 第一次遍历：

// 遇到非零元素就放到 nonZeroIndex 的位置
// nonZeroIndex 向后移动一位

// 第二次遍历：

// 从 nonZeroIndex 开始，将所有剩余位置填充为 0
// 时间复杂度：O(n)，其中 n 是数组长度
// 空间复杂度：O(1)，只使用了常数额外空间

const moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    
    // 第一步：将所有非零元素移到数组前面
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    
    // 第二步：将剩余位置填充为0
    for(let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};


// console.log(moveZeroes([0,1,0,3,12]));

function moveZeroes1(nums) {
    let nzIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nzIndex] = nums[i]
            nzIndex ++
        }
    }

    for (let i = nzIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    console.log(nums);
    
}

moveZeroes1([0,1,0,3,12]);
