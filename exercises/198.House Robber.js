/**
 * @param {number[]} nums
 * @return {number}
 * 每到一间房子，都有 抢1/不抢0 2种状态
 */
var rob = function(nums) {
    var profit = [[0, nums[0]]]
    for (var i = 1, len = nums.length; i < len; i++) {
        profit[i] = []
        profit[i][0] = Math.max(profit[i-1][0], profit[i-1][1])
        profit[i][1] = profit[i-1][0] + nums[i]
    }
    return nums.length ? Math.max(profit[nums.length-1][0], profit[nums.length-1][1]) : 0
};