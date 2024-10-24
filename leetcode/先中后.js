// 定义树节点
class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

// 前序遍历：根->左->右
function preorderTraversal(root) {
  if (!root) return [];
  
  const result = [];
  const stack = [root];
  
  while (stack.length) {
      // 弹出栈顶节点
      const node = stack.pop();
      result.push(node.val);
      
      // 先压入右节点，再压入左节点（因为栈是后进先出）
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
  }
  
  return result;
}

// 中序遍历：左->根->右
function inorderTraversal(root) {
  if (!root) return [];
  
  const result = [];
  const stack = [];
  let current = root;
  
  while (current || stack.length) {
      // 一直遍历到最左边
      while (current) {
          stack.push(current);
          current = current.left;
      }
      
      // 处理节点
      current = stack.pop();
      result.push(current.val);
      
      // 转向右子树
      current = current.right;
  }
  
  return result;
}

// 后序遍历：左->右->根
function postorderTraversal(root) {
  if (!root) return [];
  
  const result = [];
  const stack = [root];
  
  while (stack.length) {
      const node = stack.pop();
      // 在结果数组头部插入当前节点
      result.unshift(node.val);
      
      // 先压入左节点，再压入右节点
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
  }
  
  return result;
}

// 创建示例树:
//       1
//      / \
//     2   3
//    / \
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// 测试
console.log("前序遍历:", preorderTraversal(root)); // [1, 2, 4, 5, 3]
console.log("中序遍历:", inorderTraversal(root));  // [4, 2, 5, 1, 3]
console.log("后序遍历:", postorderTraversal(root)); // [4, 5, 2, 3, 1]