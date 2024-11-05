/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent1(nums, k) {
    // Step 1: 创建哈希表统计每个元素出现的频率
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Step 2: 创建桶数组,索引表示频率,值为具有该频率的元素数组
    const buckets = new Array(nums.length + 1).fill().map(() => []);

    for (const [num, freq] of frequencyMap) {
        // console.log('buckets---2',num, freq);
        buckets[freq].push(num);
    }

    // Step 3: 从后往前遍历桶数组,收集k个高频元素
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }
    // console.log('result---',result);


    // // 返回前k个高频元素
    return result.slice(0, k);
}

// 测试用例
// console.log(topKFrequent([4,4,4,7,7,7,3], 2)); // [1,2]
// console.log(topKFrequent([1], 1)); // [1]
// console.log(topKFrequent([1,2], 2)); // [1,2]


function topKFrequent(nums, k) {
    // 统计每个数字出现的频率
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        map.set(num, map.get(num) ? map.get(num) + 1 : 1)
    }

    // 索引为数字出现的次数 值为该次数的数字数组
    const arr = []
    for (let i = 0; i <= nums.length; i++) {
        arr.push([])
    }
    for (const [num, times] of map) {
        arr[times].push(num)
    }

    // 出现次数从高到低的数字的数组
    let res = []
    for (let i = arr.length - 1; i > 0; i--) {
        res.push(...arr[i])
    }
    // 返回前K项
    return res.slice(0, k)
}

console.log(topKFrequent([4, 4, 4, 7, 7, 7, 3], 2)); // [4,7]
