/* Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

 var str = 'asdfssgsdf';
 /**
 * @param {string} s
 * @return {number}
 */
console.log(str.split(''));
/* var lengthOfLongestSubstring = function(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
};
console.log(lengthOfLongestSubstring(str)); */

// for in of obj or map
var map1 = {};
map1['a']=3;
map1['b']='sdf';
console.log(map1);
console.log(map1.a);
for (const key in map1) {
    if (map1.hasOwnProperty(key)) {
        const element = map1[key];
        console.log(element);
    }
}
// for of must iteratorable
var arr = [5,234,2];
for (const iterator of arr) {
   console.log(iterator); 
}

var lengthOfLongestSubstring = function(s) {
    const map = {};
    var left = 0;
    var maxLen = 1;
    var arr = s.split('');
    var i = 0;

    for (const iterator of arr) {
       if (map[iterator] >= left) {
        left = map[iterator] +1;
       }
       map[iterator] = i++;
       maxLen = Math.max(maxLen, i - left+1);
     }

     return maxLen;
};
console.log(lengthOfLongestSubstring(str));












var longestPalindrome = function(s) {
    var arr = s.split(''); 
        var map = {};
        var res = {
            left:0,
            right:0
        };
        var left = 0;
        var maxLen = 1;
        var i = 0;
    
        for (const iterator of arr) {
           if (map[iterator]>=0) {
            left = map[iterator];
            right = i;
            console.log(left);
            console.log(right);
            if ((right-left-res.right+res.left)>0){
                res.left = left;
                res.right = right;
            }
            i++;
           } else {
               map[iterator] = i++;
           }
         }
    console.log(res);
         return arr.slice(res.left, res.right+1).join('');
    };
    var ss = 'bbb';
    console.log(longestPalindrome(ss), 'asdf');