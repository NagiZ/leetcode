/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var ans = temp = null, node1 = l1, node2 = l2
    while(node1 || node2) {
        let t = null
        if (!node1) {
            t = node2
            node2 = node2.next
        } else if (!node2) {
            t = node1
            node1 = node1.next
        } else {
            if (node1.val < node2.val) {
                t = node1
                node1 = node1.next
            } else {
                t = node2
                node2 = node2.next
            }
        }
        if (!temp) {
            temp = t
            ans = temp
        } else {
            temp.next = t
            temp = temp.next
        }
    }
    return ans
};