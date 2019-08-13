/**
 * @param {number[]} nums
 * @return {number}
 */
//dp
var maxSubArray = function(nums) {
    let ans = nums[0],
    	temp = 0
    for (let i = 0; i < nums.length; i++) {
    	if (temp > 0) {
    		temp += nums[i]
    	} else {
    		temp = nums[i]
    	}
    	ans = Math.max(ans, temp)
    }
    return ans
};

//