/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
    var len = S.length,
        p = [0],
        ans = Infinity
    for (var i = 0; i < len; i++) {
        p[i + 1] = p[i] + (S.charAt(i) == '1' ? 1 : 0)
    }
    for (var i = 0; i <= len; i++) {
        ans = Math.min(ans, p[i] + len - i - (p[len] - p[i]))
    }
    return ans
};