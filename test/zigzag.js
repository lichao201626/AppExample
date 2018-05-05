/* for PAYPALISHIRING,4, the matrix would like below, just ignore the index:

    P     I     N
    A   L S   I G
    Y A   H R
    P     I */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var totalLength = s.length;
    var res = {};
    var result = '';
    if (totalLength <= numRows || numRows <= 1) {
        return s;
    }
    // 初始化 res
    for (var i =0; i<numRows; i++) {
      res[i] = '';
    }
    // 判断 numRows单双
    var flag = numRows % 2 == 0 ? true : false;
    var lineNums = numRows;
    var linePos = 0;
    var lineKey = 0;
    // 入座算法
    var arr = s.split('');
    for (var i=0; i<arr.length; i++) {
        value = arr[i];
        if (lineKey == 0) {
            res[linePos] += value;
            if(linePos == numRows-1) {
                // lineKey++;
                if (lineNums > 2) {
                    lineKey++;
                }
                linePos = numRows-2;
            }else{
                linePos++;
            }          
        } else if (lineKey == numRows-1-1 ) {
            res[linepos] += value;
            lineKey = 0;
            linePos = 0;
            lineNums = numRows;  
        } else {
            res[linePos]+=value;
            lineKey++;
            linePos--;
        }
    }
    // 输出
    console.log(res);
    for (var i =0; i<numRows; i++) {
      result += res[i];
    }
    return result;
};
var s = 'ABCD';
console.log(convert(s, 2));



console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

var reverse = function(x) {
    if (x == 0) {
        return x;
        }
 var flag = x > 0 ? 1 : -1;
    var arr = (x+'').split('').reverse();
    for(var i=0; i< arr.length-1; i++){
        if(arr[i] != 0) {
           break;
           }
    }
    var ss = arr.slice(i, arr.length).join('');
        var res = parseInt(ss);
    if (res>Number.MAX_VALUE) {
        console.log('why');
        return 0;
    } else {
        return res*flag;
    }
};
var x = -123;
console.log(reverse(x));