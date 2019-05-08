// Solution: 
// 采用hash表0/1的方式来确定最长1字串的做法在遇到大数据（如infinity）的时候超时
// 看了网上的solution，采用对数组元素左右扩展计数的方法
// 与manacher算法在降低时间复杂度方面的思想类似
var longestConsecutive = function(nums) {
	if (!nums || nums.length == 0) {
		return 0;
	}
	var max = 0;
	var map = {};
	for(var i = 0; i < nums.length; i++){
		map[nums[i]] = false;
	}

	for(var i = 0; i < nums.length; i++){
		if(map[nums[i]] == false){
			var cur = 1,
				left = nums[i] - 1,
				right = nums[i] + 1;
			while(map[left] === false){
				map[left] = true;//
				cur++;
				left--;
			}
			while(map[right] === false){
				map[right] = true;
				cur++;
				right++
			}
			max = Math.max(max, cur);
		}
	}
	return max
};