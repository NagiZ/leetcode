/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var e = 0,
    	o = 1,
    	result = [];
    for(var i = 0; i < A.length; i++){
    	if(A[i] & 1) {
    		result[o] = A[i]
    		o += 2
    	}else{
    		result[e] = A[i]
    		e += 2
    	}
    }
    return result
};