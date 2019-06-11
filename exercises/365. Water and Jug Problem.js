/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    function getGCD(x, y){
    	if(x < y){
    		var t = x
    		x = y
    		y = t
    	}
    	if(y === 0) return x
    	var c = x % y
    	if(c === 0){
    		return y
    	}else{
    		return getGCD(y, c)
    	}
    }
    var gcd = getGCD(x, y)
    return (z === 0 || ((z <= x + y) && z % gcd === 0))
};