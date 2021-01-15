/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
//先排序在逐个合并
var insert = function(intervals, newInterval) {
	var _list = [];
    for (var i = 0; i < intervals.length; i++) {
    	_list.push(intervals[i][0], intervals[i][1])
    }
    if (!_list.length) return [newInterval]
    var s = 0,
		e = _list.length - 1,
		fs = false,
		fe = false;
	while(!(fs && fe)) {
		if (_list[s] >= newInterval[0]) {
			fs = true		
		} else {
			s++
		}
		if (_list[e] <= newInterval[1]) {
			fe = true
		} else {
			e--
		}
	}
	e = e + 1
	var l = e - s
	if (!(e % 2)) {
		_list.splice(e, 0, newInterval[1])
	}
	if (!(s % 2)) {
		_list.splice(s, 0, newInterval[0])
		s++
		l--
	}
	_list.splice(s, l)
	var result = []
	for (var i = 0; i < _list.length; i = i + 2) {
		result.push([_list[i], _list[i + 1]])
	}
	return result
};


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals.sort((a, b) => {
        return a[0] - b[0]
    })
	var i = 1
	while(i < intervals.length) {
		if (intervals[i][0] <= intervals[i-1][1]) {
			intervals[i-1][1] = Math.max(intervals[i-1][1], intervals[i][1])
			intervals.splice(i, 1)
		} else {
			i++
		}
	}
	return intervals
};