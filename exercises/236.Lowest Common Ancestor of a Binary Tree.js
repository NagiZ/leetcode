/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let pNode = getNodes(root, p.val),
        qNode = getNodes(root, q.val)
    pNode.visited = true
    qNode.visited = true
    while (pNode.parent) {
        pNode = pNode.parent
        if (pNode.visited) {
            return pNode
        } else {
            pNode.visited = true
        }
    }
    while(qNode.parent) {
        qNode = qNode.parent
        if (qNode.visited) {
            return qNode
        } else {
            qNode.visited = true
        }
    }
};
var getNodes = function(root, val) {
    let nodes = [root],
        target = root
    while(nodes.length) {
        let _nodes = []
        for (let node of nodes) {
            if (node.val === val) {
                _nodes = []
                target = node
                break
            }
            if (node.left) {
                node.left.parent = node
                _nodes.push(node.left)
            }
            if (node.right) {
                node.right.parent = node
                _nodes.push(node.right)
            }
        }
        nodes = _nodes
    }
    return target
}