// Solution:
// 每次都计算这次跳跃之后下次能跳跃的最长距离(即共两次跳跃的最大值)
var jump = function(nums) {
    if(nums.length <= 1){
        return 0;
    }
    var len = nums.length - 1,
        jplen = nums[0],
        subJp = nums[0] + nums[nums[0]],//第二次能跳多远
        i = 1,
        steps = 1;
    while(jplen < len){
        if(i <= jplen){//在第一次的范围内寻找第二次最远距离，对于每一次跳跃都能遍历
            subJp = Math.max(subJp, i + nums[i]);
            i++;
        }else{
            steps++;
            jplen = subJp;
        }
    }
    return steps;
};