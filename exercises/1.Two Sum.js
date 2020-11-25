/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */
var twoSum = function(nums, target) {
    var map = {},
    	op = []
    for (var i = 0; i < nums.length; i++) {
    	if (!map[nums[i]]) {
    		map[nums[i]] = []
    	}
    	map[nums[i]].push(i)
    }
    for(var i = 0; i < nums.length; i++) {
    	let temp = target - nums[i]
    	if (map[temp]) {
    		if (map[temp][0] !== i) {
    			return [i, map[temp][0]]
    		} else {
    			if (map[temp][1]) {
    				return [i, map[temp][1]]
    			}
    		}
    	}
    }
};