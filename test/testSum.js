var twoSum = function(nums, target) {
    var result = [];
    var i = nums.length/2 -1;
    var j = nums.length/2;
    for (var i = 0; i < nums.length -1 ; i++) {
        var j = nums.indexOf(target - nums[i]);
        if (j > i) {
            return [i,j];
        }
    }
    return result;
};
var nums = [3,2,4];
var target = 6;
console.log(twoSum(nums, 6));