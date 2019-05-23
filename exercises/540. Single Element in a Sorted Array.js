/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
	if (nums.length === 1) return nums[0]
  	var mid = Math.floor(nums.length / 2);
  	if (!(mid % 2)) {
	  	if (nums[mid-1] === nums[mid]) {
	  		return singleNonDuplicate(nums.slice(0, mid-1))
	  	}  else if (nums[mid+1] === nums[mid]) {
	  		return singleNonDuplicate(nums.slice(mid+2))
	  	} else {
	  		return nums[mid]
	  	}
  	} else {
  		if (nums[mid-1] === nums[mid]) {
	  		return singleNonDuplicate(nums.slice(mid+1))
	  	}  else if (nums[mid+1] === nums[mid]) {
	  		return singleNonDuplicate(nums.slice(0, mid))
	  	}
  	}
};

//ps: 如果没有O(logn)时间复杂度的要求，则用遍历异或做法也很好