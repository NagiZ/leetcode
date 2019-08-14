/**
 * @param {number[]} nums
 * @return {number[]}
 */
//从原数组末尾开始，二分排序，记录每一个元素在该次二分插入时在辅助数组中的索引，即原数组中该元素右侧小于该元素的元素的个数
var countSmaller = function(nums) {
    function dichotomySort (sums, sum, low, high) {
    	if (high === low) {
    		let index = sums[low] >= sum ? low : low + 1
    		return index
    	}
    	let mid = Math.floor((low + high) / 2)
    	if (sum > sums[mid]) {
    		return dichotomySort(sums, sum, mid + 1, high)
    	} else {
    		return dichotomySort(sums, sum, low, mid)
    	}
    }
    if (nums.length === 0) return [] 
    let arr = [nums[nums.length - 1]],
    	ans = [0]
    for (i = nums.length - 2; i >= 0; i--) {
    	let id = dichotomySort(arr, nums[i], 0, arr.length - 1)
    	arr.splice(id, 0, nums[i])
    	ans.unshift(id)
    }
    return ans
};