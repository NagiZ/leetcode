/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    var ans = 0
    nums = quickSort(nums)
    for (var i = nums.length - 1; i >= 2; i--) {
        var l = 0,
            r = i - 1
        while(l < r) {
            if (nums[l] + nums[r] > nums[i]) {
                ans += (r - l)
                r--
            } else {
                l++
            }
        }
    }
    return ans
};
function quickSort(a1){
    if (!a1) {
        return;
    }
    if(a1.length<=1){return a1;}
    var arr = a1.slice(0);
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] <= pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}