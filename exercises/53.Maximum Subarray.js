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

//分治法
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    function _crossingMax(arr, start, mid, end) {
		let _left = -Infinity,
			_right = -Infinity,
			sum = 0
		for (let i = mid; i >= start; i--) {
			sum += arr[i]
			_left = Math.max(_left, sum)
		}
		sum = 0
		for (let i = mid + 1; i <= end; i++) {
			sum += arr[i]
			_right = Math.max(_right, sum)
		}
		return _left + _right
	}
    function _maxSubArray(arr, start, end) {
    	if (start === end) {
    		return arr[end]
    	} else {
    		let mid = Math.floor((start + end) / 2),
    			max_left = _maxSubArray(arr, start, mid),
    			max_right = _maxSubArray(arr, mid + 1, end),
    			max_crossing = _crossingMax(arr, start, mid, end)
    		if (max_left >= max_right && max_left >= max_crossing) {
    			return max_left
    		} else if (max_right >= max_left && max_right >= max_crossing) {
    			return max_right
    		} else {
    			return max_crossing
    		}
    	}
    }
    return _maxSubArray(nums, 0, nums.length - 1)
};