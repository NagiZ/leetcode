//Solution:
var getHint = function(secret, guess) {
	secret = String(secret)
	guess = String(guess)
    var l = secret.length,
    	sc = {},
    	gc = {},
    	a = 0,
    	b = 0
    for (var i = 0; i < l; i++) {
    	var _s = secret.charAt(i)
    	var _g = guess.charAt(i)
    	if (_s === _g) {
    		a++
    	} else {
    		sc[_s] = sc[_s] ? sc[_s] + 1 : 1
    		gc[_g] = gc[_g] ? gc[_g] + 1 : 1
    	}
    }
    for (var key in sc) {
    	if (gc[key]) {
    		var _b = Math.min(sc[key], gc[key])
    		b += _b
    	}
    }
    return `${a}A${b}B`
};