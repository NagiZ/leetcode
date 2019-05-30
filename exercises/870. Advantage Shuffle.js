/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
    A.sort((a, b) => a - b)
    B = B.map((v, i) => {
        return {
            val: v,
            index: i
        }
    }).sort((a, b) => a.val - b.val)
    var sa = 0,
        sb = 0,
        adv = [],
        disadv = [];
    while(sb < B.length && sa < A.length){
        if (B[sb].val < A[sa]) {
            adv[B[sb].index] = A[sa]
            sb++
        } else {
            disadv.push(A[sa])
        }
        sa++
    }
    for (var i = 0; i < A.length; i++) {
        if (adv[i] === undefined) {
            adv[i] = disadv[0]
            disadv.shift()
        }
    }
    return adv
};