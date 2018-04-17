// Solution:
// 动态规划
var change = function(amount, coins) {
    var dp = [];
    for(let i=0;i<amount+2;i++){
        dp[i] = 0;
    }
    dp[0] = 1;
    coins.forEach(function(coin){
        for (var i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin];
        }
    });
    return dp[amount];
};