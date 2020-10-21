/**
 * @param {number[]} nums
 * @return {number}
 */
//solution: dp[i]表示以nums[i]结尾的最长上升子序列
var lengthOfLIS = function(nums) {
    if (!nums) return 0
    var dp = [],
        i = 0,
        ans = nums.length ? 1 : 0
    for (var num of nums) {
        if (i === 0) {
            dp[0] = 1
        } else {
            var j = 0,
                _dpi = 0
            for (var d of dp) {
                if (nums[j] < nums[i]) {
                    _dpi = Math.max(d, _dpi)
                }
                j++
            }
            _dpi += 1
            dp[i] = _dpi
            ans = Math.max(ans, _dpi)
        }
        i++
    }
    return ans
};