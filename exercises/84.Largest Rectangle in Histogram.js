// Solution 1: 暴力解，超时
var largestRectangleArea = function(heights) {
    if(!heights.length){
        return 0
    }
    var result = heights[0];
    for (var i = 0; i < heights.length; i++) {
        var subResult = calAreas(heights[i], i, heights);
        result = result > subResult ? result : subResult;
    }
    return result;
};



function calAreas (height, index, heightArr) {
    var length = heightArr.length;
    var left = index,
        right = index,
        unit = height;
    while(left-- && heightArr[left] >= unit){
        height += unit;
    }
    while((right++ < length) && heightArr[right] >= unit) {
        height += unit;
    }

    return height;
}

//Solution 2: 利用一个stack来实时保存当前升序序列的index；
//解法的核心是利用升序序列在计算时的规律
function largestRectangleArea (heights) {
    if (!heights || heights.length === 0) {
        return 0;
    }
    heights = heights.concat([0]);//拼接一个0，最为扫描的终止条件
    let stack = [0];//记录节点位置，即升序操作中没有被处理的数组元素的索引
    let maxArea = heights[0];
    for (let i = 1; i < heights.length; i++) {
        const currentTop = heights[stack[stack.length - 1]];
        if (stack.length === 0 || heights[i] > currentTop) {
            stack.push(i);//这里压入栈的是索引
        } else {
            while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
                let hIndex = stack.pop();
                maxArea = Math.max(maxArea, heights[hIndex] * (i - (stack.length === 0 ? 0 : stack[stack.length - 1] + 1)));
            }
            stack.push(i)
        }
    }
    return maxArea;
}