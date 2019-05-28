/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
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
	        if(+(arr[i] + pivot) <= +(pivot + arr[i])){
	            right.push(arr[i]);
	        }
	        else{
	            left.push(arr[i]);
	        }
	    }
	    return quickSort(left).concat([pivot],quickSort(right));
	}
	for (var i = 0; i < nums.length; i++) {
		nums[i] = String(nums[i])
	}
	var result = quickSort(nums).join('')
	if (+result === 0) {
		result = '0'
	} 
	return result
};