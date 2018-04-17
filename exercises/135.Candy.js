// Solution:
var candy = function(ratings) {
    var arr = [];
    arr[0] = 1;
    for(var i = 1; i < ratings.length; i++){
        arr[i] = 1;
        if(ratings[i] > ratings[i - 1]){
            arr[i] = arr[i - 1] + 1;
        }
    }
    for(var  i = ratings.length - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1] && arr[i] < (arr[i + 1] + 1)){
            arr[i] = arr[i + 1] + 1;
        }
    }
    return arr.reduce(function(pre, cur){
        return pre + cur;
    }, 0)
};