/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
    if (!nums || !nums.length) return 0
    let len = nums.length
    let dp = [[0, nums[0]]]
    for (var i = 1; i < len; i++) {
        dp[i] = [Math.max(dp[i - 1][0], dp[i - 1][1])]
        dp[i][1] = dp[i - 1][0] + nums[i]
    }
    return Math.max(...dp[len - 1])
}