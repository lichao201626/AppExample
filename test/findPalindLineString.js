

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var arr = s.split(''); 
        var map = {};
        var res = {
            left:0,
            right:0
        };
         if(arr.length <= 1) {
            return s;
         }
         if(arr.length == 2) {
            if(arr[0] == arr[1]) {
                return s;
            } else {
                return arr[0].join('');
            }
         }
         var resMap = {
             mid: 0,
             midStatus:0,
             totalLength:1,
             length: 0
         }
         let mid = Math.floor(arr.length/2);
         console.log('sdfasdf', mid);
         for (var i = 0; i<mid; i++) {
            if (resMap.length < (mid-i+1)) {
                findThePalindLineString(arr, mid-i, resMap);
                findThePalindLineString(arr, mid+i, resMap);
            }
         }
         console.log(resMap);
         if (resMap.midStatus == 0) {
            return arr.slice(resMap.mid-resMap.length, resMap.mid+resMap.length+1).join('');
         } else if (resMap.midStatus == 1) {
            return arr.slice(resMap.mid-resMap.length+1, resMap.mid+resMap.length+1).join('');
         } else {
            return arr.slice(resMap.mid-resMap.length, resMap.mid+resMap.length).join('');
         }
    };
    var findThePalindLineString = function(arr, mid, resMap) {
        var status = 0;
        while (status < 3) {
            var length = 1;
        if(status == 0) {
            while(arr[mid+length] === arr[mid-length] && length <= mid) {
                console.log('while', length);
                console.log(arr[mid+length]);
                console.log(arr[mid-length]);
                length++;
            }
            if(2*(length-1)+1 > resMap.totalLength){
                console.log('in the mid');
                resMap.mid = mid;
                resMap.midStatus = 0;
                resMap.totalLength = 2* (length-1) +1;
                resMap.length = length-1;
                console.log(resMap);
            }
        } else if (status == 1) {
            while(arr[mid+length] == arr[mid-length+1] && length <= mid) {
                length++;
            }
            if(2*(length-1) > resMap.totalLength){
                console.log('mid left');
                resMap.mid = mid;
                resMap.midStatus = 1;
                resMap.totalLength = 2*(length-1);
                resMap.length = length-1;
                console.log(resMap);
            }
        } else {
            while(arr[mid+length-1] == arr[mid-length] && length <= mid) {
                length++;
            }
            if(2*(length-1) > resMap.totalLength){
                console.log('mid right');
                resMap.mid = mid;
                resMap.midStatus = 2;
                resMap.totalLength = 2*(length-1);
                resMap.length = length-1;
                console.log(resMap);
            }
        }
        status ++;
    }
    console.log('findMethod', resMap);
        return resMap;
    };

    var str = 'ccc';
    console.log(longestPalindrome(str));