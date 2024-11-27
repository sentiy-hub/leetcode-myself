// 前序遍历的核心特点：


// 1.访问顺序：根节点 -> 左子树 -> 右子树
// 2.记忆口诀："根左右"
// 3.适用场景：当你需要优先处理父节点时使用

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 1.递归
var preorderTraversal1 = function (root) {
    let result = []
    function putNode(root) {
        if (root) {
            // 1. 先处理根节点
            result.push(root.val)
            // 2. 然后遍历左子树
            putNode(root.left)
            // 3. 最后遍历右子树
            putNode(root.right)
        }
    }
    putNode(root)
    return result
};

// 2.迭代
// 根--左--右
function preorderTraversal2(root) {
    if (!root) return [];
    
    const result = [];
    const stack = [root];
    
    while (stack.length) {
        // 弹出栈顶节点
        const node = stack.pop();
        
        // 1. 处理根节点
        result.push(node.val);
        
        // 2. 先压入右子节点（这样会后处理）
        if (node.right) {
            stack.push(node.right);
        }
        
        // 3. 后压入左子节点（这样会先处理）
        if (node.left) {
            stack.push(node.left);
        }
    }
    
    return result;
}

// 创建一个示例树
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null,
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

// console.log(preorderTraversal1(tree));
console.log(preorderTraversal2(tree));


