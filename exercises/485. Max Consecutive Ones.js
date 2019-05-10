//Solution:
var findMaxConsecutiveOnes = function(nums) {
    nums = nums.join('').split('0').map(v => v.length)
    return Math.max(...nums)
};