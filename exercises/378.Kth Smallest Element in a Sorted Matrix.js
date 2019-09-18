/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    if (!matrix.length) return 0
    for (var i = 1; i < matrix.length; i++) {
        matrix[0] = matrix[0].concat(matrix[i])
    }
    return quickSort(matrix[0])[k - 1]
};
function quickSort(a1){
    if (!a1) {
        return;
    }
    if(a1.length<=1){return a1;}
    var arr = a1.slice(0);
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] <= pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}

//二分
var kthSmallest = function(matrix, k) {
    var n = matrix.length,
        left = matrix[0][0],
        right = matrix[n-1][n-1]
    while(left < right) {
        var mid = Math.floor((left + right) / 2),
            count = 0,
            i = n - 1,
            j = 0
        while(i >=0 && j < n) {
            if (matrix[i][j] <= mid) {
                count += i+1
                j++
            } else {
                i--
            }
        }
        if (count < k) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return right
};