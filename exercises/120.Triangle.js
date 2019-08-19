/**
 * @param {number[][]} triangle
 * @return {number}
 */
//dp 自顶向下 O(n^2) 空间复杂度
var minimumTotal = function(triangle) {
    let dp = []
    dp[0] = [triangle[0][0]]
    if (triangle.length < 2) {
    	return dp[0][0]
    }
    dp[1] = [triangle[1][0] + triangle[0][0], triangle[1][1] + triangle[0][0]]
    for (let i = 2; i < triangle.length; i++) {
    	dp[i] = []
    	dp[i][0] = dp[i-1][0] + triangle[i][0]
    	dp[i][i] = dp[i-1][i-1] + triangle[i][i]
    }
    for (let i = 2; i < triangle.length; i++) {
    	for (let j = 1; j < i; j++) {
    		dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j]
    	}
    }
    let ans = Infinity
    for (let sum of dp[triangle.length - 1]) {
    	ans = Math.min(sum, ans)
    }
    return ans
};

//dp 自底向上 O(n) 空间复杂度
var minimumTotal = function(triangle) {
    let dp = triangle[triangle.length - 1]
    if (triangle.length >= 2) {
        for (let i = triangle.length - 2; i >= 0; i--) {
            for (let j = 0; j <= i; j++) {
                dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
            }
        }
    }
    return dp[0]
};