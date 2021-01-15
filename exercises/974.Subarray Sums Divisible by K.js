/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    var map = new Map([[0, 1]]),
        sum = 0
    var ans = 0
    for (var num of A) {
        sum += num
        // var t = sum % K,
        //     tPlu = t
        // if (t > 0) {
        //     tPlu = t - K
        // } else {
        //     tPlu = K + t
        // }
        var t = (sum % K + K) % K
        if (map.has(t)) {
            ans += map.get(t)
        }
        if (map.has(tPlu)) {
            ans += map.get(tPlu)
        }
        var count = map.get(t) || 0
        map.set(t, ++count)
    }
    return ans
};