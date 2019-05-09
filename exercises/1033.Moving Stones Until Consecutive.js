//Solution:
var numMovesStones = function(a, b, c) {
	var arr = [a, b, c].sort((a, b) => {
		return a - b
	})
	a = arr[0]
	b = arr[1]
	c = arr[2]
	var _sub = b - a - 1,
		_sup = c - b - 1,
		min = _sub * _sup ? (Math.min(_sub, _sup) >= 2 ? 2 : Math.min(_sub, _sup)) : (_sub + _sup) ? 1 : 0
	return [min, _sub + _sup]
};