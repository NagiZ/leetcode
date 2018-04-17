// Solution:
var sortColors = function(nums) {
    var len = nums.length,
        i = 0;
    while(len){
        if (nums[i] == 0) {
            nums.unshift(nums.splice(i, 1)[0]);
            i++;
        } else if(nums[i] == 2){
            nums.push(nums.splice(i, 1)[0]);
        } else{
            i++;
        }
        len --
    }
};