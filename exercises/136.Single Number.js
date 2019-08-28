/**
 * @param {number[]} nums
 * @return {number}
 */
//推荐解法
var singleNumber = function(nums) {
    var num = 0
for (var i = 0; i < nums.length; i++) {
    num = num ^ nums[i]
}
return num
};