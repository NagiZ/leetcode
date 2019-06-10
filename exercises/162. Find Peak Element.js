/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var i = 0,
        j = nums.length - 1;
    while(i < j){
        var temp = Math.floor((i + j) / 2);
        if(nums[temp] > nums[temp+1]){
            j = temp
        }else{
            i = temp+1
        }
    }  
    return i
};