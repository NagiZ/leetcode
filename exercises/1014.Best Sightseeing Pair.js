/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    var MAX = A[0] + 0
    var ans = 0
    for (var i = 1, l = A.length; i < l; i++) {
        ans = Math.max(ans, MAX + A[i] - i)
        MAX = Math.max(MAX, A[i] + i)
    }
    return ans
};