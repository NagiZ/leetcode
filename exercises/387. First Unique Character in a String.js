//Solution:
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	function quickSort(a1){
	    if(a1.length<=1){return a1;}
	    var arr = a1.slice(0);
	    var pivotIndex=Math.floor(arr.length/2);
	    var pivot=arr.splice(pivotIndex,1)[0];
	    var left=[];
	    var right=[];
	    for(var i=0;i<arr.length;i++){
	        if(arr[i].fp<pivot.fp){
	            left.push(arr[i]);
	        }
	        else{
	            right.push(arr[i]);
	        }
	    }
	    return quickSort(left).concat([pivot],quickSort(right));
	}
	var c = {}
    for (var i = 0; i < s.length; i++) {
    	let _s = s.charAt(i)
    	if (!c[_s]) {
    		c[_s] = {
    			count: 0,
    			fp: i,
    		}
    	}
    	c[_s].count++
    }
    var rc = quickSort(Object.keys(c).map(key => {
    	return c[key]
    }).filter(o => o.count === 1))[0]
    return rc ? rc.fp : -1
};