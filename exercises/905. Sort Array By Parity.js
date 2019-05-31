/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	var _A = [],
        _B = []
	for (var i = 0; i < A.length; i++){
  		var temp = A[i]
  		if(temp % 2){
  			_A.push(temp)
  		}else{
  			_B.push(temp)
  		}
  	}
  	return _B.concat(_A)
};