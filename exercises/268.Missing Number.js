/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var i = 1,
        ans = 0
    while(i <= nums.length) {
        ans = ans ^ nums[i - 1] ^ i
        i++
    }
    return ans
};