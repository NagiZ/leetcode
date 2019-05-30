/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    function getGDC(a, b) {
    	a = Math.abs(a)
    	b = Math.abs(b)
    	if (a < b) {
    		var t = a
    		a = b
    		b = t
    	}
    	var c = a % b
    	if (c === 0) {
    		return b
    	} else {
    		return getGDC(b, c)
    	}
    }
    var max = 0
    if (points.length < 2) return points.length
    for (var i = 0; i < points.length; i++) {
    	var slopes = {},
    		basic = 2;
    	for (var j = 0; j < points.length; j++) {
    		if (j !== i) {
    			var dx = points[j][0] - points[i][0],
    				dy = points[j][1] - points[i][1],
    				_key = null;
    			if (dx === 0 && dy === 0) {
    				basic ++
    			} else {
    				if (dx === 0) {
	    				_key = 'infinity'
	    			} else if (dy === 0) {
	    				_key = 'zero'
	    			} else {
	    				var gdc = getGDC(dy, dx)
	    				dy = dy / gdc
	    				dx = dx / gdc
	    				_key = `${dy}/${dx}`
	    			}
	    			slopes[_key] = slopes[_key] ? slopes[_key] + 1 : basic
	    		}
    		}
    	}
    	for (var key in slopes) {
    		max = Math.max(slopes[key], max)
    	}
    	max = Math.max(max, basic - 1)
    }
    return max
};