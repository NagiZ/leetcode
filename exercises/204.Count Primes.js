/**
 * @param {number} n
 * @return {number}
 * 小于n的质数
 */
var countPrimes = function(n) {
    var c = 0
    if (n > 2) {
        var nums = []
        for (var i = 0; i <= n - 1; i++) {
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
};