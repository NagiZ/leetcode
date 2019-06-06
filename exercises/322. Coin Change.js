/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//动态规划，dp[n] 零钱 n 所需的最小coins数，则dp[n] = Math.min(dp[n], dp[n - coin[i]] + 1) 即递推公式
var coinChange = function(coins, amount) {
    var dp = [0]
    for (var i = 1; i <= amount; i++) {
    	dp[i] = Infinity
    	for (var j of coins) {
    		if (i >= j) {
    			dp[i] = Math.min(dp[i], dp[i - j] + 1)
    		}
    	}
    }
    if (dp[amount] !== undefined && dp[amount] < Infinity) {
    	return dp[amount]
    } else {
    	return -1
    }
};