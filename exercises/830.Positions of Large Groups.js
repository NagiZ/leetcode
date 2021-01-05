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


/**
 * 
 */
var largeGroupPositions = function(s) {
    var ans = [],
        g = 0
    for (var i = 1, l = s.length; i < l; i++) {
        if (s.charAt(i) !== s.charAt(i - 1) || i === l - 1) {
            let d = i - g
            let tag = s.charAt(i) === s.charAt(i - 1) && i === l - 1
            if (tag) {
                d ++
            }
            if (d >= 3) {
                let r = tag? i : i - 1
                ans.push([g, r])
            }
            g = i
        }
    }
    return ans
};