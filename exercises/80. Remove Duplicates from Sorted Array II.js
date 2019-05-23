/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var c = {},
        i = 0
    while(i < nums.length) {
        if (c[nums[i]] === 2) {
            nums.splice(i, 1)
        } else {
            c[nums[i]] = c[nums[i]] ? c[nums[i]] + 1 : 1
            i++
        }
    }
    return nums.length
};