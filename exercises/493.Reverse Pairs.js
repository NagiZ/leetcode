/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    function dichotomySort(sums, sum, low, high) {
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
    function dichotomySortTwice(sums, sum, low, high) {
    	if (high === low) {
    		let index = 2 * sums[low] >= sum ? low : low + 1
    		return index
    	}
    	let mid = Math.floor((low + high) / 2)
    	if (sum > 2 * sums[mid]) {
    		return dichotomySortTwice(sums, sum, mid + 1, high)
    	} else {
    		return dichotomySortTwice(sums, sum, low, mid)
    	}
    }
    if (nums.length < 2) return 0
    let arr = [nums[nums.length - 1]],
    	count = 0
    for (var i = nums.length - 2; i >= 0; i--) {
    	let id = dichotomySort(arr, nums[i], 0 , arr.length - 1),
    		_id = dichotomySortTwice(arr, nums[i], 0 , arr.length - 1)
    	count += _id
    	arr.splice(id, 0 , nums[i])
    }
    return count
};