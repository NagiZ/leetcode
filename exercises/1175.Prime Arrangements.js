/**
 * @param {number} n
 * @return {number}
 */
//算出质数个数a, 求得a! 和 (n-a)! 的乘积即可
var numPrimeArrangements = function(n) {
    function getPrimeNums (n) {
        var c = 0
        if (n > 1) {
            var nums = []
            for (var i = 0; i <= n; i++) {
                if (i % 2) {
                    nums.push(true)
                } else {
                    nums.push(false)
                }
            }
            nums[0] = false
            nums[1] = false
            nums[2] = true
            for (var i = 2; i <= n; i++) {
                if (nums[i]) {
                    c++
                    var j = i + i
                    while (j <= n) {
                        nums[j]  = false
                        j += i
                    }
                }
            }
        }
        return c
    }
    var p = getPrimeNums(n),
        _p = Math.min(p, n - p),
        cp = 1,
        SUM = Math.pow(10, 9) + 7
    p = n - _p
    for (var i = 1; i <= p; i++) {
        cp *= i
        cp %= SUM
        if (i <= _p) {
            cp *= i
            cp %= SUM
        }
    }
    return cp % (Math.pow(10, 9) + 7)
};