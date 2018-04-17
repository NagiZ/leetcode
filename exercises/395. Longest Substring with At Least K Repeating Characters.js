// Solution:
// 思路： 先用hash记录每个字符出现的次数，然后将低于k次的用“.” 替换，最后分割开字符串求最长的元素
var longestSubstring = function(s, k) {
    if(s.length < k){
        return 0;
    }
    var len = s.length,
        sa = s.split('');
        hash = {};
    for(var i = 0; i < len; i++){
        hash[sa[i]] = hash[sa[i]] || {count: 0};
        hash[sa[i]].count++;
    }
    var sa_sub = Object.keys(hash).map(v => Object.assign({ele: v}, hash[v])).sort(function(a, b){
        return a.count - b.count;
    });
    if (sa_sub[0].count >= k) {
        return s.length;
    }else{
        var ans = 0;
        var	nsa = sa_sub.filter(v => v.count < k);
        for(var i = 0, slen = nsa.length; i< slen; i++){
            var reg = new RegExp(nsa[i].ele + '+');
            s = s.replace(reg, '.');
        }
        var result = s.split(/\.+/).filter(v => v.length >= k);
        for(var i = 0; i < result.length; i++){
            var sub_r = longestSubstring(result[i], k);
		    ans = ans > sub_r ? ans : sub_r;
        }
        return ans;
    }
};