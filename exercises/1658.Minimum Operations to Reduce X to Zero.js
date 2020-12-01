//solution
var minOperations = function(nums, x) {
    var sums = {},
        sum = 0,
        i = 0,
        ans = Infinity
    for (var num of nums) {
        sum += num
        sums[sum] = i
    }
    sum = 0
    if (sums[x] !== undefined) {
        ans = Math.min(ans, sumx[x] + 1)
    }
    if (sum < x) {
        return -1
    }
    var l = nums.length
    i = l - 1
    while (i >= 0) {
        sum += nums[i]
        if (sums[x - nums[i]] !== undefined) {
            var c = sums[x - nums[i]] + l - i + 1//处理序列总和小于X的情况
            if (c > nums.length) continue
            ans = Math.min(ans, c)
        }
    }
    return ans === Infinity ? -1 : ans
};