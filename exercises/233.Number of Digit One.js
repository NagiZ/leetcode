// Solution:
// 从个位开始分别计算每个位置1出现的次数
var countDigitOne = function(n) {
    if(n <= 0){
        return 0;
    }
    var m = 10,
        reminder = n,
        quotient = Math.floor(n / m),
        sum = 0;
    while(Math.floor((n/m))){
        reminder = Math.floor((n%m)*10 / m) ;
        quotient = parseInt(n/m);
        var temp = 0;
        if (reminder > 1) {
            temp = (quotient + 1) * m / 10;
        } else if (reminder < 1){
            temp = quotient * m / 10;
        } else {
            temp = quotient * m / 10 + n % (m /10) + 1;
        }
        sum += temp;
        m = m * 10;
    }
    sum += m > 10 ? (quotient > 1 ? m / 10 : n % (m / 10) + 1) : 1;
    return sum;
};