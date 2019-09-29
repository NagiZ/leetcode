/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var low = 0,
        high = nums.length - 1,
        ans = [-1, -1]
    while (low <= high) {
        if (low === high) {
            var id = nums[low] === target ? low : -1
            ans[0] = id
            low = high + 1
        } else {
            var mid = Math.floor((low + high) / 2)
            if (nums[mid] >= target) {
                high = mid
            } else {
                low = mid + 1
            }
        }
    }
    low = 0
    high = nums.length - 1
    while (low <= high) {
        if (low === high) {
            var id = nums[low] === target ? low : -1
            ans[1] = id
            low = high + 1
        } else {
            var mid = Math.ceil((low + high) / 2)
            if (nums[mid] > target) {
                high = mid - 1
            } else {
                low = mid
            }
        }
    }
    return ans
};