// Solution:
// n+1 行是 n 行 拼接 n 行的反序排列
var kthGrammar = function(N, K) {
    if(K == 1){
        return 0
    }
    if(K == 2){
        return 1
    }
    var i = 0,
        j = 0,
        arr = [0, 1],
        arr_rev = [1, 0];
    while(K > Math.pow(2, i + 1)){
        i++;
    }
    while(K > 2){
        if(K > Math.pow(2, i)){
            K = K - Math.pow(2, i);
            j++;
        }
        i--;
    }
    return Math.pow(-1, j) > 0 ? arr[K-1] : arr_rev[K - 1];
};