// Solution:
var summaryRanges = function(nums) {
    if(nums.length == 0){
        return nums;
    }
    if(nums.length == 1){
        return [String(nums[0])];
    }
    var result = [],
        i = 0;
    for(var j = 0, len = nums.length; j < len - 1; j++){
        if(nums[j + 1] > nums[j] + 1){
            if(i != j){
                result.push(nums[i] + '->' + nums[j]);
            }else{
                result.push(String(nums[i]));
            }
            i = j + 1;
        }else{
            if(j == len - 2){
                result.push(nums[i] + '->' + nums[j + 1]);
            }
        }
    }
    if(i == nums.length - 1){
        result.push(String(nums[nums.length - 1]));
    }
    return result;
};