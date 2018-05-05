/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [...nums1, ...nums2].sort((a, b) => {
        return a-b;
    });
    console.log(arr);
    var n = arr.length;
    var mid = Math.floor(n/2);
    console.log(mid);
    if (n==0) return 0;
    if (n==1) return arr[0];
    if (n%2 == 0) {
        return (arr[mid] + arr[mid-1]) /2 ;
        }
    if (n%2 == 1) {
        return arr[mid];
        }
};
var nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var nums2 = [0,6];
console.log(findMedianSortedArrays(nums1, nums2));