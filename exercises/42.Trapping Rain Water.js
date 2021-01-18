// Solution:
var trap = function(height) {
    if(height.length < 3){
        return 0;
    }
    var len = height.length,
        train = 0,
        min = height[0],
        minIndex = 0;
    for(var i = 1; i < len; i++){
        //在遍历的过程中可以直接得到每一步的train结果
        if (height[i] >= min) {
            for(var j = minIndex + 1; j < i; j++){
                train += min - height[j];
            }
            min = height[i];
            minIndex = i;
        }
    }
    if (minIndex == (len - 1)) {
        return train;
    }else{
        var subH = height.slice(minIndex).reverse();
        return train + trap(subH);
    }
};