/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    var dp = []
    dp[0] = nums[0]
    for (var i = 1; i < nums.length; i++) {
        dp[i]= dp[i - 1] + nums[i]
    }
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            var temp = dp[j] - dp[i] + nums[i]
            if (temp === k || (k !== 0 && temp % k === 0)) {
                return true
            }
        }
    }
    return false
};

/*solution 2 来自官方题解
* 用haspMap保存到第i个位置为止的累积和，并将这个前缀和对k取余rem。当rem已经存在与haspMap里，则说明存在以i、j为始终端点的数组，其数组和为k的整数倍。
*/
var checkSubarraySum2 = function(nums, k) {
    var map = {},
        sum = 0
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (k != 0) {
            sum %= k
        }
        if (i > 0 && sum === 0) return true
        if (map[sum] != undefined) {
            if (i - map[sum] >= 1) {
                return true
            }
        } else {
            if (nums[i] != 0) {
                map[sum] = i + 1
            }
        }
    }
    return false
};