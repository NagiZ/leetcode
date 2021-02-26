/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var nodes = [root],
        nodesList = [[root]]
    while (nodes.length) {
        let sub = []
        for (let node of nodes) {
            if (node.left) {
                sub.push(node.left)
            }
            if (node.right) {
                sub.push(node.right)
            }
        }
        if (sub.length) {
            nodesList.push(sub)
        }
        nodes = sub
    }
    var ans = -Infinity
    //求出每个节点，当以此节点为根节点并以该节点为起点的一条路径，其路径上的节点值和的最大值 === 记为该节点的 sum。则sum=val + Max(Max(left.sum, 0), Max(right.sum, 0))
    //此时可以确定以该节点为根节点的最大路径和为 sum + Min(Max(left.sum, 0), Max(right.sum, 0))
    //遍历所有节点，并更新ans即可
    for (var i = nodesList.length - 1; i >= 0; i--) {
        let nl = nodesList[i]
        for (var n of nl) {
            let cl = Math.max(n.left ? n.left.sum : 0, 0)
            let cr = Math.max(n.right ? n.right.sum : 0, 0)
            let temp
            if (cl > cr) {
                n.sum = n.val + cl
                temp = n.sum + Math.max(cr, 0)
            } else {
                n.sum = n.val + cr
                temp = n.sum + Math.max(cl, 0)
            }
            ans = Math.max(ans, temp)
        }
    }
    return ans
};