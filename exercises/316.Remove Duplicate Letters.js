// Solution:
// 思路：先去重排序得到arr；从arr[0]开始取字符作为开头，在s里截取看是否包含所有字符（一次）；
// 是则取该字符，并搜索下一个；否则直接开始下一个。
var removeDuplicateLetters = function(s) {
    if(s.trim().length == 0){
        return s;
    }
    var subarr = s.split(''),
        result = [];
    var arr =  [...new Set(subarr)].sort(function(s1, s2){
        var x1 = s1.toUpperCase(),
            x2 = s2.toUpperCase();
        if(x1 < x2){
            return -1;
        }
        if(x1 > x2){
            return 1;
        }
        return 0;
    })
    result = sb(arr, subarr);
    return result;
};
function sb(a1, a2){
    if(a1.length == 1){
        return a1[0];
    }
    var i = 0,
        result = '';
    while(i < a1.length){
        var index = a2.indexOf(a1[i]),
            temp = [...new Set(a2.slice(index))];
        if(temp.length == a1.length){
            result = a1[i];
            a1.splice(i, 1)
            a2 = a2.slice(index + 1).filter(v => v != result);
            i = a1.length + 1;
        }else {
            i++;
        }
    }
    return result + sb(a1, a2);
}