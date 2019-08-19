/**
 * @param {number[]} nums
 * @return {number}
 */
//dp
var maxProduct = function(nums) {
    let ans = -Infinity,
    	max =  1,
    	min = 1
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] < 0) {
    		let temp = min
    		min = max
    		max = temp
    	}
    	min = Math.min(min * nums[i], nums[i])
    	max = Math.max(max * nums[i], nums[i])
    	ans = Math.max(ans, max)
    }
    return ans
};