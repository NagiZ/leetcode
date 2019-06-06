/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function cal(n){
    	n = String(n).split('')
    	var po = 0
    	for (var i of n) {
    		po += Math.pow(i, 2)
    	}
    	return po
    }
    var c = {}
    while(n !== 1){
    	var n = cal(n)
    	if (c[n]) return false
    	c[n] = true
    }
    return true
};