/**
 * @param {number[]} nums
 * @return {number[]}
 */
//用一个ans数组存储重复的数字
var findDuplicates = function(nums) {
	var ans = []
   	for(var i = 0; i < nums.length; i++){
   		var t = Math.abs(nums[i]) - 1
   		if(nums[t] < 0){
   			ans.push(t + 1)
   		}else{
   			nums[t] = -nums[t]
   		}
   	}
   	return ans
}