// Solution:
// Manacher算法，核心就是根据回文的特点（中心对称），尽可能地最大化初始值
var longestPalindrome = function(s) {
    s = smoothS(s);
    var result = {
        point: 0,
        radius: 0
    },
        lenarr = [0],
        pos = 0,
        mx = 0,
        arr = s.split('');
    for(var i = 1, len = s.length; i < len - 1; i++){
        if(i < mx){
            lenarr[i] = Math.min(lenarr[2*pos - i], mx - i);
        }else{
            lenarr[i] = 1
        }
        while(arr[i-lenarr[i]] == arr[i+lenarr[i]] && (i-lenarr[i]) >= 0 && (i+lenarr[i]) < s.length){
            lenarr[i]++
        }
        if(mx < lenarr[i] + i){
            pos = i;
            mx = i + lenarr[i];
        }
        result = result.radius >= (lenarr[i]-1) ? result : {point: i, radius: lenarr[i] - 1 }
    }
    return arr.slice(result.point - result.radius, result.point + result.radius + 1).filter(v => v != '#').join('');
};

function smoothS (s) {
   return '#' + s.split('').map(v => v + '#').join('');
}