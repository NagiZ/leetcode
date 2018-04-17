// Solution--> H-Index:
var hIndex = function(citations) {
    var len = citations.length,
        sc = quickSort(citations),
        h = 0,
        i = 0;
    while(i < len && sc[i] > h){
        i++;
        h++
    }
    return h;
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

// Solution: H-Index II
var hIndex = function(citations) {
    var len = citations.length,
        h = 0;
    while(len && citations[len - 1] > h){
        h++;
        len--;
    }
    return h;
};