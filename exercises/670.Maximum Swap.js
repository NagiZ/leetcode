// Solution:
var maximumSwap = function(num) {
    var arr = String(num).split(''),
        subArr = quickSort(arr);
        len = arr.length,
        i = 0;
    while(arr[i] == subArr[i] && i < len){
        i++;
    }
    if(i != len){
        var index = arr.lastIndexOf(subArr[i]);
        arr[index] = arr[i];
        arr[i] = subArr[i];
    }
    return Number(arr.join(''));
};
function quickSort(a1){
    if(a1.length<=1){return a1;}
    var arr = a1.slice(0);
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}