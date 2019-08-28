/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {}
    for (var i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0
        }
        map[nums[i]]++
        if (map[nums[i]] === 3) {
            delete map[nums[i]]
        }
    }
    for (var key in map) {
        return key
    }
};