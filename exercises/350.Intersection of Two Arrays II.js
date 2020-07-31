/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var numsMap = {},
        nums = nums1,
        _loopNums = nums2
        ans = []
    if (nums1.length > nums2.length) {
        nums = nums2
        _loopNums = nums1
    }
    for (var num of nums) {
        if (!numsMap[num]) {
            numsMap[num] = 0
        }
        numsMap[num]++
    }
    for (var num of _loopNums) {
        if (numsMap[num]) {
            ans.push(num)
            numsMap[num]--
        }
    }
    return ans
};