// 中序遍历 (Inorder)


// 访问顺序：左子树 -> 根节点 -> 右子树
// 记忆技巧：根节点在"中间"访问

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 1.递归
var inorderTraversal1 = function (root) {
    let result = []
    function traver(root) {
        if (!root) {
            return
        }
        traver(root.left)
        result.push(root.val)
        traver(root.right)
    }
    traver(root)
    return result
};

// 2.迭代
// 左---根---右
function inorderTraversal2(root) {
    // 结果
    let res = []
    // 栈模拟递归
    let stack = []
    // 当前节点根节点
    let cur = root
    while (cur || stack.length) {
        while (cur) {
            // 遍历左子树 push进栈
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
return res
   
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

console.log(inorderTraversal1(tree));
