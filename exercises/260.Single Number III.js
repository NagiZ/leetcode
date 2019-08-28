/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var map = {}
    for (var i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            delete map[nums[i]]
        }
    }
    return Object.keys(map)
};