/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
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
	        if(arr[i].dis <= pivot.dis){
	            left.push(arr[i]);
	        }
	        else{
	            right.push(arr[i]);
	        }
	    }
	    return quickSort(left).concat([pivot],quickSort(right));
	}
    points = points.map(point => {
    	var temp = {
    		pos: point,
    		dis: Math.sqrt(point[0] * point[0] + point[1] * point[1])
    	}
    	return temp
    })
    points = quickSort(points)
    return points.slice(0, K).map(point => point.pos)
};