/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
//暴力解
var maxSatisfied = function(customers, grumpy, X) {
    var _max = 0,
    	satisfaction = 0;
    for (var i = 0; i < customers.length; i++) {
    	grumpy[i] = 1 - grumpy[i]
    	satisfaction += customers[i] * grumpy[i]
    }
    for (var i = 0; i <= customers.length - X; i++) {
    	var temp = customers[i] * grumpy[i],
    		temp_full = customers[i];
    	for (var j = i + 1; j < i + X; j++) {
    		temp += customers[j] * grumpy[j]
    		temp_full += customers[j]
    	}
    	_max = Math.max(temp_full - temp, _max)
    }
    return satisfaction + _max
};