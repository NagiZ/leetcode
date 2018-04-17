// Solution:
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = comp(nums1, nums2, 0, 0);
    return arr.length%2 ? arr[parseInt((arr.length - 1)/2)] : (arr[arr.length/2] + arr[(arr.length/2) - 1])/2;
};
function comp(arr1, arr2, i, j){
    var lena = arr1.length,
        lenb = arr2.length,
        result = [];
    while(i < lena && j < lenb){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    return i == lena ? result.concat(arr2.slice(j)) : result.concat(arr1.slice(i));
}