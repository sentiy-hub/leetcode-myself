// 定义树节点的结构
class TreeNode {
    constructor(value) {
        this.value = value;      // 节点的值
        this.children = [];      // 子节点数组
    }
}

// 创建一个示例树
function createSampleTree() {
    const root = new TreeNode(1);             // 根节点
    const node2 = new TreeNode(2);
    const node3 = new TreeNode(3);
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);
    
    root.children.push(node2);                // 构建树的结构
    root.children.push(node3);
    node2.children.push(node4);
    node2.children.push(node5);
    node3.children.push(node6);
    
    return root;
}

// 深度优先遍历 (DFS)
// 使用递归的方式实现，优先访问一个分支到底
function dfs(node) {
    if (!node) return;                        // 如果节点为空，直接返回
    
    console.log(node.value);                  // 输出当前节点的值
    
    // 递归遍历每个子节点
    for (let child of node.children) {
        dfs(child);
    }
}

// 广度优先遍历 (BFS)
// 使用队列实现，逐层访问节点
function bfs(root) {
    if (!root) return;                        // 如果根节点为空，直接返回
    
    const queue = [root];                     // 创建队列并将根节点入队
    
    while (queue.length > 0) {                // 当队列不为空时继续遍历
        const node = queue.shift();           // 取出队列的第一个节点
        console.log(node.value);              // 输出当前节点的值
        
        // 将当前节点的所有子节点加入队列
        for (let child of node.children) {
            queue.push(child);
        }
    }
}

// 创建示例树并测试
const tree = createSampleTree();

console.log("深度优先遍历结果：");
dfs(tree);                                    // 输出: 1, 2, 4, 5, 3, 6

console.log("\n广度优先遍历结果：");
bfs(tree);                                    // 输出: 1, 2, 3, 4, 5, 6