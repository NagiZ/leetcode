// Solution:
var topKFrequent = function(nums, k) {
    var hash = {};
    for(var i = 0; i < nums.length; i++){
        hash[nums[i]] = hash[nums[i]] || {ele: nums[i], count: 0, index: i};
        hash[nums[i]].count++;
    }
    var re = quickSort(Object.keys(hash).map(v => {
        return {ele: v, count: hash[v].count, index: hash[v].index}
    }));
    var result = [];
    for(var i = 0; i < k; i++){
        result.push(parseInt(re[i].ele));
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
        if(arr[i].count>pivot.count){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}