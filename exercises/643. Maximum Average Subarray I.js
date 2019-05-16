//Solution: 
var findMaxAverage = function(nums, k) {
    var _max = 0,
          max = 0;
    for (var i = 0; i < k; i++) {
        _max = _max + nums[i]
    }
    max = _max / k
    for (var i = 0; i < nums.length - k; i++) {
        _max = _max + nums[i + k] - nums[i]
        max = Math.max(_max / k, max)
    }
    return max
};