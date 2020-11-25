/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const base = Math.pow(10, 9) + 7
    s = s.split(/0+/)
    var ans = 0
    console.log(s)
    for (var _s of s) {
        var n = _s.length
        console.log(ans, n)
        ans += (n + 1) * n / 2
        if (ans > base) {
            ans = ans % base
        }
    }
    return ans % base
};