// Solution 1: 
var firstMissingPositive = function(nums) {
    if(nums.length == 0){
        return 1;
    }
    if(nums.length == 1){
        return nums[0] == 1 ? 2 : 1; 
    }
    nums = quickSort(nums);
    var len = nums.length,
        tag = false,
        result;
    if(nums[len - 1] > 1){
        return 1;
    } else {
        while((len--) > 1 && !tag){
            if(nums[len-1] > (nums[len] + 1)){
                var temp = nums[len - 1] - nums[len] - 1;
                if(temp >= nums[len - 1]){
                    if (nums[len - 1] > 1) {
                        result = 1;
                        tag = true;
                        len = 1;
                    }
                }else{
                    result = nums[len] + 1;
                    tag = true;
                    len = 1;
                }
            }
        }
    }
    if(!tag){
        result = nums[0] >= 0 ? nums[0] + 1 : 1; 
    }
    return result;
};

function quickSort(arr){
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}      

// Solution 2: 转化成查找书组里第一个undefined元素的下标

var firstMissingPositive = function(nums) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > 0 ) {
            arr[num - 1] = 1;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return i + 1;
        }
    }
    return arr.length + 1;
};