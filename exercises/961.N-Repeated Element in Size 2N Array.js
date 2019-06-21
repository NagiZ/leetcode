/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    var c = {}
  	for(var i = 0; i < A.length; i++) {
  		if(c[A[i]]) {
  			return A[i]
  		}else {
  			c[A[i]] = 1
  		}
  	}
};