/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    var ans = 0,
        i = 0
    for (var num of nums) {
        if (i % 2 === 0) {
            ans += num
        }
        i++
    }
    return ans
};