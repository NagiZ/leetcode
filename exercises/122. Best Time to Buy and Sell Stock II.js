/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0],
    	max = 0;
    for (var i = 1; i < prices.length; i++) {
    	if (prices[i] < prices[i - 1]) {
    		max += prices[i - 1] - min
			min = prices[i]
    	} else if (i === prices.length - 1) {
    		max += prices[i] - min
    	}
    }
    return max
};