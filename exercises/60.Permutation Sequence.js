/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var a = 1,
        m = 1,
        ans = [],
        subArr = []
    while (m <= n) {
        a *= m
        subArr.push(m)
        m++
    }
    m = n
    while(subArr.length) {
        let idx = 0
        if (k < a) {
            a = a / m
            m--
            idx = Math.floor(k / a)
            k = k % a
            if (k === 0) { // k = 0, 说明刚好可以占用完本组排列
                idx--
                idx = Math.max(idx, 0)
                a = 0
            }
            ans.push(...subArr.splice(idx, 1))
        } else if (k === a) {
            ans.push(...(subArr.splice(0).reverse()))
            break
        }
    }
    return ans.join('')
};