/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var max = nums[0], _max = 0, id = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            _max = max
            max = nums[i]
            id = i
        } else if (nums[i] < max && nums[i] > _max) {
            _max = nums[i]
        }
    }
    return max >= 2*_max ? id : -1
};