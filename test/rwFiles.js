var fs = require('fs');
var path = require('path');

var path1 = '/Users/lichao/Documents/a.txt';
var path2 = '/Users/lichao/Documents/b.txt';

var data = fs.readFile(path1, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile(path2, data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('end');
            }           
        })
    }
});
