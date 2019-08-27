/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var maps = {},
    	result = []
    for (var i = 0; i < arr1.length; i++) {
    	if (!maps[arr1[i]]) {
    		maps[arr1[i]] = []
    	}
    	maps[arr1[i]].push(arr1[i])
    }
    for (var i = 0; i < arr2.length; i++) {
    	result = result.concat(maps[arr2[i]])
    	delete maps[arr2[i]]
    }
    for (var key in maps) {
    	result = result.concat(maps[key])
    }
    return result
};