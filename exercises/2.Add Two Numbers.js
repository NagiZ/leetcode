/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null; 
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var ans = {
            val: 0,
            next: null
        },
        temp_ans = ans,
        temp_1 = l1,
        temp_2 = l2,
        addi = 0
    while(temp_1 || temp_2) {
        var va = temp_1 ? temp_1.val : 0,
            vb = temp_2 ? temp_2.val : 0,
            sum = va + vb + addi
        temp_ans.val = sum % 10
        addi = Math.floor(sum / 10)
        if (temp_1 && temp_1.next || temp_2 && temp_2.next) {
            temp_ans.next = {
                val: 0,
                next: null
            }
            temp_ans = temp_ans.next
        }
        
        if (temp_1) {
            temp_1 = temp_1.next
        }
        if (temp_2) {
            temp_2 = temp_2.next
        }
    }
    if (addi) {
        temp_ans.next = {
            val: addi,
            next: null
        }
    }
    return ans
};