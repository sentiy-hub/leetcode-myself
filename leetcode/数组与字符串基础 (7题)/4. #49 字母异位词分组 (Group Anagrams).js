// 这个解法的核心思路是：
// 1. 使用哈希表存储分组，key是排序后的字符串，value是原始字符串数组
// 2. 遍历每个字符串，将其排序后作为key，原字符串加入对应的分组
// 3. 最后返回所有分组

// 主要优化点：
// 1. 对边界情况进行了处理
// 2. 使用Map数据结构来存储分组
// 3. 使用Array.from()将Map转换为最终结果

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    // 处理边界情况
    if (!strs || strs.length === 0) return [];
    if (strs.length === 1) return [strs];
    
    // 创建一个Map来存储分组
    // key: 排序后的字符串
    // value: 原始字符串数组
    const map = new Map();
    
    // 遍历每个字符串
    for (const str of strs) {
        // 将字符串分割成字符数组，排序后再组合回字符串，作为key
        const sortedStr = str.split('').sort().join('');
        console.log(sortedStr);
        
        // 如果这个排序后的字符串已经在Map中存在
        // 就将当前字符串添加到对应的数组中
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            // 如果是第一次遇到这种模式，创建新数组
            map.set(sortedStr, [str]);
        }
    }
    
    // console.log(map);

    // 将Map中的所有值转换为数组返回
    return Array.from(map.values());
}

// 测试用例
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// // 输出: [["eat","tea","ate"],["tan","nat"],["bat"]]

// console.log(groupAnagrams([""]));
// // 输出: [[""]]

// console.log(groupAnagrams(["a"]));
// 输出: [["a"]]

// 时间复杂度: O(n * k * log k)
// 其中 n 是字符串数组的长度，k 是字符串的最大长度
// 空间复杂度: O(n * k)
// 需要存储所有字符串，每个字符串最大长度为 k


function groupAnagrams1(strs) {

    const hashMap = new Map()

    for (const str of strs) {
        let key = str.split('').sort().join('')
        if (hashMap.has(key)) {
            hashMap.get(key).push(str)
        } else {
            hashMap.set(key, [str])
        }
        console.log(hashMap);
        
    }
    return [...hashMap.values()]
    

}

console.log(groupAnagrams1(["eat","tea","tan","ate","nat","bat"]));

