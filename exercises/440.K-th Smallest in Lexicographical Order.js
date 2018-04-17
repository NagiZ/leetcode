// Solution:
// 十叉树--学到了
var findKthNumber = function(n, k) {
    // current number
    var cn = 1;
    k--;
    while(k > 0){
        var begin = cn,
            end = cn + 1,
            step = 0;
        while(begin <= n){
            step += Math.min(n + 1, end) - begin;
            begin *= 10;
            end *= 10;
        }
        // 当前前缀数字少于k，遍历下一前缀
        if(step <= k){
            cn++;
            k -= step;
        }else{// 当前前缀数字多于k，在当前前缀下遍历下一位
            cn *= 10;            
            k--;
        }
    }
    return cn;
}