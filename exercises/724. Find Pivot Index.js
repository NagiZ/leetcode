/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
	var s_e = [0],
		e_s = [];
	e_s[nums.length - 1] = 0
	for(var i = 1; i < nums.length; i++){
		s_e[i] = s_e[i - 1] + nums[i - 1]
		e_s[nums.length - i - 1] = e_s[nums.length - i] + nums[nums.length - i]
	}
	for(var i = 0; i < nums.length; i++){
		if(s_e[i] === e_s[i]){
			return i
		}
	}
	return -1
};