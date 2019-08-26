/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    } else if (!newInterval) {
        return intervals
    }
	function findIndex (arr, sum, low, high) {
		if (low === high) {
			return arr[low][0] >= sum ? low : low + 1
		}
		var mid = Math.floor((low + high) / 2)
		if (sum > arr[mid][0]) {
			return findIndex(arr, sum, mid + 1, high)
		} else {
			return findIndex(arr, sum, low, mid)
		}
	}
	var id = findIndex(intervals, newInterval[0], 0, intervals.length - 1)
	intervals.splice(id, 0, newInterval)
	var i = id + 1,
		l = intervals.length
	for (i = id + 1; i < l; i++) {
		if (intervals[i][0] > newInterval[1]) {
			break
		}
	}
	if (intervals[i - 1]) {
		intervals[id][1] = Math.max(intervals[id][1], intervals[i - 1][1])
		intervals.splice(id + 1, i - id - 1)
	}
	if (id) {
		if (intervals[id-1][1] >= newInterval[0]) {
			intervals[id - 1][1] = Math.max(intervals[id-1][1], intervals[id][1])
			intervals.splice(id, 1)
		}
	}
	return intervals
};