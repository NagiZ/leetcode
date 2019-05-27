/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
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
    var _h = quickSort(heights),
        count = 0;
    heights.map((v, i) => {
        if (v !== _h[i]) {
            count++
        }
    })
    return count
};