/**
 * @param {number[]} nums
 * @return {number}
 * 第一次遍历找到需要调整的起点，第二次遍历确定调整的终点
 */
var findUnsortedSubarray = function(nums) {
    var l = r = mi = 0,
        s = 0,
        numsLength = nums.length - 1
        ans = 0
    while (l < numsLength) {
        if (nums[l] > nums[l + 1]) {
            r = l + 1
            mi = l
            s = l
            while (s >= 0 && nums[s] > nums[r]) {
                s--
            }
            break
        }
        l++
    }
    while (l <= numsLength) {
        if (nums[l] >= nums[mi]) {
            mi = l
        } else {
            r = l
            while (s >= 0 && nums[s] > nums[r]) {
                s--
            }
        }
        l++
    }
    return r - s
};