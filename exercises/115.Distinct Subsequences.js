// Solution:
// matching[i][j]记录t长度为i的子串和s的长度为j的子串有多少种相同的匹配个数
var numDistinct = function(s, t) {
    if(!t.length){
        return 1;
    }
    if(!s.length){
        return 0;
    }
    var ls = s.length,
        lt = t.length,
        matching = [];
    matching[0] = [];
    matching[0][0] = 1;
    for(var i = 1; i <= lt; i++){
        matching[i] = [];
        matching[i][0] = 0;
    }
    for(var i = 0; i <= ls; i++){
        matching[0][i] = 1;
    }
    for(var i = 1; i <= lt; i++){
        for(var j = 1; j <= ls; j++){
            if(s.charAt(j - 1) == t.charAt(i - 1)){
                matching[i][j] = matching[i - 1][j - 1] + matching[i][j - 1];
            }else{
                matching[i][j] = matching[i][j - 1]
            }
        }
    }
    return matching[lt][ls]
};