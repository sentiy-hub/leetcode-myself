// 后序遍历 (Postorder)


// 访问顺序：左子树 -> 右子树 -> 根节点
// 记忆技巧：根节点"最后"访问

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 1.递归
var postorderTraversal1 = function (root) {
    let result = []

    function traverse(root) {
        if (!root) {
            return
        }
        traverse(root.left)
        traverse(root.right)
        result.push(root.val)
    }

    traverse(root)
    return result
};



// 2.迭代
// 左->右->根 正常
// 根->右->左 逆序
function postorderTraversal2(root) {
    if (!root) {
        return []
    }

    let result = []
    let stack = [root]

    while (stack.length) {
        let node = stack.pop()

        result.push(node.val)
        if (node.left) {
            stack.push(node.left)
        }
        
        if (node.right) {
            stack.push(node.right)
        }
        
    }

    return result.reverse();
   
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

console.log(postorderTraversal1(tree));
