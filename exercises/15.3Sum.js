/**
 * @param {number[]} nums
 * @return {number[][]}
 * //内两层循环实际上可以归为一层，当数组排序之后
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    var ans = [],
        len = nums.length
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        var k = len - 1
        for (var j = i + 1; j < k; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            var vi = nums[i],
                vj = nums[j]
            var t = -(vi + vj)
            while(k > j && nums[k] > t) {
                k--
            }
            if (k <= j) break
            if (nums[k] === t) {
                ans.push([vi, vj, nums[k]])
            }
        }
    }
    return ans
};