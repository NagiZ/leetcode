/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var ans = []
    for(var i = 0; i < nums.length; i++){
    	var t = Math.abs(nums[i]) - 1
    	nums[t] = -Math.abs(nums[t])
    }
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            ans.push(i + 1)  
        }
    }
    return ans
};