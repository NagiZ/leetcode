//Solution: 贪心法- -，每次都取最优解（即当前能到达的最远位置）
function canJump(nums) {
    var max_dis = nums[0];
    for(var i = 1; i < nums.length; i++){
        if(max_dis >= i){
            if((i+nums[i]) > max_dis){
                max_dis = i + nums[i];
            }
        }
    }
    return max_dis >= nums.length - 1;
};