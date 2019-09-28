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