// Solution:
var longestValidParentheses = function(s) {
    var reg = /\(k*\)/,
        sub;
    if(!reg.test(s)){
        return 0;
    }
    return quickSort(jd(s, reg).split(/[^k]+/g))[0].length
    console.log(s);
};
function jd(s, reg) {
    var arr;
    while((arr = reg.exec(s))!==null){
        var sq = arr[0].replace(/./g, 'k');
        s = s.replace(arr[0], sq);
    }
    return s;
}

function quickSort(arr){
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i].length>=pivot.length){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
} 