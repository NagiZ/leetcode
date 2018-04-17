// Solution:
// 解题思路：从两个数组中找到各自的最大子序列，长度分别为i 和k - i，再将两个子序列组合成最大数。
function subArr(arr, n){
    var out = [],
        mi = -1,
        max = 0;
    while(n){	
        var sub_arr = arr.slice(mi + 1);
        var sublen = sub_arr.length - n + 1,
            index = 0;
        for(var i = 0; i < sublen; i++){
            if (sub_arr[i] > max) {
                max = sub_arr[i];
                index = i;				}
        }
        out.push(max);
        mi += index + 1;
        max = 0;
        n--;
    }
    return out;
}

function comp(arra, arrb, ia, ib) {
    while(ia < arra.length && ib < arrb.length && arra[ia] == arrb[ib]){
        ia++;
        ib++;
    }
    return ib == arrb.length || (ia < arra.length && arra[ia] > arrb[ib]);
}

function merge(arr1, arr2){
    var out = [],
        len = arr1.length + arr2.length,
        i = 0,
        j = 0;
    while(len){
        if (comp(arr1, arr2, i, j)) {
            out.push(arr1[i]);
            i++;
        }else{
            out.push(arr2[j]);
            j++;
        }
        len--;
    }
    return out;
}

function maxNumber(arr1, arr2, k) {
    var result = [];
    for(var i = (0 > k - arr2.length) ? 0 : k - arr2.length; i <= k && i <= arr1.length; i++){
        var sub = merge(subArr(arr1, i), subArr(arr2, k - i));
        result = comp(result,sub, 0, 0) ? result : sub;
    }
    return result;
};