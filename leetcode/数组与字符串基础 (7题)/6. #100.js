/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 如果两个节点都是 null，返回 true
  if (p === null && q === null) return true;
  
  // 如果其中一个是 null，另一个不是，返回 false
  if (p === null || q === null) return false;
  
  // 如果当前节点的值不相等，返回 false
  if (p.val !== q.val) return false;
  
  // 递归检查左右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};