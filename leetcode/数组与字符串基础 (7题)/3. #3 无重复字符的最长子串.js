// 所以这两个 Math.max 是必要的，它们确保了：
// start 指针永远不会后退
// 我们能记住整个过程中找到的最长的无重复子串长度

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = new Map();
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        // 如果当前字符已存在于映射中，更新起始位置
        if (charMap.has(currentChar)) {
            // 取最大值是为了确保start只能向前移动
            start = Math.max(charMap.get(currentChar) + 1, start);
        }
        
        // 更新字符的位置
        charMap.set(currentChar, end);
        console.log('charMap',charMap);
        // 计算当前无重复子串的长度并更新最大长度
        maxLength = Math.max(maxLength, end - start + 1);
        console.log('maxLength',maxLength);
        console.log('end',end);
    }
    
    return maxLength;
};

console.log(lengthOfLongestSubstring('abcdabcbb'));

function lengthOfLongestSubstring1(s) {
    let start = 0
    let maxLength = 0
    const hashMap = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        if (hashMap.has(currentChar)) {
            start = Math.max(start, hashMap.get(currentChar) + 1) 
        }
        hashMap.set(currentChar, i)
        maxLength = Math.max(i - start + 1, maxLength)
    }
    return maxLength
}

console.log(lengthOfLongestSubstring1('abctyuabcbb'));
