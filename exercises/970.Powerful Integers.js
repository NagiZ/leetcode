//Solution: 
var powerfulIntegers = function(x, y, bound) {
    var rc = new Set()
	for (var a = 1; a < bound; a *= x) {
		for (var b = 1; a + b <= bound; b *= y) {
			rc.add(a + b)
			if (y === 1) break
		}
		if (x === 1) break
	}
	return [...rc]
};