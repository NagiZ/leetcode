// Solution: 学习dalao的解法
// 维护一个队列，每次向右扩展，当长度大于k的时候讲队列左端元素弹出；
// 每次扩展时，将新元素与队列内的元素从右端开始比较，若右端元素较小则去除右端元素，知道右端元素大于新元素或者队列为空才停止。
// 这样做的会使维护的队列始终的一个递减队列，从而每次只要在长度到达k的时候将队列的左端元素作为中间结果即可。
var maxSlidingWindow = function(nums, k) {
    var max_nums = [],
        temp_index_arr = [];
    for(var i = 0; i < nums.length; i++){
        if(temp_index_arr.length > 0 && temp_index_arr[0] == i - k){
            temp_index_arr.shift();
        }
        while(temp_index_arr.length > 0 && nums[temp_index_arr[temp_index_arr.length - 1]] < nums[i]){
            temp_index_arr.pop()
        }
        temp_index_arr.push(i)
        if((i + 1) >= k){
            max_nums[i + 1 - k] = nums[temp_index_arr[0]]
        }
        console.log(temp_index_arr)
    }
    return max_nums;
};