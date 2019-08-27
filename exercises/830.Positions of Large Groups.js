/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    var result = [],
    	start = 0,
    	end = 1
    for (var i = 1; i < S.length; i++) {
    	if (S.charAt(i) !== S.charAt(i - 1)) {
    		if (end - start >= 2) {
    			result.push([start, end])
    		}
    		start = i
    	}
    	end = i
    }
    if (end - start >= 2) {
    	result.push([start, end])
    }
    return result
};