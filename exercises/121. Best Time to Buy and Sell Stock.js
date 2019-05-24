/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var mp = prices[0],
    	max = 0;
    for (var i = 1; i < prices.length; i++) {
    	if (prices[i] < mp) {
    		mp = prices[i]
    	} else {
    		max = Math.max(prices[i] - mp, max)
    	}
    }
    return max
};