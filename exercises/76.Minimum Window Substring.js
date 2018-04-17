// Solution: 
var minWindow = function(s, t) {
    if (t.length == 1) {
        if (s.split('').indexOf(t) != -1) {
            return t;
        }else{
            return ''
        }
    }else if(t.length == 0){
        return '';
    }
    var sa = s.split(''),
        ta = t.split(''),
        sa_sub = [],
        result = '',
        count = 0;
    sa_sub = sa.map((v, i) => {
        if(ta.indexOf(v)==-1){
            return null;
        } else {
            return {ele: v, index: i}
        }
    }).filter(v => v!=null)
    if (sa_sub.length < t.length) {
        return '';
    }
   	// 核心===>记录需要的字符数以及已经找到的字符数
   	// 每找到一个t中的字符，就更新curFind
   	// count（需要的t字符长度）如果与t的长度相等，说明已经找齐，则左侧向右缩进
    var slen = sa_sub.length,
        tlen = t.length,
        min = s.length,
        toFind = {},
        curFind = {};
    for(var i = 0; i < tlen; i++){
        toFind[ta[i]] = toFind[ta[i]] || 0;
        toFind[ta[i]]++;
    }
    for(var i = 0, j = 0; j < slen; j++){
        curFind[sa_sub[j].ele] = curFind[sa_sub[j].ele] || 0;
        curFind[sa_sub[j].ele]++;
        if (curFind[sa_sub[j].ele] <= toFind[sa_sub[j].ele]) {
            count++;
        }
        if (count == tlen) {
            while(curFind[sa_sub[i].ele] > toFind[sa_sub[i].ele]){
                curFind[sa_sub[i].ele]--;
                i++
            }
            var curLen = sa_sub[j].index - sa_sub[i].index + 1;
            if (curLen <= min) {
                min = curLen;
                result = s.substr(sa_sub[i].index, curLen);;
            }
        }
    }
    return count == tlen ? result : '';
};