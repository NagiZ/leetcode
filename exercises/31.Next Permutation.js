// Solution:
var nextPermutation = function(nums) {
    var len = nums.length,
        slen = len,
        targetIndex = null;
    while((slen--) > 1){
        if(nums[slen] > nums[slen - 1]){
            targetIndex = slen - 1;
            slen = 1;
        }
    }
    if(targetIndex !== null){
        for(var i = len - 1; i > targetIndex; i--){
            if(nums[targetIndex] < nums[i]){
                var temp = nums[i];
                nums[i] = nums[targetIndex];
                nums[targetIndex] = temp;
                i = targetIndex;
            }
        }
        var j = targetIndex + 1,
            k = len - 1;
        while(j < k){
            var stemp = nums[j];
            nums[j] = nums[k];
            nums[k] = stemp;
            j++;
            k--;
        }
    }else{
        nums.reverse();
    }
};