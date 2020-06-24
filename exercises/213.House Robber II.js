/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    return nums.length === 1 ? nums[0] : Math.max(doRob(nums.slice(1)), doRob(nums.slice(0, -1)))
};

var doRob = function(nums) {
    var profit = [[0, nums[0]]]
    for (var i = 1, len = nums.length; i < len; i++) {
        profit[i] = []
        profit[i][0] = Math.max(profit[i-1][0], profit[i-1][1])
        profit[i][1] = profit[i-1][0] + nums[i]
    }
    return nums.length ? Math.max(profit[nums.length-1][0], profit[nums.length-1][1]) : 0
};