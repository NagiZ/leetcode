/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    function lop (cur) {
        if (cur) {
            var r = lop(cur.next),
                tv = cur.val
            if (!cur.k) {
                cur.val = r.val
                r.val = tv
                r.k = true
            } else {
                delete cur.k
            }
            return r.next
        } else {
            return head
        }
    }
    lop(head)
    return head
};