//Solution
var findLength = function(A, B) {
    var i = 1,
        ans = 0,
        dp = []
    const la = A.length,
          lb = B.length;
    for (var x = 0; x < la; x++) {
        dp[x] = []
        if (A[x] === B[0]) {
            dp[x] = [1]
        } else {
            dp[x] = [0]
        }
    }
    for (var x = 0; x < lb; x++) {
        if (A[0] === B[x]) {
            dp[0][x] = 1
        } else {
            dp[0][x] = 0
        }
    }
    while(i < la) {
        let j = 1;
        
        while(j < lb) {
            if (A[i] === B[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = 0
            }
            ans = Math.max(dp[i][j], ans)
            j++
        }
        i++
    }
    return ans
};