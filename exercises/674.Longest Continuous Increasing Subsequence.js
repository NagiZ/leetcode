/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var ans = 0,
        temp = 0
    for (var i = 1, l = nums.length; i < l; i++) {
        if (nums[i] <= nums[i - 1]) {
            ans = Math.max(ans, i - temp)
            temp = i
        }
    }
    ans = Math.max(ans, l - temp)
    return ans
};