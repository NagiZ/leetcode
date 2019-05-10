/**
 * Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
 * 
 * Solution
 */
//1
var sortedSquares = function(A) {
    return A.map(v => v * v).sort((a, b) => a - b)
};

//2
var sortedSquares = function(A) {
    var len = A.length - 1,
		id = 0,
		op = []
	for (var i = len; i > 0; i--) {
		op[i] = A[id] * A[id] > A[len] * A[len] ? A[id] * A[id++] : A[len] * A[len--]
	}
	return op
};