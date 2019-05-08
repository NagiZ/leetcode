//Solution: 拼接
var rotateString = function(A, B) {
	if (A.length !== B.length) return false
    return (A + A).indexOf(B) !== -1
};