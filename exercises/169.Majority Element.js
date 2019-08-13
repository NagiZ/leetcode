/**
 * @param {number[]} nums
 * @return {number}
 */
//暴力解
var majorityElement = function(nums) {
    let map = {},
  		th = Math.floor(nums.length / 2)
  	for (let num of nums) {
  		if (!map[num]) {
  			map[num] = 0
  		}
  		map[num]++
  		if (map[num] > th) {
  			return num
  		}
  	}
};

//换个思路 Boyer-Moore 投票算法
/**
 * @param {number[]} nums
 * @return {number}
 */
//mje候选众数，遇到相同的 count+1, 否者-1. count = 0，则mje重置，以下一个索引的元素作为侯选数。如此类推，每次重置，最少都舍弃了同等数量的众数和非众数，故而余下的数里，众数的数量仍旧大于非众数的数量。
var majorityElement = function(nums) {
    let mje = null,
		_c = 0
	for (let i = 0; i < nums.length; i++) {
		if (mje === null) {
			mje = nums[i]
			_c = 1
		} else {
			if (nums[i] === mje) {
				_c++
			} else {
				_c--
			}
		}
		if (_c === 0) {
			mje = null
		}
	}
	return mje
};
