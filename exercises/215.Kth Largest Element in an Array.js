/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
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
            if(arr[i] >= pivot){
                left.push(arr[i]);
            }
            else{
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([pivot],quickSort(right));
    }
    nums = quickSort(nums)
    return nums[k - 1]
};