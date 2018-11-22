//Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (!nums instanceof Array) return;
    var len = nums.length;
    if (len === 0) {
        return 0;
    }
    if (!len) {
        return;
    }
    if (target <= nums[0]) return 0;
    if (target === nums[len - 1]) return len - 1;
    if (target > nums[len - 1]) return len;
    for (var i = 0; i < len - 1; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        }
    }
};