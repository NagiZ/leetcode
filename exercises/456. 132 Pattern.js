/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    var max = [],
        third = null;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (third !== null && nums[i] < third) {
            return true
        } else {
            while(max.length > 0 && nums[i] > max[max.length - 1]) {
                third = max[max.length - 1]
                max.pop()
            }
            max.push(nums[i])
        }
    }
    return false
};