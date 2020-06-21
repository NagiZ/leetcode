/**
 * 每天根据手里是否有股票，分情况归纳
 * 有股票，则当前最大收益为前一天手里有股票，今天没卖；前一天手里无股票，今天买了；二者取较大值
 * 无股票，则当前最大收益为前一天手里无股票，今天没买；前一天手里有股票，今天卖了；二者取较大值
 */
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    const max_time = 2
    var profit = []
    for (var i = 0, len = prices.length; i < len; i++) {
        profit[i] = [[0, -Infinity]]
        for (var x = 1; x <= max_time; x++) {
            profit[i][x] = []
            if (i === 0) {
                profit[i][x][0] = 0
                profit[i][x][1] = -prices[i]
                continue
            }
            profit[i][x][0] = Math.max(profit[i-1][x][0], profit[i-1][x][1] + prices[i])
            profit[i][x][1] = Math.max(profit[i-1][x][1], profit[i-1][x-1][0] - prices[i])
        }
    }
    return prices.length ? profit[prices.length-1][max_time][0] : 0
};