// Solution:
var maximumGap = function(nums) {
    if(nums.length < 2){
        return 0;
    }
    nums = quickSort(nums);
    var result = 0;
    for(var i = 0; i < nums.length - 1; i++){
        var temp = nums[i + 1] - nums[i];
        result = temp > result ? temp : result;
    }
    return result;
};
function quickSort(a1){
    if(a1.length<=1){return a1;}
    var arr = a1.slice(0);
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}