# LeetCode面试备考指南（两个月计划）

## 一、整体规划

### 1.1 学习目标
- 掌握主要数据结构：数组、链表、树、图
- 熟练常见算法：排序、搜索、动态规划
- 能够独立解决中等难度题目
- 掌握面试高频考点

### 1.2 时间分配
- 工作日：2-3小时/天
- 周末：4-5小时/天
- 总计划：8周

### 1.3 学习策略
1. **循序渐进**
   - 先易后难
   - 先理解后刷题
   - 先基础后提高

2. **重点突破**
   - 面试高频题
   - 典型解题模板
   - 代码书写规范

## 二、详细学习计划

### 第一个月（基础篇）

#### Week 1: 数组与字符串
- **周一/二**
  - [1] 两数之和
  - [283] 移动零
- **周三/四**
  - [3] 无重复字符最长子串
- **周五**
  - [49] 字母异位词分组
- **周末**：复习 + 总结解题模板

#### Week 2: 链表专题（重点）
- **周一**：[206] 反转链表
- **周二**：[21] 合并两个有序链表
- **周三**：[141] 环形链表
- **周四**：[19] 删除链表倒数第N个节点
- **周末**：复习 + 手写代码练习

#### Week 3: 树与递归（重点）
- **周一**：[102] 二叉树层序遍历
- **周二**：[98] 验证二叉搜索树
- **周三/四**：[236] 最近公共祖先
- **周末**：复习 + 总结递归思路

#### Week 4: 栈与队列
- **周一**：[20] 有效括号
- **周二**：[155] 最小栈
- **周三/四**：[239] 滑动窗口最大值
- **周末**：月度总结 + 查漏补缺

### 第二个月（提高篇）

#### Week 5: 动态规划入门（重点）
- **周一**：[70] 爬楼梯
- **周二/三**：[53] 最大子数组和
- **周四/五**：[322] 零钱兑换
- **周末**：总结DP解题套路

#### Week 6: 动态规划进阶
- **周一/二**：[300] 最长递增子序列
- **周三/四**：[72] 编辑距离
- **周末**：复习经典DP题型

#### Week 7: 图论与搜索
- **周一/二**：[200] 岛屿数量
- **周三/四**：[207] 课程表
- **周末**：总结DFS/BFS模板

#### Week 8: 冲刺周
- 复习所有高频题
- 手写代码练习
- 模拟面试

## 三、必会代码模板（JavaScript版）

### 3.1 链表操作

```javascript
// 链表节点定义
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 反转链表 - 迭代法
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
};

// 反转链表 - 递归法
var reverseList = function(head) {
    if (!head || !head.next) return head;
    
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
};

// 检测环形链表
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
};

// 合并两个有序链表
var mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    curr.next = l1 || l2;
    return dummy.next;
};
```

### 3.2 树的遍历

```javascript
// 树节点定义
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 中序遍历 - 递归
var inorderTraversal = function(root) {
    const result = [];
    
    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    };
    
    inorder(root);
    return result;
};

// 中序遍历 - 迭代
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let curr = root;
    
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    
    return result;
};

// 层序遍历
var levelOrder = function(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const level = [];
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(level);
    }
    
    return result;
};
```

### 3.3 动态规划模板

```javascript
// 一维DP - 爬楼梯问题
var climbStairs = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
};

// 二维DP - 最小路径和
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array(m).fill().map(() => Array(n).fill(0));
    
    // 初始化第一个元素
    dp[0][0] = grid[0][0];
    
    // 初始化第一行
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    
    // 初始化第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    
    // 填充其余单元格
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    
    return dp[m-1][n-1];
};
```

### 3.4 二分查找模板

```javascript
// 标准二分查找
var binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
};

// 寻找左边界的二分查找
var searchLeft = function(nums, target) {
    let left = 0;
    let right = nums.length;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

// 寻找右边界的二分查找
var searchRight = function(nums, target) {
    let left = 0;
    let right = nums.length;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left - 1;
};
```

### 3.5 回溯算法模板

```javascript
// 组合问题
var combine = function(n, k) {
    const result = [];
    
    const backtrack = (start, curr) => {
        if (curr.length === k) {
            result.push([...curr]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            curr.push(i);
            backtrack(i + 1, curr);
            curr.pop();
        }
    };
    
    backtrack(1, []);
    return result;
};

// 排列问题
var permute = function(nums) {
    const result = [];
    const used = new Set();
    
    const backtrack = (curr) => {
        if (curr.length === nums.length) {
            result.push([...curr]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) continue;
            
            used.add(i);
            curr.push(nums[i]);
            backtrack(curr);
            curr.pop();
            used.delete(i);
        }
    };
    
    backtrack([]);
    return result;
};
```

## 四、面试技巧

### 4.1 解题步骤
1. 理解题意
   - 确认输入输出
   - 考虑边界情况
   - 提出关键问题

2. 思路分析
   - 暴力解法
   - 优化方向
   - 最优解法

3. 编码实现
   - 清晰命名
   - 模块化
   - 注释说明

4. 测试检查
   - 基本测试
   - 边界测试
   - 特殊情况

### 4.2 常见优化方向
1. 空间换时间
   - 使用HashMap
   - 预处理数据
   - 缓存结果

2. 双指针技巧
   - 快慢指针
   - 左右指针
   - 滑动窗口

3. 数据结构选择
   - 栈：配对问题
   - 队列：BFS
   - 堆：Top-K问题

### 4.3 面试注意事项
1. 沟通很重要
   - 主动询问
   - 清晰表达
   - 及时反馈

2. 代码规范
   - 变量命名
   - 代码缩进
   - 错误处理

3. 时间管理
   - 合理分配时间
   - 及时调整思路
   - 把握节奏

## 五、复习策略

### 5.1 日常复习
- 每日复习前一天的题目
- 做题时记录解题思路
- 总结相似题目的解法

### 5.2 周末复习
- 整理本周的重点题目
- 查漏补缺
- 归纳总结

### 5.3 月度复习
- 复习所有高频题
- 整理解题模板
- 模拟面试训练

## 六、资源推荐

### 6.1 刷题网站
- LeetCode
- 牛客网
- CodeTop

### 6.2 学习资料
- 《剑指Offer》
- 《算法小抄》
- LeetCode题解区优质文章

### 6.3 工具推荐
- VSCode（编程工具）
- Typora（笔记工具）
- XMind（思维导图）
